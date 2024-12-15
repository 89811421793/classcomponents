import { Component } from "react";
import { Box, Typography } from "@mui/material";
import { Icon } from "./Icon";

type ExperienceProps = {
  iconId: string;
  index: string;
  title: string;
  period: string;
  description: string;
};

export default class Experience extends Component<ExperienceProps> {
  render() {
    const { iconId, index, title, period, description } = this.props;

    return (
      <Box sx={{ margin: "0 10px" }}>
        <Icon iconId={iconId} width="92" height="20" />
        <Box sx={{ display:'flex', alignItems:'center', marginTop: "25px" }}>
          <span style={{fontSize:'40px'}}>{index}</span>
          <div
            style={{
              display: "inline-block",
              marginLeft: "5px",
              textAlign: "left",
            }}
          >
            <Typography variant="body1">{title}</Typography>
            <Typography variant="body2">{period}</Typography>
          </div>
        </Box>
        <Typography
          variant="body2"
          sx={{ marginTop: "17px", textAlign: "left", maxWidth:'212px' }}
        >
          {description}
        </Typography>
      </Box>
    );
  }
}
