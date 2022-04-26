import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {createTheme, responsiveFontSizes, ThemeProvider} from "@mui/material";
import LandingPage from "../components/LandingPage/LandingPage";
import Restaurants from "../components/Restaurants/Restaurants";
import Polls from "../components/Polls/Polls";
import WishList from "../components/WishList/WishList";
import AboutUs from "../components/AboutUs/AboutUs";
import NavBar from "../components/NavBar/NavBar";


let athensEatsTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#d03535',
      dark: '#353535',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#4786d4',
      contrastText: '#f7f7f7',
    },
    background: {
      default: '#272727',
      paper: '#ffffff',
    },
    text: {
      primary: '#2F2F2F',
      secondary: 'rgba(175,175,175,0.84)',
      disabled: 'rgba(226,225,225,0.37)',
      hint: 'rgba(210,206,206,0.5)',
    },
  },
  typography: {
    fontFamily: 'Sora'
  }
});

athensEatsTheme = responsiveFontSizes(athensEatsTheme);

function App() {
  return (
    <ThemeProvider theme={athensEatsTheme}>
      <BrowserRouter>
        <NavBar/>
        <div className="content-container">
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/restaurants" element={<Restaurants/>}/>
            <Route path="/polls" element={<Polls/>}/>
            <Route path="/wishlist" element={<WishList/>}/>
            <Route path="/about-us" element={<AboutUs/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
