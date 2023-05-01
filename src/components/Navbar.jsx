import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSquareCheck } from "@fortawesome/free-solid-svg-icons";

function TopNavbar() {
  return (
    <Navbar variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <h1>Omega</h1>
          <p>
            Powered by{" "}
            <FontAwesomeIcon
              icon={faSquareCheck}
              style={{ color: "#ff6600" }}
            />{" "}
            <span style={{ color: "#1e3799" }}>cleartrip</span>
          </p>
        </Navbar.Brand>
        <div style={{ display: "flex" }}>
          <FontAwesomeIcon
            icon={faBell}
            size="2xl"
            style={{ color: "#fff700", marginRight: "15px"}}
          />
          <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
