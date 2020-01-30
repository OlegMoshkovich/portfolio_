import React from 'react'

export const themes = {
    aec: {
        color: 'black',
    },
    developer: {
        color: 'blue'
    },
};

export const ThemeContext = React.createContext(themes.dark);


