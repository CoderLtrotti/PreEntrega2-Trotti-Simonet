import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CartWidget from "../CartWidget";
import "./style.css";
import logo from "../assests/img/juguetes.png";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar">
      <Row>
        <Col>
          <img src={logo} className= "logo" alt="Logo de la empresa" />
        </Col>
      </Row>
      <Row>
        <Col>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/category/productos">Productos</Link>
            </li>
            <li>
              <Link to="/category/peluches">Peluches</Link>
            </li>
            <li>
              <Link to="">Contacto</Link>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <CartWidget />
        </Col>
      </Row>
    </nav>
  );

  /*
    <nav className="navbar">
      <></>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
       
      </ul>
    </nav>
    */
}

export default Navbar;
