import React from "react";
import ProductCard from "./components/ProductCard";
import products from "./products";

function App() {
  const productCardComponents = products.map(product => {
    return (
      <ProductCard key={product.id} name={product.name} description={product.description} price={product.price}/>
    )
  })
  return (
    <div>
      {productCardComponents}
    </div>
  )
}

export default App;