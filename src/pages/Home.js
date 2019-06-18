import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Home() {
  return (
    <div>
      <Hero backgroundImage="../../public/banner.jpg">
        <h1>Building Memory</h1>
        <h2>Featuring famous NYC Buildings</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Click on an image to earn points, but don't click on any more than once! </h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Grid of building images to go here
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
