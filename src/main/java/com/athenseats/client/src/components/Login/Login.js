import "./Login.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";

export function Login() {
  const [login, setLogin] = useState([]);

  useEffect(() => {
    setLogin({
      username: "",
      password: "",
    });
  }, []);

  function handleLoginInfo(event) {
    setLogin({
      ...login,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  function handleSubmit() {
    setLogin({
      username: login.username,
      password: "",
    });
  }

  return (
    <div className="login-container">
      <Card className="login-card">
        <CardHeader className="login-header" title="Login" />
        <CardContent className="login-card-content">
          <TextField
            className="login-username"
            name="username"
            label="Username"
            value={login.username || ""}
            onChange={handleLoginInfo}
          >
            Username
          </TextField>
          <br />
          <TextField
            className="login-password"
            type="password"
            name="password"
            label="Password"
            value={login.password || ""}
            onChange={handleLoginInfo}
          >
            Password
          </TextField>
        </CardContent>
        <CardActions className="login-button">
          <Button size="small" variant="contained" onClick={handleSubmit}>
            Login
          </Button>
          <Button size="small" variant="contained" href="/register">
            Register
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Login;
