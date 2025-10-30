import React from "react";
import { Link } from "react-router-dom";
import Products from "./products";

// function UserForm() {
//   const [user, setUser] = useState({ name: "", age: "" });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser((whatever) => ({
//       ...whatever,
//       [name]: value,
//     }));
//   };

//   return (
//     <div>
//       <input name="name" value={user.name} onChange={handleChange} />
//       <input name="age" value={user.age} onChange={handleChange} />
//       <p>
//         {user.name} is {user.age} years old
//       </p>
//     </div>
//   );
// }

const Home = () => {
  return (
    <div>
      <h1>Welcome to Home page</h1>

      <Products />
    </div>
  );
};

export default Home;