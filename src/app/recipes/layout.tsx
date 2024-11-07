'use client'
import { AppBar, Box } from "@mui/material"
import { Logo } from "./components/Logo"
import { MenuContainer } from "./components/MenuContainer"
import { Container } from "./components/Container"

export type MenuItem = {
  label: string
  isActive: boolean
}

const mainMenu: Array<MenuItem> = [{
  label: "SHOP",
  isActive: false,
}, {
  label: "RECIPES",
  isActive: true,
}, {
  label: "LEARN",
  isActive: false,
}, {
  label: "ABOUT",
  isActive: false,
}, {
  label: "BLOG",
  isActive: false,
}]

const subMenu: Array<MenuItem> = [{
  label: "Categories",
  isActive: false,
}, {
  label: "Collections",
  isActive: false,
}, {
  label: "Resources",
  isActive: false,
}]

export default function RecipesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Box>
        <AppBar
          position="fixed"
          color="secondary"
        >
          <Box
            sx={{
              position: 'relative'
            }}
          >
            <Logo />
            <Box>
              <MenuContainer
                menuItem={mainMenu}
                isSubMenu={false}
              />
              <MenuContainer
                menuItem={subMenu}
                isSubMenu={true}
              />
            </Box>
          </Box>
        </AppBar>
        <Container>
          {children}
        </Container>
      </Box>
    </>
  )
}