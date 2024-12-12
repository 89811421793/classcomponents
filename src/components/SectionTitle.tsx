import { Component } from "react";
import { Typography, Box } from "@mui/material";
import { Theme } from "@mui/material/styles"; // Импортируем тип Theme

interface SectionTitleProps {
  title: string;
  index: number; // Добавляем пропс для порядкового номера
  sectionBackgroundColor?: string; // Добавляем пропс для цвета фона секции
  overrideIndex?: number;
}

class SectionTitle extends Component<SectionTitleProps> {
  render() {
    const { title, index, sectionBackgroundColor, overrideIndex } = this.props;

    // Определяем цвет текста в зависимости от цвета фона секции
    const textColor =
      sectionBackgroundColor === "#111214" || sectionBackgroundColor === "black"
        ? (theme: Theme) => theme.palette.background.paper // Указываем тип для theme
        : (theme: Theme) => theme.palette.text.primary; // Указываем тип для theme


    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          color: textColor,
          paddingLeft: "70px",
          paddingTop: '10px',

          "&::before": {
            content: `"${(overrideIndex !== undefined ? overrideIndex : index) < 10 ? "0" : ""}${overrideIndex !== undefined ? overrideIndex : index}"`,
            position: "absolute",
            top: '-2%',
            left: '7%',
            transform: "translateX(-50%)",
            fontFamily: "Anton",
            fontSize: "80px",
            fontWeight: 400,
            color: (theme: Theme) => theme.palette.accent.main, // Указываем тип для theme
          },
        }}
      >
        <Typography
          component="h2"
          sx={{
            fontFamily: "Anton",
            fontWeight: 400,
            fontSize: "40px",
            textTransform: "uppercase",
            display: "inline-block",
            textAlign: "left",
          }}
        >
          {title}
        </Typography>
      </Box>
    );
  }
}

export default SectionTitle;
