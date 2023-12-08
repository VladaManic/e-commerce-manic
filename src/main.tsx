import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { LoadingContextProvider } from './context/LoadingContext.tsx';
import { ErrorContextProvider } from './context/ErrorContext.tsx';
import { ProductsContextProvider } from './context/ProductsContext.tsx';
import { CartContextProvider } from './context/CartContext.tsx';
import { ModalContextProvider } from './context/ModalContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
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
		</LoadingContextProvider>
	</React.StrictMode>
);
