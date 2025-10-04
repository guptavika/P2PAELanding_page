import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const navigationItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Our Services", path: "/services" },
    { label: "Our Partners", path: "/partners" },
    { label: "Contact Us", path: "/contact" }
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "linear-gradient(90deg, #5A0FC8, #480DC6)",
        py: 1,
      }}
      elevation={0}
    >
      <Toolbar>
        {/* Logo */}
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <Box
            component="img"
            src="/src/assets/logop2p.png"
            alt="logo"
            sx={{ 
              height: 40, 
              mr: 1,
              cursor: "pointer"
            }}
            onClick={() => navigate("/")}
          />
        </Box>

        {/* Navigation */}
        <Stack
          direction="row"
          spacing={4}
          sx={{ 
            alignItems: "center", 
            mr: 3,
            display: { xs: "none", md: "flex" }
          }}
        >
          {navigationItems.map((item) => (
            <Typography
              key={item.label}
              variant="body1"
              sx={{ 
                color: "white", 
                cursor: "pointer", 
                "&:hover": { opacity: 0.8 } 
              }}
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </Typography>
          ))}
        </Stack>

        {/* Login Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#7C2EE5",
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 600,
            "&:hover": { backgroundColor: "#6925c7" },
          }}
          onClick={() => navigate("/login")}
        >
          Login Now
        </Button>
      </Toolbar>
    </AppBar>
  );
}