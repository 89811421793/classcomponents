import React from 'react';
import { Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; 
import { styled } from '@mui/material/styles';
import { Theme } from '@mui/material/styles';

// Определяем стилизованный компонент для элемента меню
const StyledSpan = styled('span')(({ theme }: { theme: Theme }) => ({
    textDecoration: 'none',
    color: theme.palette.text.secondary,
    textTransform: 'uppercase',
    fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: 600,
    '&:hover': {
        color: theme.palette.accent.main,
    },
}));

// Определяем интерфейс для пропсов компонента Menu
interface MenuItem {
    label: string;
    path: string;
}

interface MenuProps {
    menuItems: MenuItem[];
}

// Основной компонент Menu
export class Menu extends React.Component<MenuProps> {
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
                    justifyContent: 'center',
                    gap: '55px',
                }}
            >
                {this.props.menuItems.map((item) => (
                    <Box 
                        component="li" 
                        key={item.label} 
                        sx={{ 
                            '&:last-child': {
                                marginRight: 0,
                            },
                        }}
                    >
                        <RouterLink 
                            to={item.path}
                            style={{ 
                                textDecoration: 'none', 
                                color: 'inherit',
                            }}
                        >
                            <StyledSpan>
                                {item.label}
                            </StyledSpan>
                        </RouterLink>
                    </Box>
                ))}
            </Box>
        );
    }
}
