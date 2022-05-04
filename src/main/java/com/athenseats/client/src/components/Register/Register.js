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
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    setRegister({
      password: "",
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

  function handleConfirmPassword(event) {
    setConfirmPassword(event.currentTarget.value);
  }

  function validate() {}

  async function handleSubmit() {
    validate();
    await new Promise(function (resolve, reject) {
      fetch("http://localhost:8080/api/users/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(register),
      })
        .then((response) => {
          response.json().then((json) => {
            resolve(json);
          });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  return (
    <div className="register-container">
      <Card className="register-card">
        <CardHeader className="register-header" title="Register" />
        <CardContent className="register-card-content">
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
            className="register-field"
            name="lastName"
            label="Last Name"
            value={register.lastName || ""}
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
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            value={confirmPassword || ""}
            onChange={handleConfirmPassword}
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
