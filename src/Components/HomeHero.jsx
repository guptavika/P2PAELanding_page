import React from "react";
import { Box, Grid, Typography, Button, Stack } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { motion } from "framer-motion";

export default function HomeHero() {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#fdfdfd",
        maxWidth: "100%",
        height: "100vh",
      }}
      xs={{ top: 225 }}
    >
      <Grid
        container
        spacing={{ xs: 3, md: 1 }}
        display={"flex"}
        justifyContent="flex-start"
        sx={{ maxWidth: "1200px", mx: "auto", px: 2 }}
        // xs={{maxHeight:"100vh",}}
      >
        {/* Left Side (Text) */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            mt: { xs: 4, md: 26 },
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
              lineHeight: 1,
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

          <Stack direction="row" spacing={2}>
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

        {/* Right Side (Images) */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: { xs: 4, md: 0 },
            opacity: {
              xs: 0.1,
              sm: 0.2,
              md: 1,
            },
            ml: 85,
            position: "absolute",
          }}
        >
          {/* Left Image */}
          <marquee
            direction="up"
            behavior="scroll"
            scrollamount="5"
            style={{
              display: "flex",
              flexDirection: "column",
              height: "1100px",
              overflow: "hidden",
              position: "relative",
              bottom: 280,
            }}
            loop="infinite"
          >
            {[...Array(4)].map((_, i) => (
              <img
                src="/src/assets/SITE DESIGN .png"
                alt="hero illustration right"
                style={{
                  width: "85%",
                  maxWidth: "220px",
                  height: "auto",
                  display: "block",
                  bottom: 550,
                  pb: 5,
                }}
              />
            ))}
          </marquee>

          {/* Right Image */}
          <marquee
            direction="up"
            behavior="scroll"
            scrollamount="8"
            loop="infinite"
            style={{
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              height: "800px",
              position: "relative",
              top: 25,
            }}
          >
            {[...Array(5)].map((_, i) => (
              <img
                src="/src/assets/SITE DESIGN .png"
                alt="hero illustration right"
                style={{
                  width: "95%",
                  maxWidth: "420px",
                  height: "auto",
                  display: "block",
                  pb: 5,
                }}
              />
            ))}
          </marquee>
        </Grid>
      </Grid>
    </Box>
  );
}
