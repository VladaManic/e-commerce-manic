import {useEffect, useContext} from 'react';
import GeneralStyles from './shared/styles/GeneralStyles';
import ErrorContext from './context/error-context';
import ProductsContext from './context/products-context';

import Header from './layout/Header';
import Main from './layout/Main';

function App() {
  const errorCtx = useContext(ErrorContext);
  const productsCtx = useContext(ProductsContext);

  const handleError = async (error: any) => {
    errorCtx.setError(error.message)
    await console.log(error.message);
  }

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then(res=>res.json())
      .then((data) => {
				productsCtx.setData(data);
      })
      .catch(error => handleError(error));

    fetch("https://fakestoreapi.com/products/categories")
      .then(res=>res.json())
      .then((data) => {
        productsCtx.setAllCategories(data);
      })
      .catch(error => handleError(error));
  };
	useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <GeneralStyles />
      <Header />
      <Main />
    </>
  )
}

export default App
