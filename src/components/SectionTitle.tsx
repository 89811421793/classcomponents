import { Component } from "react";
import { Typography, Box } from "@mui/material";

interface SectionTitleProps {
  title: string;
  index: number; // Добавляем пропс для порядкового номера
}

class SectionTitle extends Component<SectionTitleProps> {
  render() {
    const { title, index } = this.props;
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          color: (theme) => theme.palette.text.primary,
          paddingLeft: "70px",

          "&::before": {
            content: `"${index < 10 ? "0" : ""}${index}"`,
            position: "absolute",
            top:'-1%',
            left:'6%',
            transform: "translateX(-50%)",
            fontFamily: "Anton",
            fontSize: "80px",
            fontWeight: 400,
            color: (theme) => theme.palette.accent.main,
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
