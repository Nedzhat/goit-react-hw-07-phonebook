import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
