import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import LandingPage from "../components/LandingPage/LandingPage";
import Restaurants from "../components/Restaurants/Restaurants";
import WishList from "../components/WishList/WishList";
import AboutUs from "../components/AboutUs/AboutUs";
import NavBar from "../components/NavBar/NavBar";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import { useEffect, useState } from "react";

let athensEatsTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#d03535",
      dark: "#353535",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#4786d4",
      contrastText: "#f7f7f7",
    },
    background: {
      default: "#000000",
      paper: "#ffffff",
    },
    text: {
      primary: "#2F2F2F",
      secondary: "rgba(175,175,175,0.84)",
      disabled: "rgba(226,225,225,0.37)",
      hint: "rgba(210,206,206,0.5)",
    },
  },
  typography: {
    fontFamily: "Sora",
  },
});

athensEatsTheme = responsiveFontSizes(athensEatsTheme);

function App() {
  const [isLoggedIn, setLoggedIn] = useState(
    localStorage.getItem("userId") !== null
  );

  useEffect(() => {}, [isLoggedIn]);

  return (
    <ThemeProvider theme={athensEatsTheme}>
      <BrowserRouter>
        <NavBar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
        <div className="content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route
              path="/login"
              element={
                <Login isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
              }
            />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
