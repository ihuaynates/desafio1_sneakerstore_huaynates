import logo from "../images/sneakerlogo_short.svg";

const NavBar = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <img src={logo} alt="" className="header_logo" />
          <div className="menu">
            <ul className="nav__list">
              <li>
                <a href="index.html">Inicio</a>
              </li>
              <li>
                <a href="index.html">Hombres</a>
              </li>
              <li>
                <a href="index.html">Mujeres</a>
              </li>
              <li>
                <a href="index.html">Niños</a>
              </li>
              <li>
                <a href="index.html">Accesorios</a>
              </li>
              <li>
                <a href="index.html">Outlet</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
