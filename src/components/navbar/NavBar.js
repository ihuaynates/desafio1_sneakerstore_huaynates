import "./NavBar.css";
import logo from "../images/sneakerlogo_short.svg";
import cartWidget from "../images/cartwidget.png";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <Link to="/">
            <img src={logo} alt="" className="header_logo" />
          </Link>
          <div className="menuOptions">
            <div className="menu">
              <ul>
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <NavLink
                    to="/category/men"
                    className={({ isActive }) =>
                      isActive ? "activeLink" : "link"
                    }
                  >
                    Hombres
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/category/women"
                    className={({ isActive }) =>
                      isActive ? "activeLink" : "link"
                    }
                  >
                    Mujeres
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/category/child"
                    className={({ isActive }) =>
                      isActive ? "activeLink" : "link"
                    }
                  >
                    Niños
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="cartWidgetContainer">
              <img className="cartWidget" src={cartWidget} alt="cart-widget" />{" "}
              <p className="cartNumber">0</p>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
