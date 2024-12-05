import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Icon } from './Icon';


type ServiceCardProps = {
  iconId: string;
  title: string;
  description: string;
}

export class ServiceCard extends React.Component<ServiceCardProps> {
  render() {
    const { iconId, title, description } = this.props;

    return (
      <Card sx={{ padding: '40px 30px 30px 20px', backgroundColor: '#F7F7F7', minHeight: '260px' }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent:'center' }}>
          <Icon iconId={iconId} width='30' height='30'/>
          <Typography variant="h6" sx={{ marginTop: 2 }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 1 }}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}


