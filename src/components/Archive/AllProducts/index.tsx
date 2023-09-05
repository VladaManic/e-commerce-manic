import {useContext, useEffect, useState} from 'react';
import ProductsContext from '../../../context/products-context';

import SingleProduct from '../SingleProduct';

// Styles
import { AllWrap } from './style';

// Types
import { ProductObj, CartItem } from '../../../types/interfaces';

const AllProducts = () => {
	const productsCtx = useContext(ProductsContext);
	const itemsStored = JSON.parse(localStorage.getItem('items') || "");
	const [cartItems, setCartItems] = useState<CartItem[]>(itemsStored);

	useEffect(() => {
		localStorage.setItem('items', JSON.stringify(cartItems));
	}, [cartItems]);

	const onClickCartHandler = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
		const id = parseInt(e.currentTarget.id);
		let newCartItems;
		const setItem = cartItems.filter((item: CartItem) => item.id === id);
		if(setItem.length > 0){
			const currentQuantity = setItem[0].quantity;
			const newQuantity = currentQuantity + 1;
			newCartItems = cartItems.map((item: CartItem) => item.id === id ? { ...item, quantity: newQuantity} : item)
		} else {
			newCartItems = [...cartItems, {id: id, quantity: 1}]
		}
		setCartItems(newCartItems);
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