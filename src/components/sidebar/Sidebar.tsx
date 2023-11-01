import React, { FC, ReactElement } from "react"
import { Grid } from "@mui/material";
import { Profile } from "../profile/Profile";


export const Sidebar: FC = (): ReactElement => {
    return (
      <Grid
        item
        md={4}
        xs={4}
        sx={{
          height: "100vh",
          backgroundColor: "background.paper",
          position: "fixed",
          right: 0,
          top: 0,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        alignItems:"center",
          flexDirection: "column",
        }}
      >
        {" "}
     <Profile name="Damilare" />
      </Grid>
    );
}