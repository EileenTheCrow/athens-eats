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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque velit
        </Typography>
      </div>
    </div>
  );
}

export default AboutUs;
