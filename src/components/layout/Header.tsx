import React from "react";
import { Menu } from "../menu/Menu";
import { Button, Container } from "@mui/material";
import { Logo } from "../Logo";

const items = ["home", "about", "service", "portfolio"];

export class Header extends React.Component {
  render() {
    return (
      <header style={headerStyle}>
        <Container style={containerStyle}>
          <div style={logoStyle}>
            <Logo />
          </div>
          <Menu menuItems={items} />
          <Button variant="contained" color="primary" style={buttonStyle}>
            Contact
          </Button>
        </Container>
      </header>
    );
  }
}

// Стили для шапки
const headerStyle: React.CSSProperties = {
  padding: "10px 20px",
  backgroundColor: "#242424",
  color: "#FFFFFF",
  width: "100%",
};

// Стили для контейнера
const containerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "60px",
};

// Стили для логотипа
const logoStyle: React.CSSProperties = {
  width: "20px",
  height: "20px",
  marginBottom: "5px",
};

// Стили для кнопки
const buttonStyle: React.CSSProperties = {
  flex: "0 0 auto",
};
