import { Container, Nav, Navbar, Form, Button } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { useNavigate, Navigate } from 'react-router-dom';


function Navi({isAuth}) {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const navigate = useNavigate();
  const logOut = () => {
    removeCookie('name', { path: '/' });
    removeCookie('email', { path: '/' });
    removeCookie('pic', { path: '/' });
    navigate('/');
  };

  return (
    <Navbar fixed="top" variant="dark" expand="lg" style={{background: "#B5D2E7"}}>
      <Container fluid>
	<Navbar.Brand href="/home" style={{fontfamily: "roboto"}}>NITC Student Hub</Navbar.Brand>
        {isAuth
         ? <>
             <Nav className="me-auto">
               <Nav.Link href="/home">Home</Nav.Link>
               <Nav.Link href="/personal">Personal</Nav.Link>
               <Nav.Link href="/notifications">Notification</Nav.Link>  
             </Nav>
             <Form className="d-flex"> 
               <Button className="me-2" variant="danger" onClick={logOut}>Logout</Button>
             </Form>
         </>
         : <></>
        }
      </Container>
    </Navbar>
  );
}

export default Navi;
