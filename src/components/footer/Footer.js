import React from "react";
import logo from './../../assets/logo-light.svg'
import { Box, Container, Typography } from "@mui/material";

function Footer() {
  return (
    <footer>
      <Box
        py={10}
        sx={{
          bgcolor: "primary.main",
        }}
      >
        <Container>
          <Box>
            <Box>
              <img src={logo} alt=""/>
              <Typography>© 2023 TLF. All Rights Reserved.</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
