import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GrievanceTable = () => {
  const [grievances, setGrievances] = useState([]);
  const [error, setError] = useState(null);

  const fetchGrievances = async () => {
    try {
      const response = await axios.get('http://localhost:8082/grievance/getAllGrivance');
      setGrievances(response.data);
      console.log("API response Data : ", response.data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching grievances:', err);
    }
  };
  useEffect(() => {
        fetchGrievances();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Grievances</h1>
      <table>
        <thead>
          <tr>
            <th>Grievance ID</th>
            <th>Date</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Tehsil Name</th>
            <th>Village Name</th>
            <th>Address</th>
            <th>Aadhar No</th>
            <th>Grievance</th>
          </tr>
        </thead>
        <tbody>
          {grievances.map((grievance) => (
            <tr key={grievance.grievanceId}>
              <td>{grievance.grievanceId}</td>
              <td>{grievance.date ? new Date(grievance.date).toLocaleString() : 'N/A'}</td>
              <td>{grievance.fullName}</td>
              <td>{grievance.email}</td>
              <td>{grievance.mobile}</td>
              <td>{grievance.tehsilName}</td>
              <td>{grievance.villageName}</td>
              <td>{grievance.address}</td>
              <td>{grievance.aadharNo}</td>
              <td>{grievance.grievance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GrievanceTable;