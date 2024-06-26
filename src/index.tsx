import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import App from './App';

// 👇️ make sure to use the correct root element ID
// from your public/index.html file
const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
