import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "./Greivance.css";

function GrievanceForm() {
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    address: "",
    villageName: "",
    tehsilName: "",
    aadharNo: "",
    grievance: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const sanitizedValue = name === "mobile" || name === "aadharNo" ? value.replace(/\D/g, "") : value;
    setFormData({ ...formData, [name]: sanitizedValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
      villageName: "",
      tehsilName: "",
      aadharNo: "",
      grievance: "",
    });
  };

  return (
    <div className="grievance-form-container">
      {submitted && (
        <Alert variant="success">Grievance submitted successfully!</Alert>
      )}
      <h3 className="form-title">Grievance Form</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFullName" style={{ marginBottom: "20px" }}>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="fullName"
            placeholder="Enter your Name "
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail" style={{ marginBottom: "20px" }}>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            placeholder=" e.g abc@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formMobile" style={{ marginBottom: "20px" }}>
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            type="tel"
            pattern="[6-9][0-9]{9}"
            maxLength="10"
            placeholder="xxxxx xxxxx "
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
          <Form.Text className="text-muted">
            Mobile number should start with number ranging from 6-9 only.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formAddress" style={{ marginBottom: "20px" }}>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            placeholder="Enter your Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formVillageName" style={{ marginBottom: "20px" }}>
          <Form.Label>Village Name</Form.Label>
          <Form.Control
            type="text"
            name="villageName"
            placeholder="Enter your Village name "
            value={formData.villageName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formTehsilName" style={{ marginBottom: "20px" }}>
          <Form.Label>Tehsil Name</Form.Label>
          <Form.Control
            type="text"
            name="tehsilName"
            placeholder="Enter your Tehsil Name"
            value={formData.tehsilName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formAadharNo" style={{ marginBottom: "20px" }}>
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

        <Form.Group controlId="formGrievance" style={{ marginBottom: "20px" }}>
          <Form.Label>Enter your Problem here</Form.Label>
          <Form.Control
            as="textarea"
            name="grievance"
            placeholder="Enter your problem here "
            value={formData.grievance}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <div style={{ textAlign: "center" }}>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default GrievanceForm;



































// import React, { useState } from "react";
// import { Form, Button, Alert } from "react-bootstrap";
// import "./App.css" ;


// function GrievanceForm() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     mobile: "",
//     address: "",
//     villageName: "",
//     tehsilName: "",
//     aadharNo: "",
//     grievance: "",
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     const mobilenumber = name === "mobile" ? value.replace(/\D/g, "") : value;
//     const adharnumber = name === "aadharNo" ? value.replace(/\D/g, "") : value;

//     setFormData({ ...formData, [name]: mobilenumber, [name]: adharnumber });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here, you would typically send the data to a backend service
//     console.log("Grievance submitted:", {
//       grievanceId: Date.now(),
//       date: new Date().toLocaleDateString(),
//       ...formData,
//     });
//     setSubmitted(true);
//     setFormData({
//       fullName: "",
//       email: "",
//       mobile: "",
//       address: "",
//       villageName: "",
//       tehsilName: "",
//       aadharNo: "",
//       grievance: "",
//     });
//   };

//   return (
//     <div className="grievance-form-container">
//       {submitted && (
//         <Alert variant="success">Grievance submitted successfully!</Alert>
//       )}
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="formFullName" style={{ marginBottom: "20px" }}>
//           <Form.Label>Full Name</Form.Label>
//           <Form.Control
//             type="text"
//             name="fullName"
//             placeholder="Enter your Name "
//             value={formData.fullName}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>

//         <Form.Group controlId="formEmail" style={{ marginBottom: "20px" }}>
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="email"
//             name="email"
//             pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
//             placeholder=" e.g abc@gmail.com"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//           </Form.Text>
//         </Form.Group>

//         <Form.Group controlId="formMobile" style={{ marginBottom: "20px" }}>
//           <Form.Label>Mobile</Form.Label>
//           <Form.Control
//             type="tel"
//             pattern="[6-9][0-9]{9}"
//             maxLength="10"
//             placeholder="xxxxx xxxxx "
//             name="mobile"
//             value={formData.mobile}
//             onChange={handleChange}
//             required
//           />
//           <Form.Text className="text-muted">
//             mobile number should start with number ranging from 6-9 only.
//           </Form.Text>
//         </Form.Group>

//         <Form.Group controlId="formAddress" style={{ marginBottom: "20px" }}>
//           <Form.Label>address </Form.Label>
//           <Form.Control
//             type="text"
//             name="address"
//             placeholder="Enter your Address"
//             value={formData.houseNo}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>

//         <Form.Group
//           controlId="formVillageName"
//           style={{ marginBottom: "20px" }}
//         >
//           <Form.Label>Village Name</Form.Label>
//           <Form.Control
//             type="text"
//             name="villageName"
//             placeholder="Enter your Village name "
//             value={formData.villageName}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>

//         <Form.Group controlId="formTehsilName" style={{ marginBottom: "20px" }}>
//           <Form.Label>Tehsil Name</Form.Label>
//           <Form.Control
//             type="text"
//             name="tehsilName"
//             placeholder="Enter your TehsilName"
//             value={formData.tehsilName}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>

//         <Form.Group controlId="formAadharNo" style={{ marginBottom: "20px" }}>
//           <Form.Label>Aadhar Number</Form.Label>
//           <Form.Control
//             type="text"
//             name="aadharNo"
//             pattern="[0-9]{12}"
//             maxLength="12"
//             placeholder="xxxx xxxx xxxx "
//             value={formData.aadharNo}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>

//         <Form.Group controlId="formGrievance" style={{ marginBottom: "20px" }}>
//           <Form.Label>Enter your Problem here</Form.Label>
//           <Form.Control
//             as="textarea"
//             name="grievance"
//             placeholder="Enter your problem here "
//             value={formData.grievance}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>
//         <div style={{ textAlign: "center" }}>
//           <Button variant="primary" type="submit">
//             Submit
//           </Button>
//         </div>
//       </Form>
//     </div>
//   );
// }

// export default GrievanceForm;