import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Cards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiKey = "57b0b16ea24f46d2ad97237e4685b0a2"; // Replace with your actual API key
    const apiUrl = "https://api.nhs.uk/mental-health/";
    const apiVersion = "1.0";

    axios
      .get(`${apiUrl}?api-version=${apiVersion}`, {
        headers: {
          "subscription-key": apiKey,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          const responseData = response.data;

          // Determine the structure of the API response and extract data accordingly
          const extractedData = extractData(responseData);

          setData(extractedData);
        } else {
          console.error("Received a non-successful response:", response);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Function to extract data based on the actual API response structure
  const extractData = (responseData) => {
    // Implement logic to extract data based on the response structure
    // Example: If the API response is an array, return the array. Otherwise, return an empty array.
    if (Array.isArray(responseData)) {
      return responseData;
    } else {
      return [];
    }
  };

  return (
    <div id="info">
      <Container>
        <div className="title-card">
          <h1>Informasi Mental Health</h1>
          <p>Berabagi macam - macam penyakit mental health</p>
        </div>
        <Row sm={4} className="g-4">
          {data.map((item, index) => (
            <Col key={index}>
              <Card>
                {/* Display the retrieved data here */}
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <img src={`/images/${item.icon}`} className="image" alt="" />
                  <Card.Title className="card-title">{item.title}</Card.Title>
                  <Card.Text className="card-text">
                    {item.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Cards;
