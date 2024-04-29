import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <Container component="section">
        <Box
        display="flex"
        >

          <Box>
            <Typography>Fundraising Made Easy!</Typography>
            <Typography>Let us manage your next fundraising campaign with our Canada-wide online 50/50s or Chase the Ace software. Supporters can play from anywhere in the country.</Typography>
            <Button>Start Today!</Button>
          </Box>

          <Box>
            <Box>
              <Typography>Current 50/50 Jackpot</Typography>
              <Typography><span>$70</span></Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}

export default Home;
