import { Typography } from "@mui/material";
import React from "react";
import restaurants from "../../assets/restaurants.jpg";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about">
      <div
        className="about-top"
        style={{ backgroundImage: `url(${restaurants})` }}
      ></div>
      <div className="about-bottom">
        <Typography variant="h2" className="about-us">
          About Us
        </Typography>
        <Typography className="about-body" variant="body1">
          Athens Eats is a website in which you can find and review all of
          your favorite Athens restaurants! Please come and leave a review on
          any of the restaurants on our site. First, you will have to registar
          an account in order to rate and leave a review. If you do not see your
          favorite restaurant, be sure to make a wishlist entry so we can add it
          to the site. Thanks for visiting our website. This website has been made
          by Eileen Catoe, Chioma Nwogor, and Vince Grano.
        </Typography>
      </div>
    </div>
  );
}

export default AboutUs;
