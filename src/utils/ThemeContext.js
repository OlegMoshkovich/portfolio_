import { createContext } from 'react';

//give the createContext a hook like shape -- state + updator
const ThemeContext = createContext([{}, () => { }])
//function in this case is a place holder - it will use this funciton if there is provider above it
export const ThemePolitics = {
    pageBackground: 'black',
    font: 'Times New Roman',
    contentBackground: 'black',
    border: 'black'
}
export const ThemeArt = {
    pageBackground: '#BACFC9',
    font: 'Open+Sans',
    contentBackground: '#FFC696',
    border: 'white'
}
export const ThemeTechnology = {
    pageBackground: 'lightgrey',
    font: 'Inconsolata',
    contentBackground: '#00ff00',
    border: 'yellow'
}

export default ThemeContext;