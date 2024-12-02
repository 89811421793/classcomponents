import React from 'react';

export class Menu extends React.Component<{ menuItems: Array<string> }> {
    render() {
        return (
            <ul style={ulStyle}>
                {this.props.menuItems.map((tabItem) => {
                    return (
                        <li key={tabItem} style={liStyle}>
                            <a href="#" style={linkStyle}>{tabItem}</a>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

// Стили для меню
const ulStyle: React.CSSProperties = {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flex: '1', 
    justifyContent: 'center',
};

const liStyle: React.CSSProperties = {
    margin: '0 15px',
};

const linkStyle: React.CSSProperties = {
    textDecoration: 'none',
    color: '#FFFFFF', 
};