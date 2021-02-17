import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { addToCart, cartState } from "../cartState";
import { productListState } from "../productState";

const ProductList = () => {
  const productList = useRecoilValue(productListState);
  const [cart, setCart] = useRecoilState(cartState);
  // Add this handler
  const handleAddToCart = (product) => {
    const newCart = addToCart(cart, product);
    setCart(newCart);
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul className="product-list">
        {productList.map((product) => (
          <li key={product.id}>
            {product.title}
            {/*Add this button*/}
            <button
              style={{ marginLeft: "1rem" }}
              onClick={() => handleAddToCart(product)}
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
