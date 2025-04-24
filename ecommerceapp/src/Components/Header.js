import styles from "../styles/Header.module.css";
import {Link} from "react-router-dom";

function Header() {
  return (
    <div>
      <div className={styles.header}>
       <div className={styles.title}>
          <h1>ProMart</h1>

          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              {/* <a className="navbar-brand" href="#">
                Navbar
              <a/>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button> */}
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <div>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                    
                  </li>
                  </div>
                  <li className="nav-item">
                  <Link to="/ProductList" className="nav-link">Products</Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/Contact" className="nav-link">ContactUs</Link>

                 </li>
                  <li className="nav-item">
                  <Link to="/About" className="nav-link">AboutUs</Link>

                  </li>
                  <li className="nav-item">
                  <Link to="/Cart" className="nav-link"><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" height={"22vh"}/></Link>
                  </li>

                  {/* <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
                </ul>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>





        </div>
      </div>
    </div>
  );
}

export default Header;
