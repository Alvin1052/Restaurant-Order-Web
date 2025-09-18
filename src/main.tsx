import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import ReactQUeryProvider from './providers/ReactQUeryProvider.tsx';
import { Provider } from 'react-redux';
import store from './Store/store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ReactQUeryProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ReactQUeryProvider>
    </BrowserRouter>
  </StrictMode>
);
