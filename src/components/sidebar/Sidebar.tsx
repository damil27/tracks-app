import React, { FC, ReactElement } from "react";
import { Grid, Stack } from "@mui/material";
import { Profile } from "../profile/Profile";
import { CreateTask } from "../createTasks/CreateTasks";
import { TitleField } from "../createTasks/_titleField";
import { DescriptionField } from "../createTasks/_decriptionField";
import { DateField } from "../createTasks/_dateField";
import { SelectField } from "../createTasks/_selectField";
import { Status } from "../createTasks/enum/status";
import { Priority } from "../createTasks/enum/priority";

export const Sidebar: FC = (): ReactElement => {
  return (
    <Grid
      item
      md={4}
      xs={12}
      sx={{
        height: "100vh",
        backgroundColor: "background.paper",
        // position: "fixed",
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
      <Stack
        spacing={2}
        sx={{
          width: "100%",
        }}
      >
        <TitleField onChange={(e) => console.log(e.target.value)} />
        <DescriptionField onChange={(e) => console.log(e.target.value)} />
        <DateField />
      </Stack>
      <Stack sx={{ width: "100%" }} spacing={2} direction={"row"}>
        <SelectField
          label="Status"
          name="status"
          items={[
            { value: Status.completed, label: Status.completed.toUpperCase() },
            {
              value: Status.inProgress,
              label: Status.inProgress.toLocaleUpperCase(),
            },
            { value: Status.todo, label: Status.todo.toUpperCase() },
          ]}
        />
        <SelectField
          label="Priority"
          name="priority"
          items={[
            {
              value: Priority.high,
              label: Priority.high.toLocaleUpperCase(),
            },
            { value: Priority.normal, label: Priority.normal.toUpperCase() },
            { value: Priority.low, label: Priority.low.toUpperCase() },
          ]}
        />
      </Stack>
    </Grid>
  );
};
