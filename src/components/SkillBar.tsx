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
      <Box sx={{ width: "558px", mb: 2 }}>
        <Typography
          variant="body1"
          sx={{ mb: 1, display: "flex", justifyContent: "space-between" }}
        >
          {skillName} <span>{percentage}%</span>
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "6px",
            backgroundColor: "#DDDEE0",
            borderRadius: "4px",
            overflow: "hidden",
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
