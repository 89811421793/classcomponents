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
  paddingTop: number;
};

export default class Experience extends Component<ExperienceProps> {
  render() {
    const { iconId, index, title, period, description, isLast, paddingTop } =
      this.props;

    return (
      <Box
        sx={{
          position: "relative",
          paddingRight: "65px",
          paddingTop: `${paddingTop}px`,
          height: "40vh",
          "&::before": {
            content: '""',
            position: "absolute",
            left: '-1%',
            top: 0,
            height: "100%",
            width: "1px",
            backgroundColor: "#F2F3F4",
          },
          "&::after": isLast
            ? {
                content: '""',
                position: "absolute",
                right: 0,
                top: 0,
                height: "100%",
                width: "1px",
                backgroundColor: "#F2F3F4",
              }
            : undefined,
        }}
      >
        <Icon iconId={iconId} width="92" height="20" />
        <div style={{ marginTop: "25px" }}>
          <span
            style={{
              color: "#FE390C",
              fontFamily: "Anton",
              fontSize: "40px",
              fontWeight: 400,
              marginRight:'5px'
            }}
          >
            {index}
          </span>
          <div
            style={{
              display: "inline-block",
              marginLeft: "5px",
              textAlign: "left",
              verticalAlign: "top",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#111214",
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: 700,
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#FE390C",
                fontFamily: "Montserrat",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              {period}
            </Typography>
          </div>
        </div>
        <Typography
          variant="body2"
          sx={{
            marginTop: "17px",
            textAlign: "left",
            maxWidth: "212px",
            height: "100%",
            color: "#A9A9AA",
            fontFamily: "Montserrat",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "24px",
          }}
        >
          {description}
        </Typography>
      </Box>
    );
  }
}
