import { Container, Nav, Navbar, Form, Button } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { useNavigate, Outlet } from 'react-router-dom';


function Navi({isAuth}) {
  const [,, removeCookie ] = useCookies(['user']);
  const navigate = useNavigate();
  
  const logOut = () => {
    removeCookie('name', { path: '/' });
    removeCookie('email', { path: '/' });
    removeCookie('pic', { path: '/' });
    navigate('/');
  };

  return (
    <>
      <Navbar fixed="top" variant="dark" expand="lg" style={{background: "#B5D2E7"}}>
        <Container fluid>
	  <Navbar.Brand href="/" style={{fontfamily: "roboto"}}>NITC Student Hub</Navbar.Brand>
          {isAuth?
           <>
             <Nav className="me-auto">
               <Nav.Link href="/lost-found/home">Home</Nav.Link>
               <Nav.Link href="/lost-found/personal">Personal</Nav.Link>
               <Nav.Link href="/lost-found/notifications">Notification</Nav.Link>  
             </Nav>
             <Form className="d-flex"> 
               <Button className="me-2" variant="danger" onClick={logOut}>Logout</Button>
             </Form>
           </>
           : <></>
          }
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Navi;
