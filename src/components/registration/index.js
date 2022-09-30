import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./registration.css";

const Registration = () => {
  const [value, setValue] = useState(dayjs("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <div className="registration-container">
      <Stack direction="column" alignItems="center" spacing={1}>
        <TextField id="outlined-basic" label="First Name" variant="outlined" />
        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            label="Date of Birth"
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Stack direction="row" alignItems="center" spacing={1}>
          <Button variant="contained" size="medium">
            Login
          </Button>
          <Button variant="contained" size="medium">
            Register
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};

export default Registration;
