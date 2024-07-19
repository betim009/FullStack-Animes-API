import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { allGenres } from "../../dataMock/allGenres";

function NavBar() {
  return (
    <Navbar expand="lg" className="border-nav">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/" className="text-white">
          Dev-AL
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="text-white"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link className="text-white">Link</Nav.Link>
            <NavDropdown className="dropDown" title="Genres" id="navbarScrollingDropdown">
              {allGenres.map((item) => (
                <NavDropdown.Item as={NavLink} to={`/genre/${item._id}`} key={item._id}>{item._id}</NavDropdown.Item>
              ))}
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/#">
              Alguma coisa
            </Nav.Link>
          </Nav>

          <Nav className="nav-sing">
            <Nav.Link className="btn-signIn" as={NavLink} to="/signin">
              SignIn
            </Nav.Link>
            <Nav.Link className="btn-signIn" as={NavLink} to="/signup">
              SignUp
            </Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
