import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, CssBaseline, Container, Typography, Grid } from '@mui/material';

export default function UserUpdate() {
  const { id } = useParams(); // Extracting the ID from the URL
  const [employee, setEmployee] = useState({
    FirstName: '', // Change fname to FirstName
    LastName: '', // Change lname to LastName
    Age: '',
    Country: '',
    Position: '',
    Avatar: '', // Change avertar to Avatar
  });

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:3001/employeesone/${id}`); // Use backticks to interpolate the value of id
      setEmployee({
        FirstName: response.data.fname || '',
        LastName: response.data.lname || '',
        Age: response.data.age || '',
        Country: response.data.country || '',
        Position: response.data.position || '',
        Avatar: response.data.avatar || '',
      });
      console.log(response.data.fname);
      console.log("Fetch the data Completed");
    } catch (error) {
      console.error("Error fetching employee data: ", error);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleChange = (prop) => (event) => {
    setEmployee(prevState => ({
      ...prevState,
      [prop]: event.target.value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(employee);
    try {
      await axios.put(`http://localhost:3001/employees/${id}`, employee);
      // Redirect or show a success message
      window.location.href = '/'; // Redirect to home page after successful update
    } catch (error) {
      console.error("Error updating employee: ", error);
      // Handle the error, e.g., show an error message
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography variant="h6" gutterBottom>
          Edit Employee
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id='FirstName'
                label="First Name"
                variant="outlined"
                fullWidth
                required
                value={employee.FirstName}
                onChange={handleChange('FirstName')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='LastName'
                label="Last Name"
                variant="outlined"
                fullWidth
                required
                value={employee.LastName}
                onChange={handleChange('LastName')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='Age'
                label="Age"
                variant="outlined"
                fullWidth
                required
                value={employee.Age}
                onChange={handleChange('Age')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='Country'
                label="Country"
                variant="outlined"
                fullWidth
                required
                value={employee.Country}
                onChange={handleChange('Country')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='Position'
                label="Position"
                variant="outlined"
                fullWidth
                required
                value={employee.Position}
                onChange={handleChange('Position')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='Avatar'
                label="Avatar URL"
                variant="outlined"
                fullWidth
                value={employee.Avatar}
                onChange={handleChange('Avatar')}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
}
