import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate  } from 'react-router-dom';
import "./login.css";

const Login = () => {

  let navigate = useNavigate(); 
  const handleRegistration = () => {
    // props.history.push('/login');
    navigate('/registration');
  }
  return (
    <div className="login-container">
      <Stack direction="column" alignItems="center" spacing={1}>
        <TextField id="outlined-basic" label="User Name" variant="outlined" />
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
          <Button variant="contained" size="medium" onClick={handleRegistration}>
            Register
          </Button>
        </Stack>
      </Stack>
    </div>
  );
}

export default Login;
