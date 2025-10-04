import { Box, Container, Typography, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import ServicesSection from '../components/ServicesSection';

const HeroSection = () => {
  return (
    <>
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #E8D4F8 0%, #F5E6FA 50%, #FAE8E0 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: 'center',
            px: { xs: 2, sm: 4, md: 8 },
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: '#5B21B6',
              fontSize: { xs: '0.875rem', sm: '1rem' },
              fontWeight: 600,
              letterSpacing: '0.1em',
              mb: 2,
            }}
          >
            EXPAND YOUR BUSINESS WITH OUR SERVICES!
          </Typography>

          <Typography
            variant="h1"
            sx={{
              color: '#1E1B4B',
              fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
              fontWeight: 700,
              lineHeight: 1.2,
              mb: 4,
            }}
          >
            All the services you need to run your business
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#4B5563',
              fontSize: { xs: '1rem', sm: '1.125rem' },
              lineHeight: 1.8,
              maxWidth: '800px',
              mx: 'auto',
              mb: 6,
            }}
          >
            A unique and powerful software suite to transform the way you work. Designed for
            businesses of all sizes, built by a company that values your privacy.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              flexWrap: 'wrap',
              mt: 6,
            }}
          >
            <Button
              variant="contained"
              endIcon={<ArrowForward />}
              sx={{
                backgroundColor: '#7C3AED',
                color: 'white',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                textTransform: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 14px rgba(124, 58, 237, 0.4)',
                '&:hover': {
                  backgroundColor: '#6D28D9',
                  boxShadow: '0 6px 20px rgba(124, 58, 237, 0.5)',
                },
              }}
            >
              Login Now
            </Button>

            <Button
              variant="outlined"
              endIcon={<ArrowForward />}
              sx={{
                borderColor: '#7C3AED',
                color: '#7C3AED',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                textTransform: 'none',
                borderRadius: '8px',
                borderWidth: '2px',
                '&:hover': {
                  borderColor: '#6D28D9',
                  borderWidth: '2px',
                  backgroundColor: 'rgba(124, 58, 237, 0.05)',
                },
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Box>
      </Container>
     
    </Box>
      <ServicesSection />
    </>
  );
};

export default HeroSection;
