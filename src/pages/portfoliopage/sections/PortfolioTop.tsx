import React, { Component } from 'react';
import pagetopBg from '../../../assets/images/pagetop_bg.jpg';
import portfolioLetters from '../../../assets/images/Portfolio_letters.png';

type PortfolioTopProps = {}

type PortfolioTopState = {}

export class PortfolioTop extends Component<PortfolioTopProps, PortfolioTopState> {
    render() {
        const sectionStyle: React.CSSProperties = {
            minHeight: '80vh',
            backgroundImage: `url(${pagetopBg})`, // Устанавливаем фоновое изображение
            backgroundSize: 'cover', // 'cover' для фона
            backgroundPosition: 'center', // Центрируем фон
            backgroundRepeat: 'no-repeat', // Не повторяем фон
            position: 'relative', // Для позиционирования текста
            display: 'flex', // Для центрирования текста
            alignItems: 'center', // Вертикальное центрирование
            justifyContent: 'center', // Горизонтальное центрирование
            color: 'white', // Цвет текста
            textAlign: 'center', // Выравнивание текста
        };

        const overlayStyle: React.CSSProperties = {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${portfolioLetters})`, // Устанавливаем второе изображение
            backgroundSize: 'contain', // 'contain' для текста
            backgroundPosition: 'center', // Центрируем текст
            backgroundRepeat: 'no-repeat', // Не повторяем текст
            opacity: 0.8, // Устанавливаем прозрачность для текста
            display: 'flex', // Для центрирования текста
            alignItems: 'center', // Вертикальное центрирование
            justifyContent: 'center', // Горизонтальное центрирование
        };

        return (
            <section style={sectionStyle}>
                <div style={overlayStyle}>
               
                </div>
            </section>
        );
    }
}

