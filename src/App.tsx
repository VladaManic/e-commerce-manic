import {useEffect, useContext} from 'react';
import GeneralStyles from './shared/styles/GeneralStyles';
import ProductsContext from './context/products-context';

import Header from './layout/Header';
import Main from './layout/Main';

function App() {
  const productsCtx = useContext(ProductsContext);

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then(res=>res.json())
      // .then(json=>console.log(json))
      .then((data) => {
				productsCtx.setData(data);
      })
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
