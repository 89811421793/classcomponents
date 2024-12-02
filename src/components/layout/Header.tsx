import React from 'react';
import { Icon } from '../Icon';
import { Menu } from '../menu/Menu';
import { Button } from '@mui/material'; // Импортируем кнопку из MUI

const items = ["home", "about", "service", "portfolio"];

export class Header extends React.Component {
    render() {
        return (
            <header style={headerStyle}>
                <div style={logoStyle}>
                    <Icon iconId='foxlogo' />
                </div>
                <Menu menuItems={items} />
                <div style={buttonContainerStyle}>
                    <Button variant="contained" color="primary">
                        Contact
                    </Button>
                </div>
            </header>
        );
    }
}

// Стили для шапки
const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#242424', // Используем фон из темы
    color: '#FFFFFF', // Цвет текста
    width: '100%',
};

// Стили для логотипа
const logoStyle: React.CSSProperties = {
    flex: '0 0 auto',
};

// Стили для контейнера кнопки
const buttonContainerStyle: React.CSSProperties = {
    flex: '0 0 auto',
};
