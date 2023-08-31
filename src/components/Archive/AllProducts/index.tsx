import {useContext} from 'react';
import ProductsContext from '../../../context/products-context';

import SingleProduct from '../SingleProduct';

// Styles
import { AllWrap } from './style';

// Types
import { ProductObj } from '../../../types/interfaces';

const AllProducts = () => {
	const productsCtx = useContext(ProductsContext);

	//console.log(productsCtx.filteredGroup);

	return (
		<AllWrap>
			{productsCtx.filteredGroup.map((singleProduct: ProductObj) => (
				<SingleProduct key={singleProduct.id} single={singleProduct} />
			))}
		</AllWrap>
	)
}

export default AllProducts