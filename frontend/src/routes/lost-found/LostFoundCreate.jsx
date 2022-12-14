import './LostFoundCreate.css';
import { useState, useRef } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { Container, Card, Form, Button, Toast, ToastContainer } from 'react-bootstrap';
import { useCookies } from 'react-cookie';


function LostFoundCreate() {
  const [cookies, setCookie] = useCookies(['user']);
  const [postType, setPostType] = useState("0"); 
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [showToast, setShowToast] = useState(false);
  let navigate = useNavigate();
  let formRef = useRef();

  function addPost() {
    console.log(JSON.stringify({"type": postType, "title": title, "description": description, "author_email": cookies.email, "location": location, "time": time}));
    const formElement = formRef.current;
    if (formElement.checkValidity() === false) {
      formElement.reportValidity();
      return;
    }
    fetch(
      "http://localhost:3000/api/lost-found/create",
      {
        method: 'POST',
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({"type": 0, "title": title, "description": description, "author_email": cookies.email, "location": location, "time": time, "image": image})
      })
      .then((res) => res.json())
      .then((_) => {
        navigate("/lost-found/home");
      })
      .catch((_) => {
        setShowToast(true);
      });
  }

  function getBase64Image(file) {
    let baseURL = "";
    return new Promise( resolve => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
  }

  function setBase64Image(selectedFile) {
    getBase64Image(selectedFile)
      .then( result => {
        setImage(result);
      })
      .catch((_) => {
        setShowToast(true);
      });
  }

  if (!cookies.email) {
    return (
      <Navigate to="/"/>
    );
  }

  return (
    <Container className="Create d-flex vh-100 justify-content-center align-items-center" fluid>
      <ToastContainer>
      <Toast onClose={() => setShowToast(false)} show={showToast} delay={60000} postion="top-center" bg="danger" autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Oops!</strong>
            <small>now</small>
          </Toast.Header>
          <Toast.Body className="text-white">Could not create the post! Please try again later!</Toast.Body>
      </Toast>
      </ToastContainer>
      
      <Card style={{ width: '100rem'}} className="row">
        <Card.Header>{cookies.email}</Card.Header>
        <Card.Title className="my-3 text-center" style={{fontSize: "2rem"}}>Create Lost and Found Post</Card.Title>
        <Card.Body className="p-3 justify-content-center text-center">
          <Form ref={formRef} className="create-form">
            <Form.Group className="mb-3" controlId="title">
              <Form.Select aria-label="Select Lost or Found" onChange={e => setPostType(e.target.value)} required>
                <option value="">Select Lost or Found</option>
                <option value="0">Lost</option>
                <option value="1">Found</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="title">
              <Form.Control type="text" placeholder="Title" onChange={e => setTitle(e.target.value)} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Control as="textarea" rows={8} placeholder="Description" onChange={e => setDescription(e.target.value)} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="time">
              <Form.Control type="datetime-local" onChange={e => setTime(e.target.value)} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="location">
              <Form.Control as="textarea" rows={3} placeholder="Last seen place" onChange={e => setLocation(e.target.value)} required/>
            </Form.Group>
            <Form.Group controlId="image" className="mb-3">
              <Form.Label className="w-100 px-2" style={{textAlign: "left"}}>Image of the lost item</Form.Label>
              <Form.Control type="file" size="lg" className="hidden" onChange={e => { setBase64Image(e.target.files[0]);  }}/>
            </Form.Group>
            <Button className="my-2 w-100 p-1" variant="success" onClick={addPost}>
              Post
            </Button>
            <Button className="my-2 w-100 p-1" variant="danger" onClick={() => { navigate("/lost-found/home"); }}>
              Cancel
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default LostFoundCreate;
