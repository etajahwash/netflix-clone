import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { RouterProvider } from 'react-router-dom';
import './styling/index.css'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App>
          <RouterProvider />
      </App>
    </Provider>
  </React.StrictMode>
);