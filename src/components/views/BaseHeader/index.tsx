import React from "react";
import { Navbar, Container } from "react-bootstrap";

const BaseHeader: React.FC = () => (
  <Navbar bg="light" expand="lg" className="shadow p-3 mb-5 bg-white rounded">
    <Container>
      <Navbar.Brand href="#home">
        <div className="d-flex brand">
        <img src="https://picsum.photos/seed/picsum/64/64" alt=""/>
        <div className="ml-2">
          <div className="h4" >LogFresher</div>
          <div className="brand-quotes">
            <span>Stay Hungry Stay Foolist</span>
          </div>
        </div>
        </div>
      </Navbar.Brand>
    </Container>
  </Navbar >
)

export default BaseHeader
