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
                    justifyContent: 'center',
                    gap: '55px', // Устанавливаем отступ между пунктами меню
                }}
            >
                {this.props.menuItems.map((tabItem) => (
                    <Box 
                        component="li" 
                        key={tabItem} 
                        sx={{ 
                            '&:last-child': {
                                marginRight: 0, // Убираем margin-right у последнего элемента
                            },
                        }}
                    >
                        <Link 
                            href="#" 
                            sx={{ 
                                textDecoration: 'none', 
                                color: theme => theme.palette.text.secondary, // Цвет текста
                                textTransform: 'uppercase', // Преобразование текста в верхний регистр
                                fontFamily: 'Montserrat', // Используем шрифт Montserrat
                                fontSize: '12px', // Устанавливаем размер шрифта
                                fontWeight: 600, // Устанавливаем жирность шрифта
                                '&:hover': {
                                    color: theme => theme.palette.accent.main, // Цвет при наведении
                                },
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
