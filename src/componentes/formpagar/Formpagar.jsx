import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import Buttonvolver from "./Buttonvolver";
import Textopagar from "./Texto";
import master from "./img/mastercard.png"

export default function App() {
  return (
    <>
    <Textopagar/>
    <MDBContainer fluid className="py-5 gradient-custom form">
      <MDBRow className="d-flex justify-content-center py-5">
        <MDBCol md="7" lg="6" xl="6">
          <MDBCard style={{ borderRadius: "15px" }}>
            <MDBCardBody className="p-4">
              <MDBRow className="d-flex align-items-center">
                <MDBCol size="10">
                  <MDBInput
                    label="Número De Tarjeta"
                    id="form1"
                    type="text"
                    placeholder="1234 5678 9012 3457"
                  />
                </MDBCol>
                <MDBCol size="2">
                  <img
                    src="https://img.icons8.com/color/48/000000/visa.png"
                    alt="visa"
                    width="30px"
                  />
                  <img
                    src={master}
                    alt="master"
                    width="30px"
                  />
                </MDBCol>

                <MDBCol size="10">
                  <MDBInput
                    label="Nombre Del Titular"
                    id="form2"
                    type="text"
                    placeholder="Nombre Del Titular"
                  />
                </MDBCol>

                <MDBCol size="4">
                  <MDBInput
                    label="Vencimiento"
                    id="form2"
                    type="date"
                  />
                </MDBCol>
                <MDBCol size="4">
                  <MDBInput
                    label="CVV"
                    id="form2"
                    type="number"
                    placeholder="&#9679;&#9679;&#9679;"
                  />
                </MDBCol>
                <MDBCol>
                  <MDBBtn className="btn-form" color="info">
                  <p className="pagar">Pagar</p>
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <Buttonvolver/>
    </>
  );
}