import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import "./registration.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Bajaj Allianz General Insurance Co.",
  "Bharti AXA General Insurance Co.",
  "Cholamandalam MS General Insurance Co.",
  "Future Generali India Insurance Co.",
  "HDFC ERGO General Insurance Co.",
  "ICICI Lombard General Insurance Co.",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Registration = (props) => {
  const [value, setValue] = useState(dayjs("2014-08-18T21:11:54"));
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  let navigate = useNavigate();

  const handlePolicyChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleRegistration = () => {
    // props.history.push('/login');
    navigate("/login");
  };

  return (
    <div className="registration-container">
      <div className="form">
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 1 }}
          style={{ marginTop: "30px" }}
        >
          <Grid item lg={6} md={4} style={{ paddingLeft: "30px" }}>
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item lg={6} md={4} style={{ paddingLeft: "30px" }}>
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item lg={6} md={4} style={{ paddingLeft: "30px" }}>
            <div className="dob">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  label="Date of Birth"
                  inputFormat="MM/DD/YYYY"
                  value={value}
                  size="small"
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
          </Grid>
          <Grid item lg={6} md={4} style={{ paddingLeft: "30px" }}>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item lg={6} md={4} style={{ paddingLeft: "30px" }}>
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              size="small"
            />
          </Grid>
          <Grid item lg={6} md={4} style={{ paddingLeft: "30px" }}>
            <TextField
              id="outlined-password-input"
              label="Confirm Password"
              type="confirm password"
              size="small"
            />
          </Grid>
          <Grid item lg={6} md={4} style={{ paddingLeft: "30px" }}>
            <TextField
              id="outlined-password-input"
              label="Email"
              type="email"
              size="small"
            />
          </Grid>
          <Grid item lg={6} md={4} style={{ paddingLeft: "30px" }}>
            <TextField
              id="outlined-password-input"
              label="Phone Number"
              type="phone number"
              size="small"
            />
          </Grid>
          <Grid
            item
            lg={11}
            md={12}
            style={{ paddingLeft: "30px", height: "100px" }}
          >
            <div className="address">
              <TextField
                id="outlined-multiline-static"
                label="Address"
                multiline
                rows={3}
                defaultValue=""
                fullWidth
              />
            </div>
          </Grid>
          <Grid item lg={12} md={4} style={{ paddingLeft: "30px" }}>
            <div className="policy">
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-chip-label">Policy</InputLabel>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  value={personName}
                  onChange={handlePolicyChange}
                  input={
                    <OutlinedInput id="select-multiple-chip" label="Policy" />
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </Grid>
        </Grid>
        <Grid item lg={12} md={4} style={{ paddingLeft: "30px" }}>
          <Button
            variant="contained"
            size="medium"
            onClick={handleRegistration}
          >
            Register
          </Button>
        </Grid>
      </div>
    </div>
  );
};

export default Registration;
