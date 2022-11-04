import {Container, Nav, Navbar} from 'react-bootstrap';

function Navi({isAuth}) {
  return (
    <Navbar fixed="top" variant="dark" expand="lg" style={{background: "#B5D2E7"}}>
      <Container fluid>
	<Navbar.Brand href="/home" style={{fontfamily: "roboto"}}>NITC Student Hub</Navbar.Brand>
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
