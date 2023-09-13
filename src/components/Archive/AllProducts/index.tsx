import {useContext} from 'react';
import ProductsContext from '../../../context/products-context';
import CartContext from '../../../context/cart-context';
import ErrorContext from '../../../context/error-context';
import isStorageSupported from '../../../helpers/isStorageSupported';

import SingleProduct from '../SingleProduct';

import { AllWrap } from './style';
import { ProductObj, CartItem } from '../../../types/interfaces';

const AllProducts = () => {
	const productsCtx = useContext(ProductsContext);
	const cartCtx = useContext(CartContext);
	const errorCtx = useContext(ErrorContext);

	const onClickHandler = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
		const id = parseInt(e.currentTarget.id);
		const price = parseFloat(e.currentTarget.name);
		let newCartItems;
		//Getting product with setelcted id
		const setItem = cartCtx.items.filter((item: CartItem) => item.id === id);
		//If product is already added
		if(setItem.length > 0){
			const newQuantity = setItem[0]['quantity'] + 1;
			const totalPrice = setItem[0]['total'] + price;
			newCartItems = cartCtx.items.map((item: CartItem) => item.id === id ? { ...item, quantity: newQuantity, price: price, total: totalPrice} : item);
		//If product is added for the first time
		} else {
			newCartItems = [...cartCtx.items, {id: id, quantity: 1, price: price, total: price}]
		}
		if (!isStorageSupported("localStorage")) {
			errorCtx.setLocalStorageError('No local storage is available!');
		} else {
			try {
				localStorage.setItem('items', JSON.stringify(newCartItems));
			} catch (err) {
				errorCtx.setLocalStorageError('Your local storage is full. Please, reset it.');
			}
		}
		cartCtx.setItems(newCartItems);
		cartCtx.setAnimation();
		console.log(localStorage !== null ? JSON.parse(localStorage.getItem('items') || "") : []);
	}

	return (
		<AllWrap>
			{productsCtx.filteredGroup.map((singleProduct: ProductObj) => (
				<SingleProduct key={singleProduct.id} single={singleProduct} onClickCart={onClickHandler} />
			))}
		</AllWrap>
	)
}

export default AllProducts