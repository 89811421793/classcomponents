import React from "react";
import { Menu } from "../menu/Menu";
import { Button, Container, Box } from "@mui/material";
import { Logo } from "../Logo";
import { Theme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const items = [
  { label: "home", path: "/" },
  { label: "about", path: "/about" },
  { label: "service", path: "/service" },
  { label: "portfolio", path: "/portfolio" },
];

export class Header extends React.Component {
  render() {
    return (
      <Box
        component="header"
        sx={{
          padding: "10px 20px",
          backgroundColor: (theme) => theme.palette.background.default,
          position: "fixed", 
          top: 0, 
          left: 0,
          right: 0, 
          zIndex: 1000, 
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: "100%",
            padding: "10px 20px",
            margin: "0 auto",
            width: "100%",
            maxWidth: "1140px",
          }}
        >
          <Box
            sx={{
              width: "20px",
              height: "20px",
              marginBottom: "5px",
            }}
          >
            <Logo />
          </Box>
          <Menu menuItems={items} />
          <Button
            variant="contained"
            sx={{
              flex: "0 0 auto",
              border: (theme: Theme) =>
                `1px solid ${theme.palette.accent.main}`,
              color: (theme) => theme.palette.accent.main,
              padding: "12px 16px",
              backgroundColor: (theme) => theme.palette.background.default,
              fontFamily: "Montserrat",
              fontSize: "12px",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: (theme) => theme.palette.background.default,
              },
            }}
            component={Link}
            to="/contacts"
          >
            Contact
          </Button>
        </Container>
      </Box>
    );
  }
}
