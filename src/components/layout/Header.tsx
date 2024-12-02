import React from 'react';
import { Menu } from "../menu/Menu";
import { Button, Container, Box } from "@mui/material";
import { Logo } from "../Logo";

const items = ["home", "about", "service", "portfolio"];

export class Header extends React.Component {
  render() {
    return (
      <Box 
        component="header" 
        sx={{ 
          padding: "10px 20px", 
          backgroundColor: "#242424", 
          color: "#FFFFFF", 
          width: "100%" 
        }}
      >
        <Container sx={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          height: "60px", 
          padding: "10px 20px" 
        }}>
          <Box sx={{ 
            width: "20px", 
            height: "20px", 
            marginBottom: "5px" 
          }}>
            <Logo />
          </Box>
          <Menu menuItems={items} />
          <Button variant="contained" color="primary" sx={{ flex: "0 0 auto" }}>
            Contact
          </Button>
        </Container>
      </Box>
    );
  }
}



