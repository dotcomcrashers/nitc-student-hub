import logo from './logo.png';
import './Login.css';
import { useEffect, useState } from 'react';
import { Image, Container, Card, Form, Button } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';

function Login() {
  const clientId = '616949179474-li7vs65d0unjsen85r4170a6opnh3f5j.apps.googleusercontent.com';//process.env['GOOGLE_CLIENT_ID'];
   const [ profile, setProfile ] = useState([]);
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

    const logOut = () => {
        setProfile(null);
    };

  return (
    <Container className="Login d-flex vh-100 justify-content-center align-items-center" fluid>
    <Card style={{ width: '40rem'}} className="row p-5">
      <Card.Body>
        <Card.Title>Login</Card.Title>
        <Form>
          <Image src={profile ? profile.imageUrl : logo} style={{width: '10rem', height: '10rem'}} roundedCircle/>
          <Form.Group className="mb-3 py-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder={profile ? profile.name : "Name"} disabled/>
          </Form.Group>

          <Form.Group className="mb-3 py-3" controlId="formBasicPassword">
            <Form.Control type="email" placeholder={profile ? profile.email: "Email"} disabled/>
          </Form.Group>
          {profile
           ? <Button className="my-2 w-100 p-2" variant="primary" type="submit" onClick={logOut}>
               Continue
             </Button>
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
