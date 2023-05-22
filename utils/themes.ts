import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    purple: {
      main: string;
    };
    green?: Palette["primary"];
    pink?: Palette["primary"];
    yellow?: Palette["primary"];
  }
  interface PaletteOptions {
    purple?: {
      main?: string;
    };
    neutral?: {
      main?: string;
    };
    green?: PaletteOptions["primary"];
    pink?: PaletteOptions["primary"];
    yellow?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    green: true;
    pink: true;
    yellow: true;
  }
}

export const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: ({ theme }) => ({
          backgroundColor: theme.palette.purple.main,
          color: theme.palette.purple.main,
        }),
      },
    },
    MuiTab: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&.Mui-selected": {
            color: theme.palette.purple.main,
          },
        }),
      },
    },
  },
  palette: {
    primary: {
      main: "#9146FF",
    },
    purple: {
      main: "#BE94FF",
    },
    neutral: {
      main: "#18181C",
    },
    secondary: {
      main: "#9147FF",
    },
    green: {
      main: "#7DEFAC",
      contrastText: "#000",
    },
    pink: {
      main: "#EF7D7D",
      contrastText: "#000",
    },
    yellow: {
      main: "#F19C1D",
    },
    info: {
      main: "#121212",
    },
    mode: "dark",
  },
});