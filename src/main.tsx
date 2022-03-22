import { StrictMode } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';

const root = document.getElementById('root');
if (root) {
  render(
    <StrictMode>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <App />
      </BrowserRouter>
    </StrictMode>,
    root,
  );
} else {
  // eslint-disable-next-line no-console
  console.error('There is no #root element in the dom');
}
