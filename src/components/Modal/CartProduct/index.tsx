import { useState, useContext } from 'react';
import ProductsContext from '../../../context/products-context';
import CartContext from '../../../context/cart-context';
import ErrorContext from '../../../context/error-context';
import isStorageSupported from '../../../helpers/isStorageSupported';
import clsx from 'clsx';

import Loader from '../../../layout/Loader';

import { SingleWrap, CloseBtn, LoaderWrap, ImgWrap, ProductImg, DataWrap, UpperWrap, TitleWrap, DownerWrap, PriceWrap, TotalWrap } from './style';
import { ProductObj, CartItem } from '../../../types/interfaces';

interface Props {
	cartItem: CartItem;
	onClickClose: any;
}

const CartProduct = ({cartItem, onClickClose}: Props) => {
	const productsCtx = useContext(ProductsContext);
	const cartCtx = useContext(CartContext);
	const errorCtx = useContext(ErrorContext);
	const [loaderItem, setLoaderItem] = useState<boolean>(true); 
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
		<>
			<LoaderWrap className={clsx(!loaderItem && 'hide')}>
				<Loader />
			</LoaderWrap>
			<SingleWrap className={clsx(loaderItem && 'hide')}>
				<CloseBtn name={cartItem.id.toString()} onClick={onClickClose}>x</CloseBtn>
				<ImgWrap>
					<ProductImg src={currentProduct[0]['image']} alt={currentProduct[0]['title']} onLoad={() => setLoaderItem(false)} />
				</ImgWrap>
				<DataWrap>
					<UpperWrap>
						<TitleWrap>{currentProduct[0]['title']}</TitleWrap>
						<input type="number" id="product-quantity" value={quantity} min="1" onChange={onChangeHandler} onKeyDown={(e) => {e.preventDefault();}} />
					</UpperWrap>
					<DownerWrap>
						<PriceWrap>Price: {cartItem.price} $</PriceWrap>
						<TotalWrap>{cartItem.total} $</TotalWrap>
					</DownerWrap>
				</DataWrap>
			</SingleWrap>
		</>
	)
}

export default CartProduct