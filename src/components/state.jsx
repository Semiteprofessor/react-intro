import React, { useState } from "react";

// export default function Counter() {
//   // const [count, setCount] = React.useState(0);

//   function handleClick() {
//     alert("What ais my name!");
//   }

//   const isLoggedIn = false;

//   if (isLoggedIn) {
//     <p>Welcome back!</p>;
//   } else {
//     <p>Please log in.</p>;
//   }

//   const items = ["Apple", "Banana", "Orange", "Grape", "Pawpaw"];

//   return (
//     <>
//       <div>
//         {items.map((item) => (
//           <div key={item}>{item === "Pawpaw" && <h1>{item}</h1>}</div>
//         ))}
//       </div>
//     </>
//   );
// }



export default function Form() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}