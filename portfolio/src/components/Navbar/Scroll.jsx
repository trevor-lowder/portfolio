import { useState } from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { IconButton } from "@mui/material";
const Scroll = () => {
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  window.addEventListener("scroll", handleScroll);
  return (
    <>
      {showScroll && (
        <IconButton
          
          className="scroll-to-top"
          onClick={handleClick}
          sx={{
            zIndex: 2,
            position: "fixed",
            bottom: "2vh",
            backgroundColor: "black",
            "&:hover, &.Mui-focusVisible": {
              transition: "0.3s",
              color: "rgb(30, 233, 121)",
              backgroundColor: "black",
            },
            right: "5%",
          }}
        >
          <ArrowCircleUpIcon fontSize='large' color="primary"/>
        </IconButton>
      )}
    </>
  );
};

export default Scroll;
