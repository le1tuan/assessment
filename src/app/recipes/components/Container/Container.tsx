import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React from 'react';

const StyledBox = styled(Box)`
  width: 100%;
  padding: 184px 150px 1.5rem 150px;
`

export const Container = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <StyledBox>
      {children}
    </StyledBox>
  )
}