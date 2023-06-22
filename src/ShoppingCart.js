import React, { useReducer, useState } from "react";
// Advance Use Reducer Example
const selectableProducts = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 15 },
  { id: 3, name: "Product 3", price: 20 },
  { id: 4, name: "Product 4", price: 25 },
  { id: 5, name: "Product 5", price: 30 },
];

const initialState = {
  items: [],
  total: 0,
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + action.payload.price,
      };
    case "REMOVE_ITEM":
      const updatedItems = state.items.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        items: updatedItems,
        total: state.total - action.payload.price,
      };
    case "CLEAR_CART":
      return initialState;
    default:
      return state;
  }
}

function ShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  const [selectedProducts, setSelectedProducts] = useState(selectableProducts);

  const addItemToCart = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
    setSelectedProducts(selectedProducts.filter((item) => item.id !== product.id));
  };

  const removeItemFromCart = (item) => {
    dispatch({ type: "REMOVE_ITEM", payload: item });
    setSelectedProducts([...selectedProducts, item]);
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    setSelectedProducts(selectableProducts);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        <h2>Selectable Products</h2>
        <ul>
          {selectedProducts.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => addItemToCart(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Cart Items</h2>
        <ul>
          {cart.items.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => removeItemFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total: ${cart.total}</p>
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  );
}

export default ShoppingCart;
