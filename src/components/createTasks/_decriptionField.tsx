import { TextField } from "@mui/material";
import { FC, ReactElement } from "react";
import { ITextField } from "./interfaces/ITextField";
import PropTypes from 'prop-types'

export const DescriptionField: FC<ITextField> = ({
  onChange = (e) => console.log(e),
  disabled = false,
}): ReactElement => {
  return (
    <TextField
      id="Description"
      name="Description"
      label="Task Description"
      placeholder="Task Description"
      multiline
      rows={4}
      disabled={disabled}
      onChange={onChange}
      fullWidth
    />
  );
};

DescriptionField.propTypes = {
    onChange: PropTypes.func,
    disabled: PropTypes.bool
}