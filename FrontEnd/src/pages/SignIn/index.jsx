import { Button, Container, Form } from "react-bootstrap";

function SignIn() {
  return (
    <>
      <Container>
        <div className="d-flex align-items-center justify-content-center vh-100">
          <div className="bg-white p-5 rounded">
            <h2>Sign In</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button>SignIn</Button>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
}

export default SignIn;
