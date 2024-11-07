'use client';

import React from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/app/theme";


export const MaterialThemeProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}