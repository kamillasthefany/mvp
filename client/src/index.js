import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { theme } from './styles/theme';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from './contexts/authContext';
import { Routes } from './App/index';
import './styles.css';

const queryClient = new QueryClient();

ReactDOM.render(
  <>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </QueryClientProvider>
    </AuthProvider>
  </>,
  document.getElementById('root')
);