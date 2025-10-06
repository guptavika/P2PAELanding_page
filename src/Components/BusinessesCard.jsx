import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";

const BusinessStats = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#5A2DFA", // purple background
        color: "#fff",
        p: { xs: 3, sm: 4, md: 8 }, // responsive padding
      }}
    >
      <Grid
        container
        spacing={{ xs: 3, md: 4 }}
        alignItems="center"
        justifyContent="center"
      >
        {/* Left Side */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#f6a04d",
              mb: { xs: 1, sm: 2 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Made in India
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#fff",
              mb: { xs: 3, sm: 4 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Made for Businesses
          </Typography>

          <Grid
            container
            spacing={2}
            justifyContent={{ xs: "center", md: "flex-start" }}
          >
            {[
              { value: "50K+", label: "Merchants" },
              { value: "120L+", label: "Customers" },
              { value: "800+", label: "Cities" },
              { value: "250L+", label: "Transactions" },
            ].map((item, idx) => (
              <Grid item xs={6} sm={6} md={6} key={idx}>
                <Paper
                  elevation={2}
                  sx={{
                    p: { xs: 2, sm: 3 },
                    textAlign: "center",
                    borderRadius: 2,
                    backgroundColor: "#fff",
                    minHeight: { xs: 70, sm: 90, md: 100 }, // reduced heights
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#1a1a1a" }}
                  >
                    {item.value}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#1a1a1a",
                      textDecoration: "underline",
                      textDecorationColor: "#f6a04d",
                    }}
                  >
                    {item.label}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Right Side */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: { xs: 2, sm: 3 },
            }}
          >
            {/* Illustration */}
            <Paper
              elevation={3}
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                width: "100%",
                maxWidth: { xs: 320, sm: 400, md: 500 },
              }}
            >
              <img
                src="/src/assets/woman.jpg"
                alt="Illustration"
                style={{ width: "100%", height: "auto" }}
              />
            </Paper>

            {/* Quote */}
            <Paper
              elevation={3}
              sx={{
                p: { xs: 2, sm: 3 },
                borderRadius: 3,
                width: "100%",
                maxWidth: { xs: 320, sm: 400, md: 450 },
                backgroundColor: "#fff",
                color: "#1a1a1a",
                fontStyle: "italic",
              }}
            >
              <Typography variant="body2" sx={{ fontSize: { xs: 14, sm: 16 } }}>
                “Since embracing our neo banking platform, our financial
                management has soared, witnessing an impressive 80% boost in
                productivity over the past year.”
              </Typography>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BusinessStats;
