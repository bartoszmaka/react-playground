import { createContext } from 'react';

export const themes = {
  dark: {
    background: '#444',
    foreground: '#eee'
  },
  light: {
    background: '#fff',
    foreground: '#222'
  }
}

export default createContext({
  theme: themes.light,
  toggleTheme: () => {},
})
