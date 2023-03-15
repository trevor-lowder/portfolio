import React from "react";
import NavBar from "../Navbar/NavBar";
import "./About.css";
import { Box } from "@mui/material";

const story = {
  "Growing Up":
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias vitae, sit veniam temporibus dignissimos, ad soluta iusto qui illo harum neque nam saepe modi et possimus optio explicabo. Architecto, similique?",
  "My First Career":
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor harum tempora veritatis aliquid nam. Nulla cupiditate possimus laborum libero! Debitis est quo impedit ea quasi amet eligendi deleniti veritatis dignissimos.",
  "The Pandemic":
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis perspiciatis reiciendis ducimus amet quam cum. Necessitatibus aliquam ipsum quia esse magni est atque, nostrum animi aut, exercitationem recusandae quas expedita.",
  "FastTrack'D":
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eligendi dolorem expedita! Atque corrupti pariatur autem excepturi laudantium at! Et praesentium dolores culpa molestiae libero consequuntur temporibus repellendus minima accusamus?",
};

const About = () => {
  return (
    <>
      <NavBar />
      <Box className="crawl-container">
        <div className="crawl-text">
          {Object.entries(story).map(([key, value]) => (
            <>
              <div key={key}>
                <h3>{key}</h3>
                <p>{value}</p>
              </div>
            </>
          ))}
          <Box sx={{ mt: 40 }}>
            <h1>Thanks For Reading!</h1>
          </Box>
        </div>
      </Box>
    </>
  );
};

export default About;
