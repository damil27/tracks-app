import { FC, ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import { ItaskDescription } from "./Interface/ItaskDescription";
import PropTypes from "prop-types"

export const TaskDescription: FC <ItaskDescription> = ({
  description = "lorem ipsom amin loonnf edi ",
}): ReactElement => {

  return (
    <Box width="100%">
      <Typography> {description} </Typography>
    </Box>
  );
};

TaskDescription.propTypes = {
  description: PropTypes.string
}
