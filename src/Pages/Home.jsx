import React from "react";
import { Container, Typography } from "@mui/material";

const Home = () => (
  <Container sx={{ mt: 4 }}>
    <Typography variant="h4" gutterBottom>Welcome to Home Page</Typography>
    <Typography>This is the landing page of your project.</Typography>
  </Container>
);

export default Home;
