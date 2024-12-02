import React from 'react';
import { Icon } from '../Icon'; // Убедитесь, что этот компонент работает
import { Menu } from '../menu/Menu';
import { Button, Container } from '@mui/material';

const items = ["home", "about", "service", "portfolio"];

export class Header extends React.Component {
    render() {
        return (
            <header style={headerStyle}>
                <Container style={containerStyle}>
                    <div style={logoStyle}>
                        <Icon iconId='foxlogo' />
                    </div>
                    <Menu menuItems={items} />
                    <div style={buttonContainerStyle}>
                        <Button variant="contained" color="primary">
                            Contact
                        </Button>
                    </div>
                </Container>
            </header>
        );
    }
}

// Стили для шапки
const headerStyle: React.CSSProperties = {
    padding: '10px 20px',
    backgroundColor: '#242424', // Используем фон из темы
    color: '#FFFFFF', // Цвет текста
    width: '100%',
};

// Стили для контейнера
const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', // Выровнять по вертикали
    height: '60px', // Задайте фиксированную высоту для выравнивания
};

// Стили для логотипа
const logoStyle: React.CSSProperties = {
    flex: '0 0 auto',
    width: '50px', // Задайте ширину логотипа
    height: '50px', // Задайте высоту логотипа
};

// Стили для контейнера кнопки
const buttonContainerStyle: React.CSSProperties = {
    flex: '0 0 auto',
};
