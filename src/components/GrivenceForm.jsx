import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "./GrevenceForm.css";

function GrievanceForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    address: "",
    aadharNo: "",
    grievance: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const numericValue = name === "mobile" ? value.replace(/\D/g, "") : value;
    const adharnumber = name === "aadharNo" ? value.replace(/\D/g, "") : value;

    setFormData({ ...formData, [name]: numericValue, [name]: adharnumber });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically send the data to a backend service
    console.log("Grievance submitted:", {
      grievanceId: Date.now(),
      date: new Date().toLocaleDateString(),
      ...formData,
    });
    setSubmitted(true);
    setFormData({
      fullName: "",
      email: "",
      mobile: "",
      address: "",
      aadharNo: "",
      grievance: "",
    });
  };

  return (
    <div className="grievance-form-container">
      {submitted && (
        <Alert variant="success">Grievance submitted successfully!</Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            id="email"
            name="email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            placeholder=" e.g abc@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formMobile">
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            type="tel"
            id="mobile"
            pattern="[6-9][0-9]{9}"
            maxLength="10"
            placeholder="xxxxx xxxxx "
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formHouseNo">
          <Form.Label>House No</Form.Label>
          <Form.Control
            type="text"
            name="houseNo"
            value={formData.houseNo}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formVillageName">
          <Form.Label>Village Name</Form.Label>
          <Form.Control
            type="text"
            name="villageName"
            value={formData.villageName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPinCode">
          <Form.Label>Pin Code</Form.Label>
          <Form.Control
            type="text"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formTehsilName">
          <Form.Label>Tehsil Name</Form.Label>
          <Form.Control
            type="text"
            name="tehsilName"
            value={formData.tehsilName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formAadharNo">
          <Form.Label>Aadhar Number</Form.Label>
          <Form.Control
            type="text"
            name="aadharNo"
            pattern="[0-9]{12}"
            maxLength="12"
            placeholder="xxxx xxxx xxxx "
            value={formData.aadharNo}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formGrievance">
          <Form.Label>Enter your Problem here</Form.Label>
          <Form.Control
            as="textarea"
            name="grievance"
            value={formData.grievance}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default GrievanceForm;
