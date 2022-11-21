import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import Buttonvolver from "./Buttonvolver";

export default function App() {
  return (
    <>
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
                    width="64px"
                  />
                </MDBCol>

                <MDBCol size="9">
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
                    label="Código"
                    id="form2"
                    type="number"
                    placeholder="&#9679;&#9679;&#9679;"
                  />
                </MDBCol>
                <MDBCol size="3">
                  <MDBBtn color="info" rounded size="lg">
                    <MDBIcon fas icon="arrow-right" />
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