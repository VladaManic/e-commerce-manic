import {useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import {useContext } from 'react';
import ProductsContext from '../../context/products-context';

import Archive from '../../pages/Archive';
import Single from '../../pages/Single';

import { MainWrap } from './style';

const Main = () => {
	const productsCtx = useContext(ProductsContext);

	useEffect(() => {
    productsCtx.getAllCategories();
  }, [productsCtx.products]);

	return (
		<MainWrap>
			<Routes>
				<Route path="/" element={<Archive />} />
				<Route path="/article/:id" element={<Single />} />
			</Routes>
		</MainWrap>
	)
}

export default Main