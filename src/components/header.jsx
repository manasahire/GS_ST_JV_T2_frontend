import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Header() {
  return (
    <header>
      <Container fluid>
        <Row>
          <Col md={2} style={{ backgroundColor: "#FFB534", padding: "20px" }}>
            <img className="d-block w-100" src="ZPlogo.png" alt="ZP-LOGO" height={"150px"} width={"150px"} />
          </Col>
          <Col md={8} style={{ backgroundColor: "#FFB534 ", padding: "20px" }}>
            <h1> Rural Development & Panchayat Raj Department</h1>
            <h2>Government Of Maharashtra </h2>
          </Col>
          <Col md={2} style={{ backgroundColor: "#FFB534 ", padding: "20px" }}>
            <img
              className="d-block w-100"
              src="EmbluLogo.png"
              alt="Indian Emblum "
              height={"150px"} width={"70px"}
            />
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
