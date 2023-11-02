import React, { FC, ReactElement } from "react"
import { Grid, Stack } from "@mui/material";
import { Profile } from "../profile/Profile";
import { CreateTask } from "../createTasks/CreateTasks";
import { TitleField } from "../createTasks/_titleField";
import { DescriptionField } from "../createTasks/_decriptionField";
import { DateField } from "../createTasks/_dateField";

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
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {" "}
        <Profile name="Damilare" />
        <CreateTask />
        <Stack spacing={2} sx={{
          width: "100%"
        }} >
          <TitleField onChange={e => console.log(e.target.value)}/>
          <DescriptionField onChange={e => console.log(e.target.value)} />
          <DateField />
        </Stack>
      </Grid>
    );
}