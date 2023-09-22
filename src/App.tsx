import {useEffect, useContext} from 'react';
import GeneralStyles from './shared/styles/GeneralStyles';
import LoadingContext from './context/LoadingContext';
import ErrorContext from './context/ErrorContext';
import ProductsContext from './context/ProductsContext';

import Header from './layout/Header';
import Main from './layout/Main';

function App() {
  const loadingCtx = useContext(LoadingContext);
  const errorCtx = useContext(ErrorContext);
  const productsCtx = useContext(ProductsContext);

  const handleError = (error: any) => {
    errorCtx.setError(error.message)
    console.log(error.message);
  }

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then(res=>res.json())
      .then((data) => {
				productsCtx.setData(data);
        loadingCtx.setLoading(false);
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
