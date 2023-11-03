import React, { FC, ReactElement } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

interface Iprofile {
  name?: string;
}

export const Profile: FC<Iprofile> = ({ name = "User" }): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        sx={{
          backgroundColor: "primary.main",
          height: "96px",
          width: "96px",
          marginBottom: "12px",
        }}
      >
        <Typography variant="h4" color="text.primary">
          {" "}
          {name.substring(0, 2)}
        </Typography>
      </Avatar>
      <Typography variant="h6" color="text.primary">
        {" "}
        Welcome, {name}
      </Typography>
      <Typography variant="body1" color="text.primary"  sx={{display: {xs: "none", md:'block'}}}>
        {" "}
        This is your personal tracks Dashboard
      </Typography>
    </Box>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
};
