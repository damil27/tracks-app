import React, { FC, ReactElement, useState } from "react";
import {
  Grid,
  LinearProgress,
  Stack,
  Box,
  Button,
  Alert,
  AlertTitle,
} from "@mui/material";
import { Profile } from "../profile/Profile";
import { CreateTask } from "../createTasks/CreateTasks";
import { TitleField } from "../createTasks/_titleField";
import { DescriptionField } from "../createTasks/_decriptionField";
import { DateField } from "../createTasks/_dateField";
import { SelectField } from "../createTasks/_selectField";
import { Status } from "../createTasks/enum/status";
import { Priority } from "../createTasks/enum/priority";
import { useMutation } from "@tanstack/react-query";
import { SendApiRequest } from "../util/sendApiRequest";

import { IcreateTask } from "./interface/IcreateTask";

export const Sidebar: FC = (): ReactElement => {
  const [title, setTitle] = useState<string | undefined>("");
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<Date | null>(null);
  const [status, setStatus] = useState<string>(Status.todo);
  const [priority, setPriority] = useState<string>(Priority.normal);

// const createTaskMutation = useMutation<void, Error, Error, unknown>(
//   (data: IcreateTask) => {
//     SendApiRequest("http://localhost:6200/tasks", "POST", data);
//   }
// );

  const createTaskMutation = useMutation<void, Error, IcreateTask, unknown>(
    //@ts-ignore
    async (data: IcreateTask) => 
      await SendApiRequest("http://localhost:6200/tasks", "POST", data)
 
  );

  function createTaskHandler() {
    if (!title || !description || !date) {
      return;
    }

    const newTask: IcreateTask = {
      title,
      description,
      date: date.toString(),
      status,
      priority,
    };

    createTaskMutation.mutate(newTask);
  }

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
      <Alert
        sx={{
          width: "100%",
        }}
        severity="success"
      >
        <AlertTitle>Success</AlertTitle>
        New Task has been successfully created
      </Alert>
      <CreateTask />
      <Stack
        spacing={2}
        sx={{
          width: "100%",
        }}
      >
        <TitleField value={title} onChange={(e) => setTitle(e.target.value)} />
        <DescriptionField
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <DateField value={date} onChange={(date) => setDate(date)} />
      </Stack>
      <Stack sx={{ width: "100%" }} spacing={2} direction={"row"}>
        <SelectField
          label="Status"
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value as string)}
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
          value={priority}
          onChange={(e) => setPriority(e.target.value as string)}
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
      <Box
        mb={2}
        sx={{
          width: "100%",
          marginTop: "10px",
        }}
      >
        <LinearProgress />
      </Box>
      <Button
        onClick={createTaskHandler}
        variant="outlined"
        size="large"
        fullWidth
        sx={{ color: "white" }}
      >
        Create Task
      </Button>
    </Grid>
  );
};
