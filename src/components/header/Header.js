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
      <div>
        <div>
          <RouterLink to={"/"}>
            <img src={logo} alt="logo" />
          </RouterLink>
          <div>
            <nav>
              <ul>
                <div>
                  {navItems.map((item) => (
                    <NavLink to={item.url}>
                      <li key={item.name}>{item.name}</li>
                    </NavLink>
                  ))}
                </div>
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
