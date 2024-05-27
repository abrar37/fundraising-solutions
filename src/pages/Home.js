import React from "react";
import Layout from "../components/Layout";
import "./pages.css";

function Home() {
  return (
    <Layout>
      <div className="banner-section">
        <div className="container mx-auto">
          <div className="flex flex-row">
            <div className="banner-left">
              <h1>Fundraising Made Easy!</h1>
              <p>
                Let us manage your next fundraising campaign with our
                Canada-wide online 50/50s or Chase the Ace software. Supporters
                can play from anywhere in the country.
              </p>
              <button>Start Today!</button>
            </div>
            <div className="banner-right">
              <div className="banner-card">
                <div>
                  <p>Current 50/50 Jackpot</p>
                  <p>
                    $<span>70</span>
                  </p>
                </div>
                <h2>The Lotto Factory Six Nations Veterans Association</h2>
                <div>
                  <div>
                    <p>Funds Raised till now</p>
                    <p>$4,080,769</p>
                  </div>
                  <button>Buy Tickets</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
