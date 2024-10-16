import React from "react";
import { FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      {/* Wave layers moved above the footer */}
      <div className="wave" id="wave1"></div>
      <div className="wave" id="wave2"></div>
      <div className="wave" id="wave3"></div>
      <div className="wave" id="wave4"></div>

      <footer>
        <div className="footer-content">
          <div className="footer-text">
            <h2>Designauts IIT Mandi</h2>
            <p>Thinking made Visual</p>
          </div>
          <div className="footer-subscribe">
            <h3>Subscribe for Updates</h3>
            <form action="#">
              <input
                type="email"
                placeholder="Enter your email"
                autoComplete="off"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" aria-label="Follow us on Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Connect with us on LinkedIn">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="Join us on Discord">
              <FaDiscord />
            </a>
          </div>
        </div>
        <p className="footer-note">&copy; 2024 Designauts IIT Mandi. All Rights Reserved.</p>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  background: white;
  padding-top: 20px; /* Reduced top padding */
  color: #000;
  font-family: "Poppins", sans-serif;

  footer {
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 10;
    background-color: white;
  }

  .footer-content {
    display: flex;
    flex-direction: row; /* Adjusted layout to make sections adjacent */
    justify-content: space-between;
    align-items: center;
    text-align: left;
    width: 100%;
    max-width: 800px; /* Restrict the max width */
    margin-bottom: 20px;
  }

  .footer-text h2 {
    font-size: 1.5rem; /* Adjusted font size */
    margin-bottom: 5px;
  }

  .footer-text p {
    font-size: 1rem;
    font-weight: 300;
  }

  .footer-subscribe h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  .footer-subscribe form {
    display: flex;
    gap: 10px;
  }

  .footer-subscribe input {
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #333;
    outline: none;
    width: 180px;
    font-size: 0.9rem;
  }

  .footer-subscribe button {
    background-color: #0073e6;
    color: white;
    padding: 8px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .footer-subscribe button:hover {
    background-color: #005bb5;
  }

  .footer-social {
    margin-bottom: 20px;
    text-align: center;
  }

  .footer-social h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  .social-icons {
    display: flex;
    gap: 20px;
    justify-content: center;
  }

  .social-icons a {
    font-size: 1.8rem;
    color: #333;
    transition: transform 0.3s;
  }

  .social-icons a:hover {
    transform: translateY(-5px);
  }

  .footer-note {
    margin-top: 10px;
    font-size: 0.85rem;
    opacity: 0.75;
  }

  /* Adding wave effects */
  .wave {
    position: absolute;
    top: -60px;
    width: 100%;
    height: 60px;
    background: url("https://vitalflow.com.ar/img/anim-onda.png");
    background-size: 1000px 60px;
  }

  .wave#wave1 {
    z-index: 1000;
    opacity: 1;
    bottom: 0;
    animation: animateWaves 4s linear infinite;
  }

  .wave#wave2 {
    z-index: 999;
    opacity: 0.5;
    bottom: 10px;
    animation: animate 4s linear infinite !important;
  }

  .wave#wave3 {
    z-index: 1000;
    opacity: 0.2;
    bottom: 15px;
    animation: animateWaves 3s linear infinite;
  }

  .wave#wave4 {
    z-index: 999;
    opacity: 0.7;
    bottom: 20px;
    animation: animate 3s linear infinite;
  }

  @keyframes animateWaves {
    0% {
      background-position-x: 1000px;
    }
    100% {
      background-position-x: 0px;
    }
  }

  @keyframes animate {
    0% {
      background-position-x: -1000px;
    }
    100% {
      background-position-x: 0px;
    }
  }
`;

export default Footer;