import React from "react";
import "./About.css";
import { Box } from "@mui/material";
import Scroll from "../Navbar/Scroll";

const story = {
  "Growing Up":
    "in the sunny valley of Arizona, I moved around quite a bit throughout the state. Although Phoenix has gotten bigger in recent years, I always knew I wanted to see more of the world. I was a curious child, who asked questions that seeked to get answers beyond the surface level. I was interested in video games and technology from an early age, and I especially liked the kind of games involving puzzles and challenges, like the Legend of Zelda series. In high school I played football, ran track, and participated in Air Force Junior ROTC. I enjoyed the feeling of being a part of something greater than myself and the cameraderie of a team.",
  "After High School":
    "i knew I wanted to travel and gain life and work experience, so piggy backing off of my JROTC experience, I joined the Air Force. I was fortunate enough to be stationed overseas in Okinawa Japan, where I discovered my love for learning languages and cultures and started learning Japanese, the first of many languages I plan to aquire. I was employed as a Human Resource Manager, which I enjoyed because it gave me the opportunity to focus on personal and professional development, and I eanrned my Associates Degree in Human Resource Management while working in the Customer Service department. I enjoyed helping people with career readiness and planning, and digging through military regulations to find specific answers, as well as updating and maintaining the personnel database. I graduated at the top of my class in Airman Leadership School, earning the Levitow award which is reserved for the top graduate with regards to leadership, academics, and physical fitness. I was promoted and selected for duty in a special unit, the Contingency Response Unit, which made me the supervisor of a customer support section reporting to the unit commander in a deployment ready unit who's mission was to establish airfield operations in remote locations. I deployed to Iraq in support of operation Enduring Freedom on the doorstep of the fight against ISIS in Mosul. When I returned home, I felt that I had achieved the things I set out for in my Air Force career, and I wanted a little more freedom and flexibility to do something that aligned with my passions.",
  "The Pandemic":
    "coincided with my departure from the Air Force, and with all the talk of working from home I started looking into coding bootcamps and eventually found Sabio School of Software Engineering, where I discovered my passion for programming, which felt like the combination of the technical aspects I liked about my previous career, the joy of learning new languages and finding solutions to problems, and the ability to flex my creative muscles.",
  "I joined FastTrack'D":
    "to enhance my programming skills and learn new tools, and put myself forward as a strong candidate in the job market. The FastTrack'D program honestly surpassed my expectations. As they say, it is not a bootcamp but a masterclass in becoming an enterprise developer, and while the projects I completed were challenging and the material informative, the real value for me came in the career readiness training, which encouraged me to embody my role as a professional software developer who can bring value to any organizaiton with a thorough understanding of the industry and how to utilize my strengths, superpowers as we call them in FT, and evaluate the strengths of my team and how to best operate in an enterprise environment. I can't wait to see where my software engineering journey takes me next!",
};

const About = () => {
  return (
    <>
      <Box className="crawl-container">
        <div className="crawl-text">
          <Scroll />
          {Object.entries(story).map(([title, text]) => (
            <>
              <div key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </>
          ))}
          <Box sx={{ my: 20 }}>
            <h1>Thanks For Reading!</h1>
          </Box>
        </div>
      </Box>
    </>
  );
};

export default About;
