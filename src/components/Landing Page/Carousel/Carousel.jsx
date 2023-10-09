import React from "react";
import { Row, Col, Carousel, Card } from "react-bootstrap";
import "./Carousel.css";

function Testimonial() {
  return (
    <div id="testimonial">
      <div>
        <h1>Testimonial</h1>
        <p>Berbagai review positif dari pelanggan kami</p>
      </div>
      <Carousel
        interval={null} // Set to null to prevent automatic sliding
        nextIcon={<span>&rarr;</span>} // Customize the next arrow icon
        prevIcon={<span>&larr;</span>} // Customize the previous arrow icon
      >
        {/* Testimonial Item 1 */}
        <Carousel.Item>
          <Row>
            <Card className="card-testi">
              <Card.Body>
                <Row>
                  <Col className="testi-photo">
                    <img
                      src={process.env.PUBLIC_URL + "/images/selena.jpg"}
                      alt=""
                    />
                  </Col>
                  <Col className="testi" sm={8}>
                    <img
                      src={process.env.PUBLIC_URL + "/images/rate.png"}
                      className="rate"
                      alt=""
                    />
                    <p>
                      Saya ingin berbicara terbuka tentang perjuangan saya
                      dengan mental health. Awalnya, saya merasa malu dan
                      terisolasi, tetapi ketika saya berbagi pengalaman saya
                      dengan orang lain, saya menemukan banyak dukungan.
                    </p>
                    <p className="username">Selena Gomez, 32 Tahun</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Row>
        </Carousel.Item>

        {/* Testimonial Item 2 */}
        <Carousel.Item>
          <Row>
            <Card className="card-testi">
              <Card.Body>
                <Row>
                  <Col className="testi-photo">
                    <img
                      src={process.env.PUBLIC_URL + "/images/efa.jpg"}
                      alt=""
                    />
                  </Col>
                  <Col className="testi" sm={8}>
                    <img
                      src={process.env.PUBLIC_URL + "/images/rate.png"}
                      className="rate"
                      alt=""
                    />
                    <p>
                      Penting untuk diingat bahwa tidak ada yang salah dengan
                      merasa lelah, cemas, atau sedih kadang-kadang. Saya telah
                      mempelajari bahwa merawat mental health adalah seperti
                      merawat tubuh kita. Sama pentingnya. Terima kasih kepada
                      terapis saya yang membantu saya memahami diri sendiri dan
                      memberikan alat-alat untuk mengelola emosi dan perasaan
                      saya.
                    </p>
                    <p className="username">Efa, 21 Tahun</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Row>
        </Carousel.Item>

        {/* Add more Testimonial Items as needed */}
      </Carousel>
    </div>
  );
}

export default Testimonial;
