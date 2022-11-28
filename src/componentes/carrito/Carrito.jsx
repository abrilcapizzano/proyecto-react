import React, { useState } from 'react';
import carritosvg from "./img/cart.svg"
import "./carrito.css"
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';

export default function Carrito() {
  const [topRightModal, setTopRightModal] = useState(false);

  const toggleShow = () => setTopRightModal(!topRightModal);

  return (
    <>
      <MDBBtn onClick={toggleShow}>
        <img src={carritosvg} width="24px" alt="" />
      </MDBBtn>

      <MDBModal
        animationDirection='right'
        show={topRightModal}
        tabIndex='-1'
        setShow={setTopRightModal}
      >
        <MDBModalDialog position='top-right'>
          <MDBModalContent>
            <MDBModalHeader className='bg-info text-white'>
              <MDBModalTitle>Carrito</MDBModalTitle>
              <MDBBtn
                color='none'
                className='btn-close btn-close-white'
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div className='row'>
                <div className='col-3 text-center'>
                  <i className='fas fa-shopping-cart fa-4x text-info'></i>
                </div>
                <img src={carritosvg} className="carritoimg" alt="Imagen Carrito" ></img>
                <div className='col-9'>
                  <p></p>
                  <p>Aceptamos tarjetas de débito y credito</p>
                </div>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='info'> <NavLink to="/pagar">Ir a Pagar</NavLink> </MDBBtn>
              <MDBBtn outline color='info' onClick={toggleShow}>
                Volver atrás
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}