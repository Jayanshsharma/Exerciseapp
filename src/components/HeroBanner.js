import React from "react";
import { Box, Stack, Typography,Button } from "@mui/material";
import HeroBannerImage from "./images/banner.png"

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: "212px", xs: "70px" },ml:{sm:"50px"}}} position="relative" p="20px">
      <Typography
        style={{ color: "#FF2625", fontWeight: "600", fontSize: "26px" }}
      >
        Fitness Club
      </Typography>
      <Typography fontWeight="700" sx={{fontSize:{lg:"44px", xs:"40px"}}}>
        <b>Nothing Great</b> was ever <br></br> achieved with <b>Partial Effort</b>
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={3}>
        Check Out the most effective Exercises
      </Typography>
      <Button variant="contained" color="error" href="#exercises" sx={{backgroundColor:"#FF2625",padding:"15px"}}>Explore Exercises</Button>
      <Typography fontWeight={600} color="#ff2625" sx={{opacity:0.1, display:{lg:"block",xs:"none"}}}
      fontSize="160px">
        Exercises
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
