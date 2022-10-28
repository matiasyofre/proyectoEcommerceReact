import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

export const getAllProducts = () => {
  const database = getFirestore();
  const collectionReference = collection(database, 'items');

  return getDocs(collectionReference)
    .then(snapshot => {
      const list = snapshot
        .docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
      return list;
    })
    .catch(error => console.warn(error))
};

export const getProduct = (id) => {
  const database = getFirestore();
  const itemReference = doc(database, 'items', id);
  return getDoc(itemReference)
    .then(snapshot => {
      if(snapshot.exists()) {
        const item = {
          id: snapshot.id,
          ...snapshot.data()
        };
        return item;
      }
    })
  
};

export const getProductsByCategory = (categoryId) => {
  const database = getFirestore();
  const collectionReference = collection(database, 'items');
  const collectionQuery = query(collectionReference, where('category', '==', categoryId))
  
  return getDocs(collectionQuery)
    .then(snapshot => {
      if (snapshot.size === 0)
        return [];
      
      const list = snapshot
        .docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
      return list;
    })
    .catch(error => console.warn(error))
};

const products = [
  { title:'MONOPATIN ELECTRICO MAX-YOU E-BOOSTER', category: 'Movilidad-Urbana', description:'Marca: MAX YOU', price: 389999, pictureUrl: 'https://www.cellfox.com.ar/products_images/12357_a7db9a2bb3d479434fe827ae91cf.webp', stock: 20},
  { title:'BICICLETA ELÉCTRICA MOMO DESIGN IBIZA 20 - MODELO MD-E20F2-Y', category: 'Movilidad-Urbana', description:'Marca: MOMO', price: 249999, pictureUrl: 'https://www.cellfox.com.ar/products_images/13240_d_nq_np_2x_724566-mla49737032012_042022-f_copy.webp', stock: 15},
  { title:'HOVERBOARD ELECTRICO MAX YOU F5 NEGRO', category: 'Movilidad-Urbana', description:'Marca: MAX YOU', price: 45999, pictureUrl: 'https://www.cellfox.com.ar/products_images/8847_00000000000hbf5b41460-mg-2905-min_copy.webp', stock: 30 }
]

export const createAllProducts = async () => {
  try {
    const database = getFirestore(); 
    const collectionReference = collection(database, 'items');
    for(let i = 0; i < products.length; i++) {
      const snapshot = await addDoc(collectionReference, products[i]);
    }
  } catch (error) {
    console.warn(error)
  }
}

