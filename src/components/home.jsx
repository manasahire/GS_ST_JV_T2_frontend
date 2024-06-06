import React from "react";
import  CarouselExample  from "./corosalPage";
import { Container, Row, Col } from 'react-bootstrap';
import GrievanceForm from "./GrivenceForm";
import NewsComponent from "./news";


function home() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={4} style={{ backgroundColor: "#C1F2B0", padding: "20px" }}>
            <Row style={{ paddingTop: "20px" }}>
                <CarouselExample/>
            </Row>
            <Row style={{ paddingTop: "30px" }}>
                <NewsComponent/>
            </Row>
          </Col>
          <Col md={8} style={{ backgroundColor: "#C1F2B0 ", padding: "20px" }}>
            <h4 style={{textAlign:"center"}}> Greviance Form </h4>
            <GrievanceForm/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default home;
