import React from 'react';

export class Menu extends React.Component<{ menuItems: Array<string> }> {
    render() {
        return (
            <div style={menuStyle}>
                <ul style={ulStyle}>
                    {this.props.menuItems.map((tabItem) => {
                        return (
                            <li key={tabItem} style={liStyle}>
                                <a href="#" style={linkStyle}>{tabItem}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

// Стили для меню
const menuStyle: React.CSSProperties = {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
};

const ulStyle: React.CSSProperties = {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
};

const liStyle: React.CSSProperties = {
    margin: '0 15px',
};

const linkStyle: React.CSSProperties = {
    textDecoration: 'none',
    color: '#FFFFFF', // Цвет текста
};