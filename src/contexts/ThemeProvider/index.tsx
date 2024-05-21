import React from "react";
import { ThemeProvider as RNThemeProvider } from "styled-components/native";
import { ThemeProviderProps } from "./types";
import { DefaultTheme } from "../../utils/theme";

const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <RNThemeProvider theme={DefaultTheme}>{children}</RNThemeProvider>
);

export default ThemeProvider;