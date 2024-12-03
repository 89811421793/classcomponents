// Hero.tsx
import { Component } from 'react';
import { Box } from '@mui/material';
import heroBackground from '../../../assets/images/hero_background.jpg';

export class Hero extends Component {
    render() {
        return (
            <Box
                sx={{
                    backgroundImage: `url(${heroBackground})`,
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center', 
                    height: '80vh', 
                    width: '100%', 
                }}
            >
               
            </Box>
        );
    }
}
