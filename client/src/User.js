import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Paper, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Avatar from "@mui/material/Avatar";
import { deepOrange, } from "@mui/material/colors";
//import Link from '@mui/material/Link';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ButtonGroup from '@mui/material/ButtonGroup';
import TableCell from '@mui/material/TableCell';
import Stack from '@mui/material/Stack';

export default function User() {

  const [employeeList, setEmployeeLsit] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/employees');
        setEmployeeLsit(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, []);

    const deleteEmployee = (id) => {
      axios.delete(`http://localhost:3001/delete/${id}`).then((response)=>{
        console.log(id);
        setEmployeeLsit(
          
          employeeList.filter((row)=>{
            return row.id != id;
          })
        )
      })
    }


  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ P: 2 }}>
        <Paper sx={{ p: 2 }}>
          <Box display="flex">
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6" gutterBottom>
                Users
              </Typography>
            </Box>
            <Box>
              <Link to="create">
                <Button variant="contained" endIcon={<SendIcon />}>
                  Create
                </Button>
              </Link>
            </Box>
          </Box>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="center">Avatar</TableCell>
                  <TableCell align="right">First Name</TableCell>
                  <TableCell align="right">Last Name</TableCell>
                  <TableCell align="right">Age</TableCell>
                  <TableCell align="right">Country</TableCell>
                  <TableCell align="right">Position</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employeeList.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="center">
                      <Box display={"flex"} justifyContent={"center"}>
                    <Avatar sx={row.avatar}>N</Avatar>
                    </Box>
                    </TableCell>
                    <TableCell align="right">{row.fname}</TableCell>
                    <TableCell align="right">{row.lname}</TableCell>
                    <TableCell align="right">{row.age}</TableCell>
                    <TableCell align="right">{row.country}</TableCell>
                    <TableCell align="right">{row.position}</TableCell>

                    <ButtonGroup variant="text" aria-label="Basic button group">
                      <Link to={`/update/${row.id}`}>
                      <Button className="btn btn-warning">Edit</Button>
                      </Link>
                      <Button className="btn btn-warning" onClick={()=>{deleteEmployee(row.id)}}>DEL</Button>
                    </ButtonGroup>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

        </Paper>
      </Container>
    </React.Fragment>
  );
}


