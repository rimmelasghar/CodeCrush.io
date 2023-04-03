import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import sh1 from "../assets/love.png";
import sh2 from "../assets/html.png";
import sh3 from "../assets/css-3.png";
import sh6 from "../assets/js.png";
import homeImg from "../assets/coding.png";
import { Link } from "react-router-dom";
import "../App.css";
import Shape from "./Shape";


export default function Home() {
  const wrapper = {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    overflow: "hidden",
    position: "relative",
  };

  const btnStyle = {
    backgroundColor: "#5c4389",
    border: 0,
  };

  return (
    <div
      style={{ backgroundColor: "black", minHeight: "100vh", height: "auto" }}
    >
      <Container style={wrapper}>
        <Shape source={sh3} left={0} right={0} top= {"90px"} height={"50px"} />
        <Shape source={sh2} left={480} right={0} top= {"120px"} height={"50px"} />
        <Shape source={sh1} left={300} right={0} top= {"220px"} height={"50px"} />
        <Shape source={sh6} left={100} right={0} top= {"420px"} height={"50px"} />

        <Row
          className="text-center"
          style={{
            alignItems: "center",
            paddingTop: "100px",
            paddingBottom: "50px",
          }}
        >
          <Col md={6}>
            <img
              src={homeImg}
              className="img-fluid"
              alt="main img"
              style={{ justifyContent: "center", padding: "30px" }}
            />
          </Col>
          <Col md={6}>
            <h2 style={{ color: "#99ff99" }}>CodeCrush.io</h2>
            <h5
              style={{
                textAlign: "justify",
                color: "#ffffff",
                paddingTop: "10px",
              }}
            >
              Create your Website using HTML, CSS & JS 
              Using this Powerful Code Editor ~ CodeCrush.io
            </h5>
            <br></br>
            <Button variant="primary" style={btnStyle} as={Link} to="/editor">
              Try CodeCrush.io
            </Button>

          </Col>
        </Row>
      </Container>
    </div>
  );
}
