import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <ul>
        <li>
          <Link to="/" className="active">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/promotions">Promotions</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
