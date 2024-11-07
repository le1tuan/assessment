'use client'
import React from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

const IMAGE_URL = "https://www.kingarthurbaking.com/themes/custom/kaf_nextgenweb/images/crown@2x.png"

const StyledBox = styled(Box)`
  position: absolute;
  width: 100px;
  height: 49px;
  top: 50%;
  left: 150px;
  transform: translateY(-50%)
`

export const Logo = () => {
  return (
    <StyledBox>
      <img
        alt="logo"
        style={{
          width: '100%',
          height: '100%'
        }}
        src={IMAGE_URL}
      />
    </StyledBox>
  )
}