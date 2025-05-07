import React from 'react';
import Navbar from "./NavbarComponent"




function Contact() {
  return (
    <><><Navbar></Navbar></><div>

      <h2>Contacto</h2>
      <Contacto/>
    
    </div></>
  );
}
const Contacto = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexFlow: "column nowrap", 
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
        }}
      >
        <form
          id="loanForm"
          className="needs-validation mt-4"
          style={{ width: "60%" }}
        >
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre y Apellido
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="form-control"
              placeholder="Ingrese su nombre y apellido"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Ingrese su correo electrónico"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="monto" className="form-label">
              Contactanos
            </label>
            <input
              type="text"
              id="monto"
              name="monto"
              className="form-control"
              placeholder="Escribe aquí..."
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};


export default Contact;