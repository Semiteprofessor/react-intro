import React from "react";

export default function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}
