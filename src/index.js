import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './Login';
import Cadastro from "./Cadastro";
import Musicas from './Musicas'
import EditaMusica from './EditaMusica';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#DE9FD0',
      light: '#F1DBED',
      dark: '#b069a0',
      contrastText: '#772163',
    },
    secondary: {
      main: '#772163',
      light: '#ba8aff',
      dark: '#6620c5',
    },
    text: {
      primary: '#000',
      secondary: '#9e9e9e',
      hint: '#F1DBED',
      disabled: '#e8e8e8',
    },
    error: {
      main: '#d50000',
      contrastText: '#ffffff',
    },
    background: {
      default: '#F1DBED',
    },
    warning: {
      main: '#ffc80d',
    },
    info: {
      main: '#F5E9F2',
      light: '#DE9FD0',
      dark: '#ffffff',
      contrastText: '#772163'

    },
    success: {
      main: '#0ebd3a',
    },
    divider: '#5109b3',
  }
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/cadastro",
    element: <Cadastro />
  },
  {
    path: "/musicas",
    element: <Musicas />
  },
  {
    path: "/edicao/:id",
    element: <EditaMusica />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
