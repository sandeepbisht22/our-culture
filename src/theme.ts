import { createTheme, ThemeOptions } from "@mui/material/styles";

// Define your custom theme options here
const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#7b59df", // Customize your primary color
    },
    secondary: {
      main: "#dc004e", // Customize your secondary color
    },
    background: {
      default: "#f5f5f5", // Page background color
    },
    text: {
      primary: "#333", // Text color
      secondary: "#555",
    },
  },
  typography: {
    fontFamily: `'Montserrat','Roboto', 'Helvetica', 'Arial', sans-serif`, // Customize typography
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Remove uppercase transform from buttons
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#1976d2", // Set AppBar background color
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
