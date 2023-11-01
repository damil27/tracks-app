import React, { FC, ReactElement } from "react";
import { Grid } from "@mui/material";
import { Sidebar } from "../components/sidebar/Sidebar";
import { TaskArea } from "../components/taskArea/TaskArea";

export const Dashboard: FC = (): ReactElement => {
  return (
    <div>
      <Grid container minHeight="100vh" spacing={2} p={0} m={0}>
        <TaskArea />
        <Sidebar />
      </Grid>
    </div>
  );
};
