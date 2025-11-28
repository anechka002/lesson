import {useState} from "react";
import type {Products} from "./App1.tsx";

export const ProductItem = (props: {product: Products}) => {
  console.log('🧺 ProductItem')

  const [inCart, setInCart] = useState(false);

  const handleAddInCart = () => {
    const message = inCart ? "Товар удален из корзины" : "Товар добавлен в корзину"
    alert(message)
    setInCart(!inCart);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #fff",
        padding: "20px",
        margin: '10px',
        gap: '10px'
      }}
    >
      <span>id: {props.product.id}</span>
      <span>name: {props.product.name}</span>
      <span>price: {props.product.price}</span>
      <span>category: {props.product.category}</span>
      <button
        style={!inCart ? {backgroundColor: 'black'} : {backgroundColor: 'blue'}}
        onClick={handleAddInCart}
      >{!inCart ? 'добавить в корзину' : 'товар в корзине'}</button>
    </div>
  )
}