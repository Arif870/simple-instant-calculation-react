import React, { useState } from "react";
import allProducts from "../public/allProducts.json";
import TableRow from "./TableRow";

function App() {
  const [productsdetails, setProductsDetails] = useState(
    allProducts.map(item => ({
      ...item,
      quantity: 0,
      total: 0,
    }))
  );

  const addToCartHandler = id => {
    const newProducts = productsdetails.map(products => {
      if (id === products.id) {
        products.quantity++;
        products.stock--;
        products.total = products.quantity * products.price;
      }
      return products;
    });
    setProductsDetails(newProducts);
  };

  const decrementHandler = id => {
    const newProducts = productsdetails.map(products => {
      if (id === products.id) {
        products.quantity--;
        products.stock++;
        products.total = products.quantity * products.price;
      }
      return products;
    });
    setProductsDetails(newProducts);
  };

  const total = productsdetails.reduce((acc, curr) => acc + curr.total, 0);

  return (
    <div>
      <h1>Product List</h1>
      <table border={1} style={{ padding: "5px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {productsdetails.map(products => (
            <TableRow
              id={products.id}
              {...products}
              addToCartHandler={addToCartHandler}
              decrementHandler={decrementHandler}
            />
          ))}
        </tbody>
      </table>
      <h1>Total amount = {total} Taka</h1>
    </div>
  );
}

export default App;
