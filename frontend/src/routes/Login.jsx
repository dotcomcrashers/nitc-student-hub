import logo from './logo.png';
import './Login.css';
import { useEffect, useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { Image, Container, Card, Form, Button } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useCookies } from 'react-cookie';


function Login() {
  const clientId = '616949179474-li7vs65d0unjsen85r4170a6opnh3f5j.apps.googleusercontent.com';//process.env['GOOGLE_CLIENT_ID'];

  const [ profile, setProfile ] = useState(null);
  const [ cookies, setCookie ] = useCookies(['user']);

  let navigate = useNavigate();
  
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      });
    };
    gapi.load('client:auth2', initClient);
  });

  const onSuccess = (res) => {
    setProfile(res.profileObj);
  };

  const onFailure = (err) => {
    console.log('failed', err);
  };
  

  const logIn = () => {
    setCookie('name', profile.name, { path: '/'});
    setCookie('email', profile.email, { path: '/'});
    setCookie('pic', profile.imageUrl, {path: '/'});
    navigate('/home');
  };

  const logOut = () => {
    setProfile(null);
  };

  if(cookies.email) {
    return (
      <Navigate to="/home"/>
    );
  }
  return (
    <Container className="Login d-flex vh-100 justify-content-center align-items-center" fluid>
      <Card style={{ width: '40rem'}} className="row p-5">
        <Card.Body>
          <Card.Title className="mb-5" style={{fontSize: "2rem"}}>Login</Card.Title>
          <Form>
            <Image src={profile ? profile.imageUrl : logo} style={{width: '10rem', height: '10rem'}} roundedCircle/>
            <Form.Group className="mb-3 py-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder={profile ? profile.name : "Name"} disabled/>
            </Form.Group>

            <Form.Group className="mb-3 py-3" controlId="formBasicPassword">
              <Form.Control type="email" placeholder={profile ? profile.email: "Email"} disabled/>
            </Form.Group>
            {profile
             ? <>
                 <Button className="my-2 w-100 p-2" variant="success" type="submit" onClick={logIn}>
                   Continue
                 </Button>
                 <Button className="my-2 w-100 p-2" variant="danger" type="submit" onClick={logOut}>
                   Logout
                 </Button>
               </>
             : <GoogleLogin
                 clientId={clientId}
                 buttonText="Sign in with Google"
                 onSuccess={onSuccess}
                 onFailure={onFailure}
                 cookiePolicy={'single_host_origin'}
                 isSignedIn={false}
                 className="my-2 p-1 w-100"
               />
            }
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;
