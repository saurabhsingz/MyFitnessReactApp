import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo2.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      p="15px"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
    >
      <img src={Logo} alt="logo" style={{ width: "50px", height: "50px" }} />
      <Typography
        variant="h5"
        sx={{ fontSize: { lg: "28px", xs: "20px" } }}
        mt="5px"
      >
        {"\u00A9 "}Saurabh
      </Typography>
    </Stack>
    {/* <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="5px"
      textAlign="center"
      pb="20px"
    >
      Saurabh
    </Typography> */}
  </Box>
);

export default Footer;
