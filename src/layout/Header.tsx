import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import { Search } from "@mui/icons-material";

export default function Component() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={(theme) => ({
          bgcolor: theme.palette.primary.main,
          color: "white",
        })}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
              FlyHigh
            </Typography>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button color="inherit">Destination</Button>
            <span>.</span>
            <Button color="inherit">Bookings</Button>
            <span>.</span>
            <Button color="inherit">Activities</Button>
          </Box>
          <Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="search"
            >
              <Search />
            </IconButton>
            <Button color="inherit">Log in</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
