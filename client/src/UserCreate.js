import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

export default function UserCreate() {
  

  const [fname, setFirstName] = useState([]);
  const [lname, setLastName] = useState([]);
  const [age, setAge] = useState([]);
  const [country, setCountry] = useState([]);
  const [position, setPosition] = useState([]);
  const [avatar, setAvartarURL] = useState([]);

  const addEmployee = () => {
    axios.post("http://localhost:3001/create", {
      FirstName: fname,
      LastName: lname,
      Age: age,
      Country: country,
      Position: position,
      AvatarURL: avatar,
    })
    
    .then(() => {
        window.location.href = '/'
    });
};

return (
  <React.Fragment>
    <CssBaseline />
    <Container maxWidth="sm" sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom component="div">
        Create User
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="FirstName"
              label="First Name"
              variant="outlined"
              fullWidth
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="LastName"
              label="Last Name"
              variant="outlined"
              fullWidth
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="Age"
              label="Age"
              variant="outlined"
              fullWidth
              required
              onChange={(e) => setAge(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="Country"
              label="Country"
              variant="outlined"
              fullWidth
              required
              onChange={(e) => setCountry(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="Position"
              label="Position"
              variant="outlined"
              fullWidth
              required
              onChange={(e) => setPosition(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="AvatarURL"
              label="Avatar"
              variant="outlined"
              fullWidth
              required
              onChange={(e) => setAvartarURL(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="success"
              fullWidth
              onClick={addEmployee}
            >
              Create
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  </React.Fragment>
);
}
