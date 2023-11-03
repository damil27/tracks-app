import React, { FC, ReactElement } from "react";
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { IselectField } from "./interfaces/IselectField";
import PropTypes from "prop-types"

export const SelectField: FC<IselectField> = (props): ReactElement => {
  const {
    value = "",
    label = "Status",
      disabled = false,
    name="status",
    items = [
      { value: "", label: "Add Item" },
      { value: "", label: "Add two" },
    ],
    onChange = (e: SelectChangeEvent) => console.log(e),
  } = props;
  return (
    <Box sx={{ width: "100%" }} pt={2}>
      <FormControl fullWidth>
        <InputLabel id={name + "id"}> {label} </InputLabel>
        <Select
          label={label}
          disabled={disabled}
          id={label}
          name={name}
          labelId={name + "id"}
          value={value}
          onChange={onChange}
        >
          {items.map((item, index) => (
            <MenuItem key={`${item.value} + ${index}`} value={item.value}>
              {" "}
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
SelectField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    disabled: PropTypes.bool, 
    items: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        }).isRequired
    )
}