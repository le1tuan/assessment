import React from "react";
import { Box, Stack, Typography } from '@mui/material';
import styled from "@emotion/styled";
import { MenuItem } from "../../layout";
import { colors } from "@/app/theme";

type Props = {
  isSubMenu: boolean,
  menuItem: Array<MenuItem>
}

const StyledStack = styled(Stack) <{
  isSubMenu?: boolean;
}>`
  flex-direction: row;
  gap: 3rem;
  padding: 1rem 0.5rem 1rem 300px;
  height: ${props => !props.isSubMenu ? '80px' : '64px'};
  background-color: ${props => props.isSubMenu ? '#f8f5f0' : '#ffff'}
`;
export const MenuContainer = ({
  isSubMenu = false,
  menuItem
}: Props) => {
  return (
    <StyledStack
      isSubMenu={isSubMenu}
    >{
        menuItem.map((item, index) => {
          return (
            <Stack
              key={index}
              justifyContent='center'
              alignItems='center'
              sx={{
                borderBottom: item.isActive ? `2px solid ${colors.RED}` : 'unset'
              }}>
              <Typography>{item.label}</Typography>
            </Stack>
          )
        })
      }
    </StyledStack>
  )
}