import "./Login.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
  Typography,
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
    const name = event.target.name;
    const value = event.target.value;
    let other = "password";
    let otherValue = login.password;
    if (name === "password") {
      other = "username";
      otherValue = login.username;
    }
    setLogin({
      [name]: value,
      [other]: otherValue,
    });
  }

  function handleSubmit() {
    setLogin({
      username: login.username,
      password: "",
    });
    console.log("who is calling this????");
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
