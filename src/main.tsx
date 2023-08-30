import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { ProductsContextProvider } from './context/products-context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ProductsContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductsContextProvider>,
)
