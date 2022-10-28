import React, {useEffect, useState, } from 'react'
import { Button } from 'react-bootstrap';
import './ItemCount.css';

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));

  const handleSubtract = () => {
    setCount(count - 1)
  }

  const handleAdd = () => {
    setCount(count + 1)
  }

  const handleClick = () => onAdd(count);

  useEffect(() => {
      setCount(parseInt(initial));
  },[initial])

  return (
    <div className='itemCountContainer'>
        <h5>Seleccione la cantidad de productos:</h5>
        <div>
          <Button variant="outline-danger" size="lg" disabled={count <= 1} onClick={handleSubtract}>
            -
          </Button>
          <h5 className='itemCount'>{count}</h5>
          <Button variant="outline-success" size="lg" disabled={count >= stock} onClick={handleAdd}>
            +
          </Button>
        </div>
      <div>
      <Button variant="outline-primary" disabled={stock <= 0} onClick={handleClick}>
        Agregar al Carrito
      </Button>
      </div>
    </div>
  )
}

export default ItemCount