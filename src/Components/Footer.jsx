import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        pt: 6,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' },
            gap: 4,
            mb: 4,
          }}
        >
          {/* Logo and Disclaimer Section */}
          <Box sx={{ gridColumn: { xs: '1', md: 'span 1' } }}>
            <Box
              component="img"
              src="src/assets/logopkmc.png"
              alt="P2PAE"
              sx={{
                height: 80,
                mb: 3,
              }}
            />
            <Typography
              sx={{
                fontSize: '1rem',
                lineHeight: 1.5,
                color: '#140a53',
                mb: 3,
                fontFamily:'sans-serif'
              }}
            >
              Disclaimer: Any dispute arising under these terms and conditions shall be subject to the jurisdiction of the courts of Delhi.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton
                sx={{
                  color: '#1877f2',
                  '&:hover': { backgroundColor: 'rgba(24, 119, 242, 0.08)' },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: '#1da1f2',
                  '&:hover': { backgroundColor: 'rgba(29, 161, 242, 0.08)' },
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: '#0077b5',
                  '&:hover': { backgroundColor: 'rgba(0, 119, 181, 0.08)' },
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Box>

          {/* P2PAE Section */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontSize: '18px',
                fontWeight: 600,
                color: '#140a53',
                mb: 2,
              }}
            >
              P2PAE
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Link
                href="#"
                sx={{
                  fontSize: '14px',
                  color: '#666',
                  textDecoration: 'none',
                  '&:hover': { color: '#070a72ff' },
                }}
              >
                About us
              </Link>
              <Link
                href="#"
                sx={{
                  fontSize: '14px',
                  color: '#666',
                  textDecoration: 'none',
                  '&:hover': { color: '#070a72ff' },
                }}
              >
                Contact us
              </Link>
              <Link
                href="#"
                sx={{
                  fontSize: '14px',
                  color: '#666',
                  textDecoration: 'none',
                  '&:hover': { color: '#070a72ff' },
                }}
              >
                FAQs
              </Link>
            </Box>
          </Box>

          {/* Legal Section */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontSize: '18px',
                fontWeight: 600,
                color: '#140a53',
                mb: 2,
              }}
            >
              Legal
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Link
                href="#"
                sx={{
                  fontSize: '14px',
                  color: '#666',
                  textDecoration: 'none',
                  '&:hover': { color: '#070a72ff' },
                }}
              >
                Terms and Condition
              </Link>
              <Link
                href="#"
                sx={{
                  fontSize: '14px',
                  color: '#666',
                  textDecoration: 'none',
                  '&:hover': { color: '070a72ff' },
                }}
              >
                Privacy Policy
              </Link>
            </Box>
          </Box>

          {/* Contact Section */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontSize: '18px',
                fontWeight: 600,
                color: '#140a53',
                mb: 2,
              }}
            >
              Contact
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Link
                href="mailto:Support@p2pae.com"
                sx={{
                  fontSize: '14px',
                  color: '#666',
                  textDecoration: 'none',
                  '&:hover': { color: '#070a72ff' },
                }}
              >
                Support@p2pae.com
              </Link>
              <Typography
                sx={{
                  fontSize: '14px',
                  color: '#666',
                }}
              >
                011-47537321 ,7428985999
              </Typography>
              <Typography
                sx={{
                  fontSize: '14px',
                  color: '#666',
                  lineHeight: 1.6,
                }}
              >
                PVT No.-2, B-1, KH No.900/289Ground Floor, Shalimar Village, Delhi, North West Delhi-110088, Delhi
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Copyright and Link */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            pt: 3,
            borderTop: '1px solid #e0e0e0',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: '14px',
              color: '#666',
            }}
          >
            © 2025 All rights reserved
          </Typography>
          
           
         
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
