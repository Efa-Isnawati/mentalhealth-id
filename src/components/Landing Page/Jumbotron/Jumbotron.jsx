import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Jumbotron.css";

const Jumbotron = (props) => {
  const navigate = useNavigate();
  return (
    <Container className="jumbotron-body">
      <Row>
        <Col className="jumbotron-desc">
          <h1>Program Awarenes Mental Health Indonesia</h1>
          <p>
            Kesehatan mental adalah bagian tak terpisahkan dari kesehatan kita
            secara keseluruhan, dan seringkali, kita tidak memberikannya
            perhatian yang seimbang dibandingkan dengan kesehatan fisik kita.
            Saat kita berbicara tentang hidup sehat, kita cenderung memikirkan
            olahraga, makanan sehat, dan perawatan fisik lainnya. Namun, penting
            untuk diingat bahwa kesehatan mental memiliki dampak yang sama
            besarnya terhadap kualitas hidup kita
          </p>
          <Button
            variant="success"
            className="nav-button"
            onClick={() => navigate("/")}
          >
            Get Started
          </Button>
        </Col>
        <Col>
          <img src={process.env.PUBLIC_URL + "/images/mental.png"} alt="" />{" "}
        </Col>
      </Row>
    </Container>
  );
};
export default Jumbotron;
