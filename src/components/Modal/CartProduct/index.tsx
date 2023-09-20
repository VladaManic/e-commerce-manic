import { useState, useContext } from 'react';
import ProductsContext from '../../../context/products-context';
import CartContext from '../../../context/cart-context';
import ErrorContext from '../../../context/error-context';
import isStorageSupported from '../../../helpers/isStorageSupported';

import { SingleWrap, CloseBtn, ImgWrap, ProductImg, DataWrap, UpperWrap, TitleWrap, DownerWrap, PriceWrap, TotalWrap } from './style';
import { ProductObj, CartItem } from '../../../types/interfaces';

interface Props {
	cartItem: CartItem;
	onClickClose: any;
}

const CartProduct = ({cartItem, onClickClose}: Props) => {
	const productsCtx = useContext(ProductsContext);
	const cartCtx = useContext(CartContext);
	const errorCtx = useContext(ErrorContext);
	const [quantity, setQuantity] = useState<number>(cartItem.quantity);

	const currentProduct = productsCtx.products.filter((singleProduct: ProductObj) => singleProduct.id === cartItem.id);

	const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
		const newValue = parseInt(e.currentTarget.value);
		const totalPrice = cartItem.price * newValue;
		setQuantity(newValue);
		const newCartItems = cartCtx.items.map((item: CartItem) => item.id === cartItem.id ? { ...item, quantity: newValue, price: cartItem.price, total: totalPrice} : item);
		isStorageSupported("localStorage") ? localStorage.setItem('items', JSON.stringify(newCartItems)) : errorCtx.setLocalStorageError('No local storage is available!');
		cartCtx.setItems(newCartItems);
	}

	return (
		<SingleWrap>
			<CloseBtn name={cartItem.id.toString()} onClick={onClickClose}>x</CloseBtn>
			<ImgWrap>
				<ProductImg src={currentProduct[0]['image']} alt={currentProduct[0]['title']} />
			</ImgWrap>
			<DataWrap>
				<UpperWrap>
					<TitleWrap>{currentProduct[0]['title']}</TitleWrap>
					<input type="number" value={quantity} min="1" onChange={onChangeHandler} onKeyDown={(e) => {e.preventDefault();}} />
				</UpperWrap>
				<DownerWrap>
					<PriceWrap>Price: {cartItem.price} $</PriceWrap>
					<TotalWrap>{cartItem.total} $</TotalWrap>
				</DownerWrap>
			</DataWrap>
		</SingleWrap>
	)
}

export default CartProduct