import React from 'react';

export const themes = {
    light: {
        foreground: 'red',
        background: 'black',
    },
    dark: {
        foreground: 'blue',
        background: 'black',
    },
};

export const ThemeContext = React.createContext(
    themes.dark // default value
);