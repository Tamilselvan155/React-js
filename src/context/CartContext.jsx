// import React, { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems((prev) => {
//       const exists = prev.find((item) => item.id === product.id);
//       if (exists) {
//         return prev.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       } else {
//         return [...prev, { ...product, quantity: 1 }];
//       }
//     });
//   };

//   const removeFromCart = (product) => {
//     setCartItems((prev) => {
//       const exists = prev.find((item) => item.id === product.id);
//       if (!exists) return prev;

//       if (exists.quantity === 1) {
//         return prev.filter((item) => item.id !== product.id);
//       } else {
//         return prev.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         );
//       }
//     });
//   };

//   const removeItemCompletely = (id) => {
//     setCartItems((prev) => prev.filter((item) => item.id !== id));
//   };

//   // ✅ NEW: Clear Cart
//   const clearCart = () => {
//     setCartItems([]); // This will empty the entire cart
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         removeFromCart,
//         removeItemCompletely,
//         clearCart, // ✅ Don't forget to provide it here
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);

import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (!exists) return prev;

      if (exists.quantity === 1) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    });
  };

  const removeItemCompletely = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // ✅ NEW: Increase Quantity
  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // ✅ NEW: Decrease Quantity
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        removeItemCompletely,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

