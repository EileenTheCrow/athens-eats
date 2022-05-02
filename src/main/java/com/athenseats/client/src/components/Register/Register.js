import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import "./Register.css";

export function Register() {
  const [register, setRegister] = useState([]);

  useEffect(() => {
    setRegister({
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      firstName: "",
      lastName: "",
    });
  }, []);

  function handleRegisterInfo(event) {
    setRegister({
      ...register,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  function handleSubmit() {
    setRegister({
      username: register.username,
      password: "",
    });
  }

  return (
    <div className="register-container">
      <Card className="register-card">
        <CardHeader className="register-header" title="Register" />
        <CardContent className="register-card-content">
          <TextField
            className="register-field"
            name="username"
            label="Username"
            value={register.username || ""}
            onChange={handleRegisterInfo}
          />
          <TextField
            className="register-field"
            type="password"
            name="password"
            label="Password"
            value={register.password || ""}
            onChange={handleRegisterInfo}
          />
          <TextField
            className="register-field"
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            value={register.confirmPassword || ""}
            onChange={handleRegisterInfo}
          />
          <TextField
            className="register-field"
            name="email"
            label="Email Address"
            value={register.email || ""}
            onChange={handleRegisterInfo}
          />
          <TextField
            className="register-field"
            name="firstName"
            label="First Name"
            value={register.firstName || ""}
            onChange={handleRegisterInfo}
          />
          <TextField
            name="lastName"
            label="Last Name"
            value={register.lastName || ""}
            onChange={handleRegisterInfo}
          />
        </CardContent>
        <CardActions className="register-button">
          <Button size="small" variant="contained" onClick={handleSubmit}>
            register
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Register;
