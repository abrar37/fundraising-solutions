import logo from "../../assets/logo-dark.svg";
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
      <div className="container mx-auto">
        <div className="flex flex-row justify-between">
          <RouterLink to={"/"}>
            <img src={logo} alt="logo" />
          </RouterLink>

          <div className="flex flex-row">
            <nav>
              <ul className="flex flex-row">
                {navItems.map((item) => (
                  <NavLink to={item.url}>
                    <li key={item.name}>{item.name}</li>
                  </NavLink>
                ))}
              </ul>
            </nav>
            <RouterLink to="/get-started">
              <button variant="contained">Get Started</button>
            </RouterLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
