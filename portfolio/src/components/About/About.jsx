import React from "react";
import { Box, Typography } from "@mui/material";
import Scroll from "../Navbar/Scroll";
import sunnyAZ from "../../images/sunnyAZ.png";
import AFBMT from "../../images/AFBMT.png";
import WFH from "../../images/WFH.png";
import code from "../../images/code.png";

const story = {
  "Growing Up": [
    sunnyAZ,
    `in the sunny valley of Arizona, I moved around quite a bit throughout the state and learned to be adaptable. 
    I always knew I wanted to see more of the world. I always had a curious mind and a love for learning about the complexities of the world. 
    I was interested in video games and technology from an early age, and I especially liked the kind of games involving puzzles and challenges, 
    like the Legend of Zelda series. I was the one who helped plug things in and set things up, from TVs and speakers to phones and computers. 
    In middle school I had my first computers lab, and I remember being hooked on the typing games where you would shoot asteroids by typing the 
    words on them as quick as you can. This was also around the time MySpace was popular and I had my first experience customizing a website.
    In high school I played football, ran track, sang in the school choir, and participated in Air Force Junior ROTC. 
    I enjoyed the feeling of being a part of something greater than myself and the cameraderie of a team.`,
  ],
  "After High School": [
    AFBMT,
    `I knew I wanted to travel and gain life and work experience, so piggy backing off of my JROTC experience, I joined the Air Force. 
    I was fortunate enough to be stationed overseas in Okinawa Japan, where I discovered my love for learning languages and cultures 
    and started learning Japanese. 
    I was employed as a Human Resource Manager, which I enjoyed because it gave me the opportunity to focus on personal and professional development, 
    and I earned my Associates Degree in Human Resource Management while working in the Customer Service department. 
    I enjoyed helping people with career readiness and planning, and digging through military regulations to find specific answers, 
    as well as updating and maintaining the personnel database. 
    I graduated at the top of my class in Airman Leadership School, earning the Levitow award which is reserved for the top graduate 
    with regards to leadership, academics, and physical fitness. 
    I was promoted and selected for duty in a special unit, the Contingency Response Unit, which made me the supervisor of a customer support section 
    reporting to the unit commander in a deployment ready unit who's mission was to establish airfield operations in remote locations. 
    I enjoyed having a greater level of autonomy and responsibility, even though it felt like I was thrown into the fire, particularly since I had no
    deployment experience and my job in theatre was quite different than the job I was doing at home with alot more support.
    I deployed to Iraq in support of operation Enduring Freedom on the doorstep of the fight against ISIS in Mosul. Despite the challenges 
    of being the only member in my career field with limited experience and resources, it was a good experience. Of course, an overnight layover in Spain
    didn't hurt. When I returned home, I felt that I had achieved the things I set out for in my Air Force career, 
    and I wanted a little more freedom and flexibility to do something that aligned with my passions.`,
  ],
  "The Pandemic": [
    WFH,
    `coincided with my departure from the Air Force, and while I was looking to get into a new career, work from home jobs were all the rage
    and coding bootcamps were being advertised incessantly. I remembered taking some JavaScript lessons on Codecademy in my spare time on Okinawa,
    and eventually applied to Sabio School of Software Engineering where I learned fullstack web development. I discovered a true passion for programming, 
    which felt like the combination of the technical aspects I liked about my previous career, combined with the joy of
    learning new languages, problem solving, and the ability to flex my creative muscles.`,
  ],
  Continuing: [
    code,
    `my software development journey I joined the Cook Systems FastTrack'D program 
    to enhance my programming skills and learn new tools, 
    and put myself forward as a strong candidate in the job market. 
    The FastTrack'D program encouraged me to embody my role as a professional software developer 
    who can bring value to any organizaiton with a thorough understanding of industry best practices and how to utilize my strengths, 
    superpowers as we call them in FT, and evaluate the strengths of my team. I'm continuing to grow and learn as a developer every day,  
    and I can't wait to see where my software engineering journey takes me next!`,
  ],
};

const About = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          margin: "auto",
          width: "85%",
        }}
      >
        <div
          style={{
            bottom: 0,
            left: 0,
            width: "100%",
            height: "100%",
            padding: "50px 0",
            textAlign: "center",
            color: "rgb(30,233,121)",
            fontSize: "28px",
            lineHeight: 1.3,
          }}
        >
          <Scroll />
          {Object.entries(story).map(([title, [image, text]]) => (
            <>
              <Typography sx={{ fontFamily: "Consolas", fontSize: 22 }}>
                <div key={title}>
                  <img
                    src={image}
                    alt=""
                    style={{ marginTop: "20px", height: "100%", width: "100%" }}
                  />
                  <h2>{title}</h2>
                  <p>{text}</p>
                </div>
              </Typography>
            </>
          ))}
          <Box sx={{ my: "150px" }}>
            <h2>Thanks For Reading!</h2>
          </Box>
        </div>
      </Box>
    </>
  );
};

export default About;
