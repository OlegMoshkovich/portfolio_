import { createContext } from 'react';

//give the createContext a hook like shape -- state + updator
const ThemeContext = createContext(['green', () => { }])
//function in this case is a place holder - it will use this funciton if there is provider above it

export default ThemeContext;