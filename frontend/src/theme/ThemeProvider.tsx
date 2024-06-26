import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  alpha,
  ScopedCssBaseline,
} from "@mui/material";
import { blue, green, grey, red, amber } from "@mui/material/colors";
import React from "react";
import { shadowsMap } from "./shadowsMap";
import type { BreakpointsOptions } from "@mui/material";

export function ThemeProvider(props: React.PropsWithChildren) {
  const { children } = props;

  const mode = "light";
  const whiteColor = "#fff";
  const mainColor = mode === "light" ? "rgb(58, 53, 65)" : "rgb(231, 227, 252)";

  const theme = createTheme({
    breakpoints: breakpoints(),
    spacing(abs: number) {
      return `${abs * 0.25}rem`;
    },
    shape: {
      borderRadius: 3,
    },

    shadows: shadowsMap.get(mode),

    palette: {
      mode: "light",
      common: {
        black: "#000",
        white: whiteColor,
      },
      grey: {
        50: "#FAFAFA",
        100: "#F5F5F5",
        200: "#EEEEEE",
        300: "#E0E0E0",
        400: "#BDBDBD",
        500: "#9E9E9E",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
        A100: "#F5F5F5",
        A200: "#EEEEEE",
        A400: "#BDBDBD",
        A700: "#616161",
      },

      primary: {
        main: blue[500],
        light: blue[400],
        dark: blue[600],
        contrastText: whiteColor,
      },
      secondary: {
        main: grey[500],
        light: grey[400],
        dark: grey[600],
        contrastText: whiteColor,
      },
      success: {
        main: green[500],
        light: green[400],
        dark: green[600],
        contrastText: whiteColor,
      },
      error: {
        main: red[500],
        light: red[400],
        dark: red[600],
        contrastText: whiteColor,
      },
      warning: {
        main: amber[500],
        light: amber[400],
        dark: amber[600],
        contrastText: whiteColor,
      },
      info: {
        main: grey[500],
        light: grey[400],
        dark: grey[600],
        contrastText: whiteColor,
      },

      divider: alpha(grey[900], 0.12),
      text: {
        primary: alpha(mainColor, 0.87),
        secondary: alpha(mainColor, 0.6),
        disabled: alpha(mainColor, 0.38),
      },

      action: {
        active: alpha(mainColor, 0.54),
        activatedOpacity: 0.24,

        disabled: alpha(mainColor, 0.26),
        disabledOpacity: 0.38,
        disabledBackground: alpha(mainColor, 0.12),

        focus: alpha(mainColor, 0.12),
        focusOpacity: 0.12,

        hover: alpha(mainColor, 0.04),
        hoverOpacity: 0.08,

        selected: alpha(mainColor, 0.08),
        selectedOpacity: 0.16,
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <ScopedCssBaseline
        sx={{
          bgcolor: "transparent",
          ":where(& *)": {
            boxSizing: "inherit",
          },
        }}
      >
        {children}
      </ScopedCssBaseline>
    </MuiThemeProvider>
  );
}

function breakpoints(): BreakpointsOptions {
  return {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
    unit: "px",
  };
}
