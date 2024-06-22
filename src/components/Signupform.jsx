import React, { useState} from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import "./Signupform.css";

const SignupForm = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log(form);
    setShowSuccess(true);

    // Set timeout to hide the alert after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
        <span className="title-wrapper">
        <h1>Signup Form</h1>
      </span>

          {showSuccess && (
            <Alert variant="success">Signup successful!</Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicname">
              <Form.Label>Name<span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Full Name"
                name="Fullname"
                value={form.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmpid">
              <Form.Label>Employee ID<span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter employeeid"
                name="empid"
                value={form.empid}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicusername">
              <Form.Label>Username<span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                value={form.username}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicMobileNumber">
              <Form.Label>Mobile Number<span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Mobile Number"
                name="mobileNumber"
                value={form.mobileNumber}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicRole">
              <Form.Label>Role<span className="text-danger">*</span></Form.Label>
              <Form.Select
                name="role"
                value={form.role}
                onChange={handleChange}
                required
              >
                <option value="">Select Role</option>
                <option value="HOD">HOD</option>
                <option value="PRM">PRM</option>
                <option value="CEO">CEO</option>
                <option value="EMP">EMP</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address<span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password<span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Confirm Password<span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit">
                Signup
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupForm;
