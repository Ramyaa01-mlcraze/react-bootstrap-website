import React from "react";
import PosterCarousel from "./PosterCarousel";
import DestinationLayout from "./DestinationLayout";
import { Container, Row, Col } from "react-bootstrap";

export default function Page(props) {
  const containerStyle = {
    marginTop: "70px"
  };

  return (
    <Container style={containerStyle} fluid>
      <Row>
        <Col xl={2} lg={4} md={4} sm={4} xs={12}>
          <PosterCarousel {...props} />
        </Col>
        <Col xl={10} lg={8} md={8} sm={8} xs={12}>
          <DestinationLayout {...props} />
        </Col>
      </Row>
    </Container>
  );
}
