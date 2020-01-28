import { createContext } from 'react';

//give the createContext a hook like shape -- state + updator
const ThemeContext = createContext([{}, () => { }])

//function in this case is a place holder - it will use this funciton if there is provider above it
export const ThemePolitics = {
    pageBackground: 'black',
    font: 'Times New Roman',
    color: 'white',
    contentBackground: 'black',
    border: 'black',
    align: 'center'
}
export const ThemeArt = {
    pageBackground: '#BACFC9',
    font: 'Open+Sans',
    color: 'white',
    contentBackground: '#FFC696',
    border: 'white'
}
export const ThemeTechnology = {
    pageBackground: 'lightgrey',
    font: 'Inconsolata',
    color: 'blue',
    fontWeight: 'bold',
    contentBackground: 'yellow',
    radius: '15px',
    border: 'yellow'
}
export const ThemeDefault = {
    pageBackground: 'blue',
    font: 'Roboto',
    color: 'white',
    contentBackground: 'blue',
    border: 'white'
};

export const ThemeAEC = {
    pageBackground: 'black',
    font: 'Roboto',
    color: 'white',
    contentBackground: 'black',
    border: 'white'
};


export default ThemeContext;