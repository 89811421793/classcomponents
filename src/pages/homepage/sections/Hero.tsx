import { Component } from "react";
import { Box, Container, Button, styled } from "@mui/material";
import heroBackground from "../../../assets/images/hero_background.jpg";
import { Socials } from "../../../components/Socials";

// Стили для контейнера
const StyledContainer = styled(Container)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: "100%",
  color: "#fff",
  maxWidth: "1140px",
  width: "100%",
  padding: 0,
});

// Стили для обертки содержимого
const ContentWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  height: "100%",
  gap: "30px",
});

// Стили для первой строки текста
const HelloText = styled("span")(({ theme }) => ({
  fontFamily: "Montserrat",
  fontSize: "24px",
  fontWeight: 700,
  color: theme.palette.accent.main,
}));

// Стили для обычного span
const ImText = styled("span")({
  fontFamily: "Montserrat",
  fontSize: "24px",
  fontWeight: 700,
  color: "#FFF",
  marginLeft: "4px",
});

// Стили для имени
const NameText = styled("span")({
  fontFamily: "Anton",
  fontSize: "130px",
  fontWeight: 400,
  color: "#FFF",
});

// Стили для описания
const DescriptionText = styled("p")({
  fontFamily: "Montserrat",
  fontSize: "16px",
  fontWeight: 700,
  color: "#FFF",
});

// Стили для кнопки
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.accent.main,
  border: "none",
  padding: "16px 24px",
  color: "#fff",
  fontFamily: "Montserrat",
  fontSize: "12px",
  fontWeight: 600,
  "&:hover": {
    backgroundColor: theme.palette.accent.main,
  },
}));

// Стили для фона
const StyledBox = styled(Box)({
  backgroundImage: `url(${heroBackground})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "80vh",
  width: "100%",
});

export class Hero extends Component {
  render() {
    return (
      <StyledBox>
        <StyledContainer>
          <ContentWrapper>
            <span style={{ display: "flex", alignItems: "center" }}>
              <HelloText>Hello, </HelloText>
              <ImText>I'm</ImText>
            </span>
            <NameText> ROBERT FOX</NameText>
            <DescriptionText>Professional Product Designer</DescriptionText>
            <StyledButton variant="contained">Let's Talk</StyledButton>
          </ContentWrapper>
          <Socials />
        </StyledContainer>
      </StyledBox>
    );
  }
}
