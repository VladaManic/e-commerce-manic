import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { LoadingContextProvider } from './context/loading-context';
import { ErrorContextProvider } from './context/error-context';
import { ProductsContextProvider } from './context/products-context';
import { CartContextProvider } from './context/cart-context';
import { ModalContextProvider } from './context/modal-context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <LoadingContextProvider>
    <ErrorContextProvider>
      <ProductsContextProvider>
        <CartContextProvider>
          <ModalContextProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ModalContextProvider>
        </CartContextProvider>
      </ProductsContextProvider>
    </ErrorContextProvider>
  </LoadingContextProvider>,
)
