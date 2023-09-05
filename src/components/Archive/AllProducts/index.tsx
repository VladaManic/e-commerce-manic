import {useContext, useEffect, useState} from 'react';
import ProductsContext from '../../../context/products-context';

import SingleProduct from '../SingleProduct';

// Styles
import { AllWrap } from './style';

// Types
import { ProductObj } from '../../../types/interfaces';

const AllProducts = () => {
	const productsCtx = useContext(ProductsContext);
	const [cartItems, setCartItems] = useState<any>([]);

	useEffect(() => {
		console.log(cartItems);
	}, [cartItems]);

	const onClickCartHandler = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
		const id = parseInt(e.currentTarget.id);
		console.log(id);
	}

	return (
		<AllWrap>
			{productsCtx.filteredGroup.map((singleProduct: ProductObj) => (
				<SingleProduct key={singleProduct.id} single={singleProduct} onClickCart={onClickCartHandler} />
			))}
		</AllWrap>
	)
}

export default AllProducts