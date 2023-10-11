import React from "react";
import { Link } from "react-router-dom";
import { Stack, colors } from "@mui/material";
import Logo from "./images/Logo.png";

const Navbar = () => {
  return (
    <div>
      <Stack direction="row" justifyContent="space-around" sx={{gap:{sm:"122px",xs:"40px"}, mt:{sm:"32px",xs:"20px"},justifyContent:"none"}} px="20px">
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            style={{ width: "48px", height: "48px", margin: "0px 20px" }}
          />
        </Link>
        <Stack direction="row" gap="40px" fontSize="28px"         alignItems="flex-end">
        <Link to="/" style={{textDecoration: "none", color: "#3A1212", fontWeight:"550" }}>Home</Link>
          <a
            href="#exercises"
            style={{ textDecoration: "none", color: "#3A1212",fontWeight:"550" }}
          >
            Exercises
          </a>
        </Stack>
      </Stack>
    </div>
  );
};

export default Navbar;