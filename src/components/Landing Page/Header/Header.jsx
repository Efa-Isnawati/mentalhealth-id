import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Navbar, Nav, Button, Offcanvas } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Menggunakan URL gambar publik dari direktori 'public'
  const logoUrl = process.env.PUBLIC_URL + "/images/logo-mental.png";

  return (
    <>
      <Navbar
        expand="md"
        className={`ms-auto ${scrolled ? "navbar-scrolled" : ""}`}
        style={{
          position: "fixed",
          top: "0", // Add this style
          zIndex: 1000,
        }}
      >
        <Container fluid>
          {/* Mengganti Navbar.Brand dengan gambar */}
          <img
            src={logoUrl}
            alt="Logo"
            className="logo"
            onClick={() => navigate("/")}
          />
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas id={`offcanvasNavbar-expand-md`} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Mental Health ID</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-5 menu">
                <Nav.Link href="/">Beranda</Nav.Link>
                <Nav.Link href="#community">Community</Nav.Link>
                <Nav.Link href="#info">Mental Heath Info</Nav.Link>
                <Nav.Link href="#testimonial">Testimonial</Nav.Link>
                <Nav.Link href="#faq">FAQ</Nav.Link>
                <Button
                  variant="success"
                  className="header-button"
                  href="#footer"
                >
                  Get Started
                </Button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
