import { useContext, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import CartContext from "../../contexts/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import './Cart.css';
import { Link } from "react-router-dom";
import { createOrder } from "../../utils/orders";
import OrderModal from "../OrderModal/OrderModal";

const buyerMock = {
  name: 'leomessi',
  phone: '123456789',
  email: 'leomessi@mail.com'
}

const Cart = () => {
  const { cart, total, removeItem, clear } = useContext(CartContext);
  const [user, setUser] = useState(buyerMock);
  const [showModal, setShowModal] = useState(false);
  const [orderId, setOrderId] = useState();

  const handleRemove = (itemId) => {
    removeItem(itemId);
  }

  const handleOpen = () => setShowModal(true);

  const handleClose = () => setShowModal(false);

  const handleBuy = async () => {
    const newOrder = {
      buyer: buyerMock,
      items: cart,
      total
    };
    const newOrderId = await createOrder(newOrder);
    setOrderId(newOrderId);
    clear();
  }

  const showTable = cart.length > 0

  return (
    <Container className='cartContainer'>
      <h1>Carrito de Compras</h1>
      {showTable && (
        <>
          <Table className='table' striped bordered hover>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Quitar</th>
              </tr>
            </thead>
            <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td><FaTrashAlt onClick={() => handleRemove(item.id)}/></td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <h3 className='total'>Total: $ {total}</h3>
          <Button className='btnProducts' variant="outline-success" onClick={handleOpen}>Finalizar compra</Button>
        </>
      )}
      {!showTable && (
        <>
          <h5 className='infoCart'>No hay productos seleccionados</h5>
          <Link to='/'>
            <Button className='btnProducts' variant="outline-success">Ver productos</Button>
          </Link>
        </>
      )}
      <OrderModal
        showModal={showModal}
        onClose={handleClose}
        onBuy={handleBuy}
        orderId={orderId}
      />
    </Container>
  );
}
 
export default Cart;