import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Stack,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Link,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import FlashOnIcon from "@mui/icons-material/FlashOn";

const services = [
  {
    title: "Banking",
    desc: "We offer new account opening, remittances, deposits, withdrawals, balance inquiry, and payout solutions.",
    img: "/images/banking.jpg",
  },
  {
    title: "Insurance",
    desc: "Get the best quote for life, health, and vehicle insurance. Merchants earn commission on each booking.",
    img: "/images/insurance.jpg",
  },
  {
    title: "Utility",
    desc: "Instantly pay electricity, water, gas, credit card bills, EMI installments, and more.",
    img: "/images/utility.jpg",
  },
];

const quickServices = [
  { title: "Prepaid", desc: "Digital payments accessible to everyone.", icon: "📱" },
  { title: "BBPS", desc: "Hassle-free bill payments at your shop.", icon: "🅱️" },
  { title: "UPI", desc: "Reliable, safe, and instant UPI transactions.", icon: "🔗" },
  { title: "AEPS", desc: "Cash withdrawal, deposit, balance enquiry with Aadhaar.", icon: "🖐️" },
  { title: "CMS", desc: "Cash handling & tracking for efficient liquidity management.", icon: "💵" },
];

export default function HomeHero() {
  return (
    <Box sx={{  bgcolor: "#fdfdfd" }}>
      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="flex-start">
          {/* Left Side */}
          <Grid item xs={6} md={6} lg={6}>
            <Typography
              align="center"
              variant="h1"
              sx={{ fontWeight: 800, color: "#2e1a63", mt: 4, fontFamily: "serif", letterSpacing: '0.02em', lineHeight: '0.8' }}
            >
            Your Trusted <br />
            Partner in Digital <br />
            Finance.!
            </Typography>
            <Typography falign="center" variant="body1" sx={{ mb: 4, fontSize: "1.1rem" }}>
              P2PAE is a trusted fintech leader with 10+ years of experience,
              simplifying and securing online transactions. Recognized as one of
              India’s fastest-growing names, we help businesses streamline
              payments, boost security, and scale with confidence.
            </Typography>

            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
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
          <Grid xs={6} md={6} lg={6}>
                 <Box
                            component="img"
                            src="/src/assets/SITE DESIGN .png"
                            alt="logo"
                            sx={{ height: 40, mr: 1 }}
                          />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
