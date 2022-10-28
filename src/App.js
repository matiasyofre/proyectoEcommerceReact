import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { CartProvider } from './contexts/CartContext';
import Footer from './components/Footer/Footer';

function App() {
    return (
      <BrowserRouter basename='/proyectoEcommerceReact'>
        <CartProvider>
          <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Somos Mundo tech: Tenemos el producto que buscás, todo al alcance de un solo click.'} />} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Somos Mundo tech: Tenemos el producto que buscás, todo al alcance de un solo click.'} />} />
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
            </Routes>
        </CartProvider>
        <Footer />
      </BrowserRouter>
    );
}

export default App;
