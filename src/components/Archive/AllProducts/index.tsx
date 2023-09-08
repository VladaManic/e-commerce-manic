import {useContext, useEffect} from 'react';
import ProductsContext from '../../../context/products-context';
import CartContext from '../../../context/cart-context';

import SingleProduct from '../SingleProduct';

import { AllWrap } from './style';
import { ProductObj, CartItem } from '../../../types/interfaces';

const AllProducts = () => {
	const productsCtx = useContext(ProductsContext);
	const cartCtx = useContext(CartContext);

	useEffect(() => {
		localStorage.setItem('items', JSON.stringify(cartCtx.items));
		console.log(cartCtx.items);
	}, [cartCtx.items]);

	const onClickHandler = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
		const id = parseInt(e.currentTarget.id);
		const price = parseFloat(e.currentTarget.name);
		let newCartItems;
		//Getting product with setelcted id
		const setItem = cartCtx.items.filter((item: CartItem) => item.id === id);
		//If product is added for the forst time
		if(setItem.length > 0){
			const newQuantity = setItem[0]['quantity'] + 1;
			const totalPrice = setItem[0]['total'] + price;
			newCartItems = cartCtx.items.map((item: CartItem) => item.id === id ? { ...item, quantity: newQuantity, price: price, total: totalPrice} : item);
		//If product is added for the first time
		} else {
			newCartItems = [...cartCtx.items, {id: id, quantity: 1, price: price, total: price}]
		}
		cartCtx.setItems(newCartItems);
		cartCtx.setAnimation();
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