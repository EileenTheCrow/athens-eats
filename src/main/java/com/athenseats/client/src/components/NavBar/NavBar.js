import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import "./NavBar.css";
import MenuIcon from "@mui/icons-material/Menu";

import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import MoreIcon from "@mui/icons-material/MoreVert";

export function NavBar(props) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  let navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavigation = (destination) => {
    switch (destination.currentTarget.id.toString()) {
      case "Home":
        navigate("/", { replace: true });
        break;
      case "Restaurants":
        navigate("/restaurants", { replace: true });
        break;
      case "Wishlist":
        navigate("/wishlist", { replace: true });
        break;
      case "About Us":
        navigate("/about-us", { replace: true });
        break;
      case "Login":
        navigate("/login", { replace: true });
        break;
      case "Register":
        navigate("/register", { replace: true });
        break;
      default:
        console.log("wtf");
    }
  };

  async function handleLogout() {
    localStorage.clear();
    props.setLoggedIn(false);
    navigate("/login", { replace: true });
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Athens Eats
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem id="Home" key="Home" onClick={handleNavigation}>
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem
                id="Restaurants"
                key="Restaurants"
                onClick={handleNavigation}
              >
                <Typography textAlign="center">Restaurants</Typography>
              </MenuItem>
              <MenuItem id="Wishlist" key="Wishlist" onClick={handleNavigation}>
                <Typography textAlign="center">Wishlist</Typography>
              </MenuItem>
              <MenuItem id="About Us" key="About Us" onClick={handleNavigation}>
                <Typography textAlign="center">About Us</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Athens Eats
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              key="Home"
              id="Home"
              onClick={handleNavigation}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Home
            </Button>
            <Button
              key="Restaurants"
              id="Restaurants"
              onClick={handleNavigation}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Restaurants
            </Button>
            <Button
              key="Wishlist"
              id="Wishlist"
              onClick={handleNavigation}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Wishlist
            </Button>
            <Button
              key="About Us"
              id="About Us"
              onClick={handleNavigation}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              About Us
            </Button>
          </Box>
          <Box
            sx={{
              flexgrow: 1,
              display: { xs: "none", md: "flex" },
              width: "fit-content",
            }}
          >
            {props.isLoggedIn ? (
              <Button
                key="Logout"
                id="Logout"
                onClick={handleLogout}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Logout
              </Button>
            ) : (
              <>
                <Button
                  key="Login"
                  id="Login"
                  onClick={handleNavigation}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Login
                </Button>
                <Button
                  key="Register"
                  id="Register"
                  onClick={handleNavigation}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Register
                </Button>
              </>
            )}
          </Box>
          <Box
            sx={{
              flexgrow: 1,
              display: { xs: "flex", md: "none" },
              width: "fit-content",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenUserMenu}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
            {!props.isLoggedIn ? (
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem key="Login" id="Login" onClick={handleNavigation}>
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>
                <MenuItem
                  key="Register"
                  id="Register"
                  onClick={handleNavigation}
                >
                  <Typography textAlign="center">Register</Typography>
                </MenuItem>
              </Menu>
            ) : (
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem key="Logout" id="Logout" onClick={handleLogout}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
