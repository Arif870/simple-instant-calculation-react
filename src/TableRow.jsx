import React from "react";

const TableRow = ({
  id,
  name,
  stock,
  price,
  quantity,
  total,
  addToCartHandler,
  decrementHandler,
}) => {
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{stock}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>{total}</td>
        <td>
          <button disabled={stock <= 0} onClick={() => addToCartHandler(id)}>
            +
          </button>
          <button disabled={quantity <= 0} onClick={() => decrementHandler(id)}>
            -
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
