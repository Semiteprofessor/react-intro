import { useTheme } from "../../context/ThemeContext";
import "./navbar.css";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav>
      <span>Jumia</span>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>

      <div className="right">
        <div>
          {theme === "light" ? (
            <i className="fa fa-moon" onClick={toggleTheme}></i>
          ) : (
            <i className="fa fa-sun" onClick={toggleTheme}></i>
          )}
        </div>
        <ul>
          <li>Register</li>
          <li>Login</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
