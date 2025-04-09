// import { useState } from "react";
// import { Link } from "react-router-dom";

// const RegisterPage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleRegister = (e) => {
//     e.preventDefault();
//     // TODO: Call register API or auth logic here
//     console.log("Registering with:", name, email, password);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <form onSubmit={handleRegister} className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
//         <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
//         <input
//           type="text"
//           placeholder="Full Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full mb-6 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         />
//         <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
//           Register
//         </button>
//         <p className="mt-4 text-sm text-center">
//           Already have an account?{" "}
//           <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default RegisterPage;
import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registering with:", name, email, password);
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=2070&q=80')",
      }}
    >
      <form
        onSubmit={handleRegister}
        className="bg-white bg-opacity-90 p-8 rounded-lg shadow-md w-full max-w-sm backdrop-blur"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Register
        </button>
        <p className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
