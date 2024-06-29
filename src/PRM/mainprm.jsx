import React from "react";
import SideMenu from "./Components/SideMenu";
import PageContentprm from "./Components/PageContent";
import {Container,Row,Col,} from "react-bootstrap";



function mainprm() {
  return (
    <Container  className="App">
    <Row className="SideMenuAndPageContent">
        <Col md={2}>
        <SideMenu/>

        </Col>
        <Col md={10}>
        <PageContentprm/>

        </Col>
    </Row>
</Container>
  );
}

export default mainprm;
