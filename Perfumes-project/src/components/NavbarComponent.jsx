import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './Cartwidget'; 

function NavbarComponent() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark"style={{width:"100vw", position:"absolute" , top:"0" , zIndex:"999"}}  >
     <nav className="bg-white shadow-md h-20 px-6 flex items-center">
</nav>

      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Perfume Shop</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/perfumes">Perfumes</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/category/ofertas">Ofertas</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contacto</Link>
            </li>
          </ul> <CartWidget />
        </div>
        
      </div>
    </nav>
  );
}

export default NavbarComponent;