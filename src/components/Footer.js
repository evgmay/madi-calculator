import React from "react";
import { Container } from "react-bootstrap";
import { FaTelegram, FaVk } from "react-icons/fa";

function Footer() {
  return (
    <footer className="font-small blue pt-4 bg-dark text-light">
      <Container className="text-center">
        <p>Кафедра: АСУ</p>
        <p>3бАСУ2</p>
        <div className="d-flex justify-content-center flex-column flex-sm-row">
          <a
            href="https://en.reactjs.org/"
            className="text-decoration-none m-3 text-info"
            target="_blank"
            rel="noreferrer">
            <FaTelegram size="25" />
          </a>
          <a
            href="https://vk.com/university_madi/"
            className="text-decoration-none m-3 text-info"
            target="_blank"
            rel="noreferrer">
            <FaVk size="25" />
          </a>
        </div>
        <div className="text-center py-3">МАДИ © 2022</div>
      </Container>
    </footer>
  );
}

export default Footer;
