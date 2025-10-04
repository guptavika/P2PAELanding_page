import React from "react";
import { Box, Container, Grid, Typography, Button, Stack } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { motion } from "framer-motion";

export default function HomeHero() {
  return (
    <Box
      sx={{
        bgcolor: "#fdfdfd",
        py: 8,
      }}
    >
      <Grid container spacing={{ xs: 3, md: 4 }} maxWidth="xl">
        {/* Left Side (Text) */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            mt: 9,
            ml: 3,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              color: "#2e1a63",
              fontFamily: "serif",
              mb: 2,
              letterSpacing: "0.02em",
              lineHeight: 0.9,
            }}
          >
            Your Trusted <br />
            Partner in Digital <br />
            Finance.!
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontWeight: 550,
              mb: 3,
              maxWidth: 500,
              fontSize: "1.1rem",
              color: "text.secondary",
            }}
          >
            P2PAE is a trusted fintech leader with 10+ years of experience,
            simplifying and securing online transactions. Recognized as one of
            India’s fastest-growing names, we help businesses streamline
            payments, boost security, and scale with confidence.
          </Typography>

          <Stack direction="row" spacing={2} sx={{ ml: 5 }}>
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              sx={{
                backgroundColor: "#1a1333",
                textTransform: "uppercase",
                px: 3,
                py: 1.5,
                fontWeight: 600,
                "&:hover": { backgroundColor: "#2d1f55" },
              }}
            >
              Download App
            </Button>

            <Button
              variant="outlined"
              startIcon={<FlashOnIcon />}
              sx={{
                borderColor: "#1a1333",
                color: "#1a1333",
                px: 3,
                py: 1.5,
                fontWeight: 600,
                "&:hover": { borderColor: "#2d1f55", color: "#2d1f55" },
              }}
            >
              Get Started for Free
            </Button>
          </Stack>
        </Grid>

        <Grid>
          {/* Left Image */}
          <Grid
            item
            xs={6}
            md={3}
            sx={{ display: "flex", justifyContent: "flex-start" }}
          >
            <motion.img
              src="/src/assets/SITE DESIGN .png"
              alt="hero illustration left"
              style={{
                maxWidth: "5%",
                height: "auto",
              }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </Grid>

          {/* Right Image */}
          <Grid
            item
            xs={6}
            md={3}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <motion.img
              src="/src/assets/SITE DESIGN .png"
              alt="hero illustration right"
              style={{
                maxWidth: "10%",
                height: "auto",
              }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
