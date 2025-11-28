import {ProductItem} from "./ProductItem.tsx";
import type {Products} from "./App1.tsx";

export const ProductList = (props: {items: Products[]}) => {
  console.log('📋 ProductList')
  return (
    <>
      {props.items.map((item) => (
        <ProductItem
          product={item}
          key={item.id}
        />
      ))}
    </>
  )
}