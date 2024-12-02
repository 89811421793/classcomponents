import React from 'react';
import { Box, Link } from '@mui/material';

export class Menu extends React.Component<{ menuItems: Array<string> }> {
    render() {
        return (
            <Box 
                component="ul" 
                sx={{ 
                    listStyleType: 'none', 
                    padding: 0, 
                    margin: 0, 
                    display: 'flex', 
                    flex: '1', 
                    justifyContent: 'center' 
                }}
            >
                {this.props.menuItems.map((tabItem) => (
                    <Box 
                        component="li" 
                        key={tabItem} 
                        sx={{ margin: '0 15px' }}
                    >
                        <Link 
                            href="#" 
                            sx={{ 
                                textDecoration: 'none', 
                                color: '#FFFFFF' 
                            }}
                        >
                            {tabItem}
                        </Link>
                    </Box>
                ))}
            </Box>
        );
    }
}
