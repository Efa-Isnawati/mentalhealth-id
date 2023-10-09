import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Footer = () => {
  return (
    <div id="footer">
      <footer className="bg-secondary-subtle text-black p-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>Mental Health Indonesia</h5>
              <p>
                Berbagai Informasi mengenai kesehatan mental di indonesia dan
                global
              </p>
            </div>
            <div className="col-md-6">
              <h5>Contact Us</h5>
              <address>
                <strong>Alamat:</strong>
                <br />
                JL. Kawasan Industri Modern, Cikande, Banten
                <br />
                Kab Serang, 42186
                <br />
                Indonesia
              </address>
              <p>
                <strong>Email:</strong> efaisnawati1911@gmail.com
                <br />
                <strong>Telepon:</strong> (123) 456-7890
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
