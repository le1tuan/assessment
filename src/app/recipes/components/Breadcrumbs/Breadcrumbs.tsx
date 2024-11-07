import { Breadcrumbs, Typography } from "@mui/material";
import React from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from "next/link";

const breadcrumbs = [
  <Link href="#" key={1}>
    <Typography key="3" variant="button">
      RECIPES
    </Typography>
  </Link>,
  <Link
    key={2}
    href="#"
  >
    <Typography key="3" variant="button">
      BREAD
    </Typography>
  </Link>,
  <Typography key="3" variant="button">
    QUICK BREAD
  </Typography>,
];


export const CustomBreadcrumbs = () => {
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon color="primary" fontSize="small" />}
      aria-label="breadcrumb"
    >
      {breadcrumbs}
    </Breadcrumbs>
  )
}