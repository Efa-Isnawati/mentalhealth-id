import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./Main.css";

const Main = () => {
  return (
    <div id="community">
      <Container className="service">
        <Row>
          <Col xs={6}>
            <img src={process.env.PUBLIC_URL + "/images/mental4.png"} alt="" />
          </Col>
          <Col xs={6}>
            <h1>Mental Health di Indonesia</h1>
            <p>
              Menurut Indonesia-National Adolescent Mental Health Survey 2022,
              15,5 juta (34,9 persen) remaja mengalami masalah mental dan 2,45
              juta (5,5 persen) remaja mengalami gangguan mental. Dari jumlah
              itu, baru 2,6 persen yang mengakses layanan konseling, baik emosi
              maupun perilaku.
            </p>
            <li className="list">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ border: "3px solid #BEADFA", borderRadius: "10px" }}
              />
              Cemas : Khawatir berlebihan, merasa sesuatu buruk akan terjadi
              mudah amarah
            </li>
            <li className="list">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ border: "3px solid #BEADFA", borderRadius: "10px" }}
              />
              Stres di Tempat Kerja: Beban kerja yang berat, tenggat waktu yang
              ketat, atau konflik di lingkungan kerja dapat menyebabkan tingkat
              stres yang tinggi
            </li>
            <li className="list">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ border: "3px solid #BEADFA", borderRadius: "10px" }}
              />
              Depresi: Perasaan sedih, kehilangan minat atau kegembiraan dalam
              aktivitas, serta perasaan putus asa dan kecemasan yang mendalam
              adalah gejala depresi
            </li>
            <li className="list">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ border: "3px solid #BEADFA", borderRadius: "10px" }}
              />
              Gangguan Mood: Termasuk bipolar disorder, yang ditandai oleh
              perubahan suasana hati yang ekstrim, dari mania hingga depresi.
            </li>
            <li className="list">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ border: "3px solid #BEADFA", borderRadius: "10px" }}
              />
              Trauma atau PTSD: Pengalaman traumatis, seperti kecelakaan,
              pelecehan, atau perang, dapat menyebabkan gangguan stres
              pascatrauma (PTSD).
            </li>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
