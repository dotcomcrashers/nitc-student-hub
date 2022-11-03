import {Container, Nav, Navbar} from 'react-bootstrap';

function Navi({isAuth}) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
	<Navbar.Brand href="/home">NITC Students Hub</Navbar.Brand>
        {isAuth
         ? <Nav className="me-auto">
             <Nav.Link href="/home">Home</Nav.Link>
             <Nav.Link href="/personal">Personal</Nav.Link>
             <Nav.Link href="/notifications">Notification</Nav.Link>
           </Nav>
         : <></>
        }
      </Container>
    </Navbar>
  );
}

export default Navi;
