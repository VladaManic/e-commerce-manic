import {useContext} from 'react';
import ProductsContext from '../../context/products-context';

import SingleProduct from '../../components/SingleProduct';

// Styles
import { AllWrap } from './style';

// Types
import { ProductObj } from '../../types/interfaces';

const Archive = () => {
	const productsCtx = useContext(ProductsContext);

	//console.log(productsCtx.products);

	return (
		<AllWrap>
			{productsCtx.products.map((singleProduct: ProductObj) => (
				<SingleProduct key={singleProduct.id} single={singleProduct} />
			))}
		</AllWrap>
	)
}

export default Archive