import React from "react";
import logo from './../../assets/logo-light.svg'

function Footer() {
  return (
    <footer>
      <div className="container mx-auto">
        <div>
          <div>
            <div>
              <img src={logo} alt=""/>
              <p>© 2023 TLF. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
