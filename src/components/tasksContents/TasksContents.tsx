import { FC, ReactElement } from "react";
import { Box } from "@mui/material";
import { TaskHeader } from "./_taskHeader";
import { TaskDescription } from "./_taskDescription";
import { TaskFooter } from "./_taskFooter";
import { Itask } from "./Interface/Itask";

import { Priority } from "../createTasks/enum/priority";
import PropTypes from 'prop-types'

export const TasksContent: FC<Itask> = ({
  priority = Priority.low,

  date = new Date(),
  description = "lorem ipsonm ami els edi",
  title = "Default track title",
  onSwitchChecked = (e) => console.log(e),
  onClick = (e) => console.log(e),
}): ReactElement => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        border="1px solid"
        borderColor={
          priority === Priority.high
            ? "error.light"
            : priority === Priority.normal
            ? "info.light"
            : "grey.800"
        }
        p={2}
        width="100%"
        borderRadius={2}
        justifyContent={"flex-start"}
        mb={3}
      >
        <TaskHeader title={title} date={date} />
        <TaskDescription description={description} />
        <TaskFooter onClick={onClick} onSwitchChecked={onSwitchChecked} />
      </Box>
    </>
  );
};

TasksContent.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    onClick: PropTypes.func,
    onSwitchChecked: PropTypes.func,
    priority: PropTypes.string,
    status: PropTypes.string

}


