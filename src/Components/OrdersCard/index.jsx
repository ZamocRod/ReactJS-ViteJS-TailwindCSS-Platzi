import React from "react";

function OrdersCard(props) {

  const { totalPrice, totalProducts } = props;
  return (
    <div className="flex justify-between items-center p-4 border-black border-2 rounded-md">
      <p>
        <span>01-02-2023</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  );
}

export default OrdersCard;
