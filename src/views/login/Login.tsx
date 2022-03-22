import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from 'react-bootstrap';

export const Login = () => {
  return (
    <>
      <Container>
        <h1 className="text-center my-5">Login</h1>

        <Row>
          <Col lg={8} xl={6} className="mx-auto">
            <Form className="text-black">
              <FloatingLabel label="Email Address" controlId="email">
                <Form.Control type="email" placeholder="example@example.org" />
              </FloatingLabel>

              <FloatingLabel
                label="Password"
                className="mt-4"
                controlId="password"
              >
                <Form.Control type="password" placeholder="password" />
              </FloatingLabel>

              <Form.Group
                className="mt-4 text-white"
                controlId="stay-connected"
              >
                <Form.Check type="checkbox" label="Stay connected" />
              </Form.Group>

              <Button
                variant="primary"
                size="lg"
                type="submit"
                className="mt-5 w-100"
              >
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
