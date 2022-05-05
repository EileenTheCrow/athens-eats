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
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";

export function Login(props) {
  const [login, setLogin] = useState([]);
  const [errors, setErrors] = useState([]);
  const [errorText, setErrorText] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    setLogin({
      email: "",
      password: "",
    });

    setErrors({
      email: false,
      password: false,
    });

    setErrorText({
      email: "",
      password: "",
    });
  }, []);

  function handleLoginInfo(event) {
    setLogin({
      ...login,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  function flagError(name, message) {
    setErrorText((errorText) => ({
      ...errorText,
      [name]: message,
    }));
    setErrors((errors) => ({
      ...errors,
      [name]: true,
    }));
    return false;
  }

  async function handleSubmit() {
    try {
      const res = await fetch(
        `http://localhost:8080/api/users/email?email=${login.email}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();
      if (!bcrypt.compareSync(login.password, data.password)) {
        return flagError("password", "Invalid Credentials. Try again.");
      } else if (data.email === login.email) {
        localStorage.setItem("userId", data.userId);
        props.setLoggedIn(true);
        navigate("/", { replace: true });
      }
    } catch (error) {
      return flagError("password", "Invalid Credentials. Try again.");
    }
  }

  return (
    <div className="login-container">
      <Card className="login-card">
        <CardHeader className="login-header" title="Login" />
        <CardContent className="login-card-content">
          <TextField
            className="login-username"
            name="email"
            label="email"
            value={login.email || ""}
            onChange={handleLoginInfo}
            error={errors.email}
            helperText={errorText.email}
          >
            Email
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
