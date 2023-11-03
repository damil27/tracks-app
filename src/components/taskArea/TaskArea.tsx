import { Grid } from "@mui/material";
import React, { FC, ReactElement } from "react";

export const TaskArea: FC = (): ReactElement => {
  return (
    <Grid
      item
      xs={12}
      md={8}
      px={4}
      sx={{
        // height: "100vh",
position:"relative",
        width: "100%",
        display: "flex",

        flexDirection: "column",
      }}
    >
      {" "}
      <h2>
        Main content area Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Labore veritatis velit, libero voluptate quo deleniti, aut,
        dolorem tempore tenetur amet nulla fugiat dolore!{" "}
      </h2>
    </Grid>
  );
};
