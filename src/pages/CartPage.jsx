// import React from "react";
// import { useCart } from "../context/CartContext";

// const CartPage = () => {
//   const { cartItems, removeItemCompletely } = useCart();

//   const totalPrice = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6 text-center">Your Cart 🛒</h1>

//       {cartItems.length === 0 ? (
//         <p className="text-center text-gray-600">Your cart is empty.</p>
//       ) : (
//         <div className="space-y-4 max-w-3xl mx-auto">
//           {cartItems.map((item) => (
//             <div
//               key={item.id}
//               className="flex items-center bg-white p-4 rounded shadow-md"
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-24 h-24 object-contain"
//               />
//               <div className="ml-4 flex-1">
//                 <h2 className="text-lg font-semibold">{item.title}</h2>
//                 <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
//                 <p className="text-gray-600">Quantity: {item.quantity}</p>
//               </div>
//               <button
//                 onClick={() => removeItemCompletely(item.id)}
//                 className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}

//           <div className="text-right mt-6">
//             <h3 className="text-xl font-bold">
//               Total: ${totalPrice.toFixed(2)}
//             </h3>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;


import React from "react";
import { useCart } from "../context/CartContext";



const CartPage = () => {
  const { cartItems, removeItemCompletely, clearCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("Proceeding to checkout...");
    // You can replace this with navigation or payment logic
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart 🛒</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4 max-w-3xl mx-auto">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-white p-4 rounded shadow-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-contain"
              />
              <div className="ml-4 flex-1">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <button
                onClick={() => removeItemCompletely(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right mt-6 space-y-4">
            <h3 className="text-xl font-bold">
              Total: ${totalPrice.toFixed(2)}
            </h3>

            {/* Clear Cart & Checkout Buttons */}
            <div className="flex justify-end gap-4">
              <button
                onClick={clearCart}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              >
                Clear Cart
              </button>
              <button
                onClick={handleCheckout}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

