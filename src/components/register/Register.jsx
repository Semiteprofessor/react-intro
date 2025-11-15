import { useState } from "react";
import "./register.css";
import { useAuth } from "../../context/AuthContext";
// import { registerUser } from "../../utils";

const Register = () => {
  const { registerUser } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    role: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(formData);
  };
  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={formData.name}
            name="name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Name"
          />
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
          <input
            type="password"
            value={formData.confirm_password}
            name="confirm_password"
            onChange={(e) =>
              setFormData({ ...formData, confirm_password: e.target.value })
            }
            placeholder="Confirm Password"
          />
          <input
            type="text"
            value={formData.role}
            name="role"
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            placeholder="Role"
          />
          <button>Register</button>
          <p className="message">
            Not registered? <a href="#">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
