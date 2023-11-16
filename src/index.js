import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'components/App';
// import { ModalContextProvider } from 'context/ModalContext';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <ModalContextProvider>
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  // </ModalContextProvider>
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
    // <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
