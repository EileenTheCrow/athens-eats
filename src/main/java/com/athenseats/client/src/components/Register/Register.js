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
import validator from "validator";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";

export function Register() {
  const [register, setRegister] = useState([]);
  const [errors, setErrors] = useState([]);
  const [errorText, setErrorText] = useState([]);
  const [confirmPassword, setConfirmPassword] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    setRegister({
      password: "",
      email: "",
      firstName: "",
      lastName: "",
    });

    setErrors({
      password: false,
      email: false,
      firstName: false,
      lastName: false,
      confirm: false,
    });

    setErrorText({
      password: "",
      email: "",
      firstName: "",
      lastName: "",
      confirm: "",
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

  async function isNewEmail(email) {
    try {
      await fetch(`http://localhost:8080/api/users/email?email=${email}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      return false;
    } catch (error) {
      return true;
    }
  }

  async function validate() {
    let errorless = true;
    if (register.firstName.length === 0) {
      errorless = flagError("firstName", "First Name is required");
    } else {
      if (register.firstName.length > 30) {
        errorless = flagError("firstName", "First Name is too large");
      }
    }

    if (register.lastName.length === 0) {
      errorless = flagError("lastName", "Last Name is required");
    } else if (register.lastName.length > 30) {
      errorless = flagError("lastName", "Last Name is too large");
    }

    if (register.email.length === 0) {
      errorless = flagError("email", "Email is required");
    } else if (!validator.isEmail(register.email)) {
      errorless = flagError("email", "Not a valid email address");
    } else if (await isNewEmail(register.email)) {
      errorless = flagError("email", "Email is in use. Try a new email.");
    }

    if (register.password.length === 0) {
      errorless = flagError("password", "Password is required");
    } else if (!validator.isStrongPassword(register.password)) {
      errorless = flagError(
        "password",
        "Password must be a minimum of 8 characters and must include: 1 lowercase letter, 1 uppercase letter, 1 number, and 1 symbol"
      );
    } else if (register.password !== confirmPassword) {
      errorless = flagError("confirm", "Passwords do not match");
    }
    return errorless;
  }

  async function handleSubmit() {
    if (await validate()) {
      let salt = bcrypt.genSaltSync(10);
      let hash = bcrypt.hashSync(register.password, salt);
      const _register = { ...register, password: hash };

      try {
        await fetch("http://localhost:8080/api/users/", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(_register),
        }).then(navigate("/login", { replace: true }));
      } catch (err) {
        // do something with the error
      }
    }
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
            error={errors.email}
            helperText={errorText.email}
          />
          <TextField
            className="register-field"
            name="firstName"
            label="First Name"
            value={register.firstName || ""}
            onChange={handleRegisterInfo}
            error={errors.firstName}
            helperText={errorText.firstName}
          />
          <TextField
            className="register-field"
            name="lastName"
            label="Last Name"
            value={register.lastName || ""}
            onChange={handleRegisterInfo}
            error={errors.lastName}
            helperText={errorText.lastName}
          />
          <TextField
            className="register-field"
            name="password"
            type="password"
            label="Password"
            value={register.password || ""}
            onChange={handleRegisterInfo}
            error={errors.password}
            helperText={errorText.password}
          />
          <TextField
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            value={confirmPassword || ""}
            onChange={handleConfirmPassword}
            error={errors.confirm}
            helperText={errorText.confirm}
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
