import React, { FC, ReactElement } from "react";
import { Grid, Box } from "@mui/material";
import dayjs from "dayjs";
import { TaskCounter } from "../taskCounter/taskCounter";
import { Status } from "../createTasks/enum/status";
import { TasksContent } from "../tasksContents/TasksContents";

export const TaskArea: FC = (): ReactElement => {
  const currentDate = dayjs();
  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        // height: "100vh",

        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {" "}
      <Box px={2}>
        <h2>
          Status of you tasks track as on{" "}
          {currentDate.format("dddd, MMMM D YYYY")}
        </h2>
      </Box>
      <Grid
        p={4}
        container
       
      
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width:"100%"
        }}
      >
        <Grid
          xs={12}
          md={8}
          item
          pb={3}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
          }}
        >
          <TaskCounter status={Status.todo} />
          <TaskCounter status={Status.inProgress} />
          <TaskCounter status={Status.completed} />
        </Grid>
        <Grid
          item
          xs={12}
          md={10}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
          }}
        >
          <Box
            sx={{
              paddingBottom: { xs: 2, md: 4 },
            }}
          >
            <TasksContent />
            <TasksContent />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
