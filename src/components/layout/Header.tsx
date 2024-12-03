import React from "react";
import { Menu } from "../menu/Menu";
import { Button, Container, Box } from "@mui/material";
import { Logo } from "../Logo";
import { Theme } from '@mui/material/styles'; 


const items = ["home", "about", "service", "portfolio"];

export class Header extends React.Component {
  render() {
    return (
      <Box
        component="header"
        sx={{
          padding: "10px 20px",
          backgroundColor: (theme) => theme.palette.primary.main,
          width: "100%",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "60px",
            padding: "10px 20px",
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
              border: (theme: Theme) => `1px solid ${theme.palette.accent.main}`,
              color: theme => theme.palette.accent.main, // Цвет текста
              padding: "12px 16px", // Паддинг
              backgroundColor: theme => theme.palette.primary.main, // Цвет фона такой же как у header
              fontFamily: 'Montserrat', // Шрифт
              fontSize: '12px', // Размер шрифта
              fontWeight: 600, // Жирность шрифта
              '&:hover': {
                backgroundColor: theme => theme.palette.primary.main, // Цвет фона при наведении
              }
            }}
          >
            Contact
          </Button>
        </Container>
      </Box>
    );
  }
}
