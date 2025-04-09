// import React, { useEffect, useState } from "react";
// import { useCart } from "../context/CartContext";

// const MensFashionPage = () => {
//   const [products, setProducts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [loading, setLoading] = useState(true);

//   const { addToCart } = useCart();
//   const [quantities, setQuantities] = useState({});

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch("https://fakestoreapi.com/products/category/electronics");
//         const data = await res.json();
//         setProducts(data);

//         const initialQuantities = {};
//         data.forEach((product) => {
//           initialQuantities[product.id] = 0;
//         });
//         setQuantities(initialQuantities);
//       } catch (err) {
//         console.error("Error fetching men's products:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleIncrease = (productId) => {
//     setQuantities((prev) => ({
//       ...prev,
//       [productId]: prev[productId] + 1,
//     }));
//   };

//   const handleDecrease = (productId) => {
//     setQuantities((prev) => ({
//       ...prev,
//       [productId]: Math.max(0, prev[productId] - 1),
//     }));
//   };

//   const handleAddToCart = (product) => {
//     const quantity = quantities[product.id];
//     if (quantity > 0) {
//       for (let i = 0; i < quantity; i++) {
//         addToCart(product);
//       }
//       setQuantities((prev) => ({
//         ...prev,
//         [product.id]: 0,
//       }));
//     }
//   };

//   const filteredProducts = products.filter((product) =>
//     product.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   if (loading) return <p className="text-center mt-8">Loading Electronic products ...</p>;

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6 text-center">Electronic products </h1>

//       <div className="flex justify-center mb-8">
//         <input
//           type="text"
//           placeholder="Search for products..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {filteredProducts.length === 0 ? (
//           <p className="text-center col-span-full text-gray-500">No products found.</p>
//         ) : (
//           filteredProducts.map((product) => {
//             const quantity = quantities[product.id] || 0;

//             return (
//               <div
//                 key={product.id}
//                 className="bg-white rounded shadow p-4 flex flex-col justify-between"
//               >
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className="h-48 object-contain mb-4"
//                 />
//                 <h2 className="font-semibold text-lg">{product.title}</h2>
//                 <p className="text-gray-600">${product.price.toFixed(2)}</p>

//                 <div className="mt-4 flex items-center justify-between flex-wrap gap-2">
//                   <button
//                     onClick={() => handleDecrease(product.id)}
//                     className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 disabled:opacity-50"
//                     disabled={quantity === 0}
//                   >
//                     –
//                   </button>
//                   <span className="text-sm font-medium">Qty: {quantity}</span>
//                   <button
//                     onClick={() => handleIncrease(product.id)}
//                     className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
//                   >
//                     +
//                   </button>
//                 </div>

//                 <button
//                   onClick={() => handleAddToCart(product)}
//                   disabled={quantity === 0}
//                   className="mt-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 disabled:opacity-50"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             );
//           })
//         )}
//       </div>
//     </div>
//   );
// };

// export default MensFashionPage;
import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

const MensFashionPage = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products/category/electronics");
        const data = await res.json();
        setProducts(data);

        const initialQuantities = {};
        data.forEach((product) => {
          initialQuantities[product.id] = 0;
        });
        setQuantities(initialQuantities);
      } catch (err) {
        console.error("Error fetching men's products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleIncrease = (productId) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: prev[productId] + 1,
    }));
  };

  const handleDecrease = (productId) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(0, prev[productId] - 1),
    }));
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id];
    if (quantity > 0) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
      setQuantities((prev) => ({
        ...prev,
        [product.id]: 0,
      }));
    }
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <p className="text-center mt-8">Loading electronics's gadgets...</p>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="p-8 bg-gray-100 min-h-screen"
    >
      <h1 className="text-3xl font-bold mb-6 text-center">Electronics Gadgets</h1>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length === 0 ? (
          <p className="text-center col-span-full text-gray-500">No products found.</p>
        ) : (
          filteredProducts.map((product, index) => {
            const quantity = quantities[product.id] || 0;

            return (
              <motion.div
                key={product.id}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <motion.img
                  src={product.image}
                  alt={product.title}
                  className="h-48 object-contain mb-4 mx-auto transition-transform duration-500"
                  whileHover={{ scale: 1.1 }}
                />
                <h2 className="font-semibold text-lg">{product.title}</h2>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>

                <div className="mt-4 flex items-center justify-between flex-wrap gap-2">
                  <button
                    onClick={() => handleDecrease(product.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 disabled:opacity-50"
                    disabled={quantity === 0}
                  >
                    –
                  </button>
                  <span className="text-sm font-medium">Qty: {quantity}</span>
                  <button
                    onClick={() => handleIncrease(product.id)}
                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                  >
                    +
                  </button>
                </div>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAddToCart(product)}
                  disabled={quantity === 0}
                  className="mt-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 disabled:opacity-50 transition-colors"
                >
                  Add to Cart
                </motion.button>
              </motion.div>
            );
          })
        )}
      </div>
    </motion.div>
  );
};

export default MensFashionPage;
