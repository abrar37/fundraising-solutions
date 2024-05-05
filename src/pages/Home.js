import {
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import Layout from "../components/Layout";
import './pages.css'

function Home() {
  return (
    <Layout>
      <Box component="section" className="banner-section">
      <Container >
        <Box 
          display="flex" 
          justifyContent={"space-between"} 
          py={12}
          gap={6}
        >

          <Box className="banner-left">
            <Typography variant="h1">Fundraising Made Easy!</Typography>
            <Typography>
              Let us manage your next fundraising campaign with our Canada-wide
              online 50/50s or Chase the Ace software. Supporters can play from
              anywhere in the country.
            </Typography>
            <Button>Start Today!</Button>
          </Box>

          <Box className="banner-right">
            <Box className="banner-card">
              <Box 
                display="flex"
                justifyContent={"space-between"}
              >
                <Typography>Current 50/50 Jackpot</Typography>
                <Typography>$<span>70</span></Typography>

              </Box>

              <Typography variant="h2">
                The Lotto Factory Six Nations Veterans Association
              </Typography>

              <Box
                display="flex"
                justifyContent={"space-between"}
              >
                <Box>
                  <Typography>Funds Raised till now</Typography>
                  <Typography>$4,080,769</Typography>
                </Box>

                <Button>Buy Tickets</Button>
              </Box>
            </Box>
          </Box>

        </Box>
      </Container>
      </Box>
    </Layout>
  );
}

export default Home;
