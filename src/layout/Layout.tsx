import React, { useState } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Outlet } from "react-router-dom"; // To render child routes
import Header from "./Header";

const drawerWidth = 240;

const navItems = [
  { text: "Inbox", icon: <InboxIcon /> },
  { text: "Starred", icon: <MailIcon /> },
  { text: "Send email", icon: <InboxIcon /> },
  { text: "Drafts", icon: <MailIcon /> },
];

const Layout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box>
      <CssBaseline />
      <Header />

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Toolbar /> {/* Spacing below the AppBar */}
        <Outlet /> {/* Renders the matched child route here */}
      </Box>
    </Box>
  );
};

export default Layout;
