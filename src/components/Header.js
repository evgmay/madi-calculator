import React from "react";
import { Fade } from "react-awesome-reveal";
import { Container } from "react-bootstrap";

function Header({ children }) {
  return (
    <header className="bg-header">
      <Container className="py-5 text-light">
        <Fade direction="up" delay={500}>
          {children}
        </Fade>
      </Container>
    </header>
  );
}

export default Header;
