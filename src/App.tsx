import { createTheme, ThemeProvider } from '@suid/material';
import { Router } from 'solid-app-router';
import type { Component } from 'solid-js';
import { Routing } from './routing';


const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#212121',
      paper: '#424242',
    },
  },
});

const App: Component = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routing />
      </Router>
    </ThemeProvider>
  );
};

export default App;
