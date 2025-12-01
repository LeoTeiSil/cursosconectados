// theme.ts
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#8D202F",    // vermelho principal
      dark: "#4D151D",    // para hover
      light: "#917476",   // tom auxiliar
    },

    secondary: {
      main: "#4D151D",
    },

    background: {
      default: "#0C0B0B", // fundo geral
      paper: "#1E1D1D",   // cards, containers
    },

    text: {
      primary: "#FFFFFF",
      secondary: "#917476",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 600,
        },
        containedPrimary: {
          "&:hover": {
            backgroundColor: "#4D151D",
          },
        }
      }
    }
  }
});
