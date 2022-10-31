import Container from 'react-bootstrap/Container';
import { Nav, Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/Link';


const Navibar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">IP Mini Project</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link className='' href="/projects">Projects</Nav.Link>
            <Nav.Link href="/projects/x&o">X & O</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navibar;
