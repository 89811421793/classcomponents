import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Icon } from './Icon';

type ServiceCardProps = {
  iconId: string;
  title: string;
  description: string;
  hoverIconId: string; 
}

export class ServiceCard extends React.Component<ServiceCardProps> {
  state = {
    isHovered: false,
  };

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { iconId, title, description, hoverIconId } = this.props;
    const { isHovered } = this.state;

    return (
      <Card 
        sx={{ 
          padding: '40px 20px 30px 20px', 
          backgroundColor: isHovered ? theme => theme.palette.accent.main : '#F7F7F7', 
          minHeight: '260px', 
          transition: 'background-color 0.3s ease' 
        }}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
          <Icon iconId={isHovered ? hoverIconId : iconId} width='30' height='30' />
          <Typography 
            variant="h6" 
            sx={{ 
              marginTop: 2, 
              fontFamily: 'Montserrat', 
              fontSize: '16px', 
              fontWeight: 700, 
              color: isHovered ? theme => theme.palette.background.paper : theme => theme.palette.text.primary 
            }}
          >
            {title}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              marginTop: 1, 
              fontFamily: 'Montserrat', 
              fontSize: '14px', 
              fontWeight: 500, 
              textAlign: 'justify',
              color: isHovered ? '#FFD7CEB3' : theme => theme.palette.text.secondary 
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
