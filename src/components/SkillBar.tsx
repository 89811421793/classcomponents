import { Component } from "react";
import { Box, Typography } from "@mui/material";

type SkillBarProps = {
  skillName: string;
  percentage: number;
};

export class SkillBar extends Component<SkillBarProps> {
  render() {
    const { skillName, percentage } = this.props;

    return (
      <Box sx={{ marginTop: "40px" }}>
        <Typography
          variant="body1"
          sx={{
            mb: 1,
            display: "flex",
            justifyContent: "space-between",
            color: "#111214",
            fontFamily: "Montserrat",
            fontSize: "14px",
            fontWeight: 600,
          }}
        >
          {skillName} 
          <span style={{
            color: "#111214",
            fontFamily: "Montserrat",
            fontSize: "14px",
            fontWeight: 600,
          }}>
            {percentage}%
          </span>
        </Typography>
        <Box
          sx={{
            minWidth: "480px",
            height: "6px",
            backgroundColor: "#DDDEE0",
            borderRadius: "4px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: `${percentage}%`,
              height: "100%",
              backgroundColor: "#FE390C",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </Box>
      </Box>
    );
  }
}
