import { FC, ReactElement } from "react";
import { Box, Button, Switch, FormControlLabel, Typography } from "@mui/material";
import { Status } from "../createTasks/enum/status";
import { ItaskFooter } from "./Interface/ItaskFooter";

export const TaskFooter: FC <ItaskFooter>= ({onSwitchChecked = e =>console.log(e), onClick= e =>console.log(e)}): ReactElement => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "20px",
      }}
    >
          <FormControlLabel control={<Switch color="warning" onChange={e => onSwitchChecked(e)} />} label={Status.todo}  />
          <Button variant="outlined" color="success" size="small"  onClick={e => onClick(e)} > 
              <Typography sx={{
                  color: "#fff",
                  fontSize: "12px"
              }} >Mark Complete</Typography>
          </Button>
    </Box>
  );
};
