import {useContext} from 'react';
import ProductsContext from '../../context/products-context';

import SingleProduct from '../../components/SingleProduct';

// Styles
import { AllWrap } from './style';

const Archive = () => {
	const productsCtx = useContext(ProductsContext);

	//console.log(productsCtx.products);

	return (
		<AllWrap>
			{productsCtx.products.map((singleProduct: any) => (
				<SingleProduct key={singleProduct.id} single={singleProduct} />
				// singleProduct.title
			))}
		</AllWrap>
	)
}

export default Archive