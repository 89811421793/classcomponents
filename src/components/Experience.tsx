import { Component } from "react";
import { Box, Typography } from "@mui/material";
import { Icon } from "./Icon";

type ExperienceProps = {
  iconId: string;
  index: string;
  title: string;
  period: string;
  description: string;
  isLast: boolean; 
};

export default class Experience extends Component<ExperienceProps> {
  render() {
    const { iconId, index, title, period, description, isLast } = this.props;

    return (
      <Box
        sx={{
          display: "inline-block",
          position: "relative",
          paddingRight: "74px",
          height: "90vh",
          "&::before": {
            content: '""',
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            width: "1px",
            backgroundColor: "#F2F3F4",
          },
          // Добавляем вертикальную линию для последнего элемента
          "&::after": isLast ? {
            content: '""',
            position: "absolute",
            right: 0,
            top: 0,
            height: "100%",
            width: "1px",
            backgroundColor: "#F2F3F4",
          } : undefined,
        }}
      >
        <div style={{ display: "block", paddingTop: "230px" }}>
          <Icon iconId={iconId} width="92" height="20" />
          <div style={{ marginTop: "25px" }}>
            <span style={{ fontSize: "40px" }}>{index}</span>
            <div
              style={{
                display: "inline-block",
                marginLeft: "5px",
                textAlign: "left",
                verticalAlign: "top",
              }}
            >
              <Typography variant="body1">{title}</Typography>
              <Typography variant="body2">{period}</Typography>
            </div>
          </div>
          <Typography
            variant="body2"
            sx={{
              marginTop: "17px",
              textAlign: "left",
              maxWidth: "212px",
              height: "100%",
            }}
          >
            {description}
          </Typography>
        </div>
      </Box>
    );
  }
}
