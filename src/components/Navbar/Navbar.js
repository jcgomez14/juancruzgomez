import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';



const Navegador = () => {
    return(
      <nav>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="">HOME</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="">CATEGORIA 1</Nav.Link>
                <Nav.Link href="">CATEGORIA 2</Nav.Link>
                <Nav.Link href="">CATEGORIA 3</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
      </nav>
    )
}
export default Navegador 