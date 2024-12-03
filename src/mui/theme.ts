import { createTheme, PaletteOptions } from '@mui/material/styles';

// Расширяем PaletteOptions
declare module '@mui/material/styles' {
    interface Palette {
        accent: {
            main: string;
        };
    }
    interface PaletteOptions {
        accent?: {
            main: string;
        };
    }
}

// Создаем тему, используя ThemeOptions
const theme = createTheme({
    palette: {
        primary: {
            main: '#FE390C',
        },
        secondary: {
            main: '#111214',
        },
        accent: { // Теперь это допустимо
            main: '#FE390C',
        },
        text: {
            primary: '#111214',
            secondary: '#A9A9AA',
        },
        background: {
            default: '#242424', // Темный фон
            paper: '#ffffff', // Светлый фон
        },
    } as PaletteOptions, // Указываем кастомный тип для палитры
    
    typography: {
        fontFamily: 'Anton, Montserrat, Arial, sans-serif',
        h1: {
            fontSize: '3.2em',
            lineHeight: 1.1,
        },
        button: {
            fontWeight: 500,
        },
    },
    shape: {
        borderRadius: 8,
    },
});

export default theme;
