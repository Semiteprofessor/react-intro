import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Login() {
  const userInfo = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`${firstName} ${lastName} ${email} ${password}`);
  };
  useEffect(() => {
    fetch("https://dummyjson.com/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "emilys",
        password: "emilyspass",
        expiresInMins: 30,
      }),
    })
      .then((res) => res.json())
      .then((data) => setUser(data));

    // console.log(user);
  }, [user]);

  return (
    <>
      <h1>Login Page</h1>
      <div>
        <form action="" className="form" onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="">Email</label>
            <input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="">Password</label>
            <input
              type="text"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div></div>
          <Link to="/">
            <button>Go to Home Page</button>
          </Link>
        </form>
      </div>
    </>
  );
}
