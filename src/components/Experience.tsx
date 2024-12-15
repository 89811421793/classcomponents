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
      <Box sx={{ margin: '0 10px' }}>
        <Icon iconId={iconId} width='72' height='18' />
        <Box sx={{ marginTop: '25px' }}>
          <span>{index}</span>
          <div style={{ display: 'inline-block', marginLeft: '5px', textAlign: 'left' }}>
            <Typography variant="body1">{title}</Typography>
            <Typography variant="body2">{period}</Typography>
          </div>
        </Box>
        <Typography variant="body2" sx={{ marginTop: '17px', textAlign: 'left' }}>
          {description}
        </Typography>
      </Box>
    );
  }
}
