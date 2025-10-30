// USE STATE (HOOKS)

// 1. Basic State with useState
// import React, { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={increment}>Click me</button>
//     </div>
//   );
// }

// 2. State with Objects
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

// 3. State with Arrays
// function TodoList() {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState("");

//   const addTodo = () => {
//     setTodos([...todos, input]);
//     setInput("");
//   };

//   return (
//     <div>
//       <input value={input} onChange={(e) => setInput(e.target.value)} />
//       <button onClick={addTodo}>Add</button>
//       <ul>
//         {todos.map((todo, i) => (
//           <li key={i}>{todo}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// 4. Updating State Based on Previous State
// const [count, setCount] = useState(0);

// const increment = () => {
//   setCount((prev) => prev + 1);
// };

//  5. Derived State vs State Variables
// const [items, setItems] = useState([1, 2, 3]);
// const itemCount = items.length; // derived, not stored

// 6. Lifting State Up
// function Parent() {
//   const [value, setValue] = useState("");

//   return (
//     <>
//       <Input value={value} setValue={setValue} />
//       <Display value={value} />
//     </>
//   );
// }

// function Input({ value, setValue }) {
//   return <input value={value} onChange={(e) => setValue(e.target.value)} />;
// }

// function Display({ value }) {
//   return <p>{value}</p>;
// }
