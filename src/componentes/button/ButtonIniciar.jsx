import React from "react";
import "./button.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import {Button, Modal, Form} from "react-bootstrap";
import { NavLink } from "react-router-dom";
function ModalIniciar() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <Button className="customButton" variant="secondary" onClick={handleShow}>
        Iniciar Sesión
      </Button>
  
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Iniciar Sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Tu Email</Form.Label>
        <Form.Control type="email" placeholder="Escribí tu email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Mantenerme Registrado" />
      </Form.Group>
<NavLink to="./productos"> <Button variant="primary" type="submit">Entrar</Button></NavLink>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
        Volver Atrás
          </Button>
            
        </Modal.Footer>
      </Modal>
    </>
  );
}
  
export default ModalIniciar;