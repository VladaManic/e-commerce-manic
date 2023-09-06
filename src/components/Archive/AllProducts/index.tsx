import {useContext, useEffect} from 'react';
import ProductsContext from '../../../context/products-context';
import CartContext from '../../../context/cart-context';

import SingleProduct from '../SingleProduct';

// Styles
import { AllWrap } from './style';

// Types
import { ProductObj, CartItem } from '../../../types/interfaces';

const AllProducts = () => {
	const productsCtx = useContext(ProductsContext);
	const cartCtx = useContext(CartContext);

	useEffect(() => {
		localStorage.setItem('items', JSON.stringify(cartCtx.items));
		//console.log(cartCtx.items);
	}, [cartCtx.items]);

	const onClickCartHandler = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
		const id = parseInt(e.currentTarget.id);
		let newCartItems;
		const setItem = cartCtx.items.filter((item: CartItem) => item.id === id);
		if(setItem.length > 0){
			const currentQuantity = setItem[0]['quantity'];
			const newQuantity = currentQuantity + 1;
			newCartItems = cartCtx.items.map((item: CartItem) => item.id === id ? { ...item, quantity: newQuantity} : item)
		} else {
			newCartItems = [...cartCtx.items, {id: id, quantity: 1}]
		}
		cartCtx.setItems(newCartItems);
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