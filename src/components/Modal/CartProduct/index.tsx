import { useState, useContext } from 'react';
import ProductsContext from '../../../context/products-context';
import CartContext from '../../../context/cart-context';

import { SingleWrap, ImgWrap, ProductImg, DataWrap, UpperWrap, TitleWrap, DownerWrap, PriceWrap, TotalWrap } from './style';
import { ProductObj, CartItem } from '../../../types/interfaces';

interface Props {
	cartItem: CartItem;
	//onClickCart: any;
}

const CartProduct = ({cartItem}: Props) => {
	const productsCtx = useContext(ProductsContext);
	const cartCtx = useContext(CartContext);
	const [quantity, setQuantity] = useState<number>(cartItem.quantity);

	const currentProduct = productsCtx.products.filter((singleProduct: ProductObj) => singleProduct.id === cartItem.id);

	const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
		const id = parseInt(e.currentTarget.id);
		const newValue = parseInt(e.currentTarget.value);
		const price = parseFloat(e.currentTarget.name);
		const totalPrice = price * newValue;
		setQuantity(newValue);
		const newCartItems = cartCtx.items.map((item: CartItem) => item.id === id ? { ...item, quantity: newValue, price: price, total: totalPrice} : item);
		localStorage !== null && localStorage.setItem('items', JSON.stringify(newCartItems));
		cartCtx.setItems(newCartItems);
		console.log(localStorage !== null ? JSON.parse(localStorage.getItem('items') || "") : []);
	}

	return (
		<SingleWrap>
			<ImgWrap>
				<ProductImg src={currentProduct[0]['image']} alt={currentProduct[0]['title']} />
			</ImgWrap>
			<DataWrap>
				<UpperWrap>
					<TitleWrap>{currentProduct[0]['title']}</TitleWrap>
					<input type="number" id={cartItem.id.toString()} name={cartItem.price.toString()} value={quantity} min="1" onChange={onChangeHandler} />
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