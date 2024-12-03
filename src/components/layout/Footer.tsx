import React from 'react';
import { Box, Typography } from '@mui/material';

export class Footer extends React.Component {
    render() {
        return (
            <Box
                sx={{
                    backgroundColor: (theme) => theme.palette.background.default,
                    paddingY: '30px',
                    textAlign: 'center',
                }}
            >
                <Typography
                    variant="body2"
                    sx={{
                        color: (theme) => theme.palette.text.secondary,
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '14px',
                        fontWeight: 600,
                    }}
                >
                    Copyright <span style={{ color: '#FFF' }}>Banana Studio</span> 2022 All Right Reserved
                </Typography>
            </Box>
        );
    }
}
