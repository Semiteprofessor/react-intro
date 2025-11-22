import { useState } from "react";
import "./login.css";
import { useAuth } from "../../context/AuthContext";
// import { registerUser } from "../../utils";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(formData);
    const token = localStorage.getItem("token");
    console.log("Token from localStorage:", token);

      if (token) {
        navigate("/");
      }
  };
  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={formData.email}
            name="email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="Email"
          />
          <input
            type="password"
            value={formData.password}
            name="password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            placeholder="Password"
          />
          <button>Login</button>
          <p className="message">
            Not registered? <a href="#">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
