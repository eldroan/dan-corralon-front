import React from "react";

/**
 * @param {{description: string, date: Date, orders: any[],state: string}} props
 */
function OrderListElement({ description, date, orders, state }) {
  return (
    <>
      <p>{description}</p>
      <p>{date}</p>
      <p>{state}</p>
      <p>--------------</p>
    </>
  );
}

export default OrderListElement;
