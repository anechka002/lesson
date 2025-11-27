import {ProductItem} from "./ProductItem.tsx";

export const ProductList = (props) => {
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