import { FC, ReactElement } from "react";
// import dayjs, { Dayjs } from 'dayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { IdateField } from "./interfaces/IdateField";
import  PropTypes  from "prop-types";

export const DateField: FC<IdateField> = ({onChange=(date) =>console.log(date), value=null, disabled=false}): ReactElement => {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Pick Data"
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
    </LocalizationProvider>
  );
};
DateField.propTypes = {
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    disabled: PropTypes.bool
}