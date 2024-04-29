import logo from "../../assets/logo-dark.svg";
import { Box, Button, Container } from "@mui/material";
import React from "react";
import { NavLink, Link as RouterLink } from "react-router-dom";

function Header() {
  const navItems = [
    {
      name: "Fundraising Products",
      url: "/fundraising-products",
    },
    {
      name: "Pricing",
      url: "/pricing",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Our Clients",
      url: "/our-clients",
    },
  ];

  return (
    <header>
      <Container>
        <Box display="flex" gap={2} justifyContent="space-between" py={2.5}>
          <RouterLink to={"/"}>
            <img src={logo} alt="logo" />
          </RouterLink>

          <Box display="flex" gap={5}>
            <nav>
              <ul>
                <Box display="flex" justifyContent="flex-end" gap={5}>
                  {navItems.map((item) => (
                    <NavLink to={item.url}>
                      <li key={item.name}>{item.name}</li>
                    </NavLink>
                  ))}
                </Box>
              </ul>
            </nav>
            <RouterLink to="/get-started">
              <Button variant="contained">Get Started</Button>
            </RouterLink>
          </Box>
        </Box>
      </Container>
    </header>
  );
}

export default Header;
