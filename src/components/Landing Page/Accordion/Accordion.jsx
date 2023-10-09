import React from "react";
import { Accordion, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Accordion.css";

const Question = () => {
  return (
    <div id="faq">
      <Container>
        <Row className="row-accordion">
          <Col className="faq">
            <h1>Frequently Asked Questions</h1>
            <p>FAQ tentang Keehatan Mental</p>
          </Col>
          <Col>
            <Accordion className="accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Apa itu kesehatan mental?</Accordion.Header>
                <Accordion.Body>
                  Kesehatan mental mengacu pada kondisi kesejahteraan emosional,
                  psikologis, dan sosial seseorang.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Apa yang mempengaruhi kesehatan mental?
                </Accordion.Header>
                <Accordion.Body>
                  Kesehatan mental dipengaruhi oleh faktor-faktor seperti
                  genetika, lingkungan, pengalaman masa kecil, stres, dukungan
                  sosial, dan faktor biologis.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Apa perbedaan antara kesehatan mental dan gangguan mental?
                </Accordion.Header>
                <Accordion.Body>
                  Kesehatan mental adalah kondisi umum kesejahteraan emosional,
                  sementara gangguan mental adalah kondisi yang mengganggu
                  kesehatan mental dan memengaruhi kemampuan seseorang untuk
                  berfungsi dengan baik dalam kehidupan sehari-hari.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Bagaimana cara menjaga kesehatan mental saya?
                </Accordion.Header>
                <Accordion.Body>
                  Ada beberapa langkah yang dapat Anda lakukan untuk menjaga
                  kesehatan mental, termasuk merawat diri, mengelola stres,
                  menjalani gaya hidup sehat, menjalin hubungan yang positif,
                  dan mencari dukungan saat diperlukan.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Apa gejala umum dari gangguan mental?
                </Accordion.Header>
                <Accordion.Body>
                  Gejala gangguan mental dapat bervariasi tergantung pada jenis
                  gangguannya. Namun, gejala umum meliputi perubahan mood,
                  kecemasan yang berlebihan, perubahan pola tidur atau makan,
                  isolasi sosial, dan pikiran yang tidak sehat.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Question;
