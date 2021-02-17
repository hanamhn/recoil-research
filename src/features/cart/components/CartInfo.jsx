import React from "react";
import { useRecoilValue } from "recoil";
import { cartState, cartTotal } from "../cartState";

const CartInfo = () => {
  const cart = useRecoilValue(cartState);
  const total = useRecoilValue(cartTotal);
  return (
    <div>
      <h2>Cart Info: </h2>
      <ul className="cart-items">
        {cart.map((item) => (
          <li key={item.id}>
            {item.product.title}: {item.quantity}
          </li>
        ))}
      </ul>
      {/*Render*/}
      <h4>Total: {total} VND</h4>
    </div>
  );
};

export default CartInfo;
