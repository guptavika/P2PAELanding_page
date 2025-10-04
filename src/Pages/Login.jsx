import React from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

const Login = () => (
  <Container sx={{ mt: 4 }}>
    <Typography variant="h4" gutterBottom>Login</Typography>
    <Box
      component="form"
      sx={{
        mt: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 400,
      }}
    >
      <TextField label="Username" variant="outlined" fullWidth />
      <TextField label="Password" type="password" variant="outlined" fullWidth />
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
    </Box>
  </Container>
);

export default Login;
