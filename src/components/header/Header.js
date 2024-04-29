import logo from '../../assets/header-logo.svg';
import { Button, Container, Link, Menu, MenuItem } from '@mui/material'
import React from 'react'

function Header() {
    const navItems = [
        {
            name: "Fundraising Products",
            url: "fundraising-products"
        },
        {
            name: "Pricing",
            url: "pricing"
        },
        {
            name: "About",
            url: "about"
        },
        {
            name: "Our Clients",
            url: "our-clients"
        }
    ]

  return (
    <Container>
        <header>
            <Link href="/">
                <img src={logo} alt="logo"/>
            </Link>

            <nav>
                <ul>
                    {navItems.map((navItem)=> (
                        <Link href={navItem.url}>
                            <li key={navItem.url}>{navItem.name}</li>
                        </Link>
                    ) )}
                </ul>
            </nav>

        <Menu>
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
        </Menu>
            
            <Button variant="contained">Get Started</Button>

        </header>
    </Container>
  )
}

export default Header