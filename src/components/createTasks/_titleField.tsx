import React, { FC, ReactElement } from 'react'
import { TextField } from '@mui/material'
import { ITextField } from './interfaces/ITextField'
import PropTypes from "prop-types"

export const TitleField: FC<ITextField> = (props): ReactElement => {
  const { onChange= (e) =>console.log(e), disabled = false, value="" } = props;
  return (
    <TextField
      id="title"
      onChange={onChange}
      name="title"
      label="Create Title"
      disabled={disabled}
      fullWidth
      value={value}
      placeholder="Title"
    />
  );
};

TitleField.propTypes = {
    onChange: PropTypes.func,
    disabled: PropTypes.bool
}