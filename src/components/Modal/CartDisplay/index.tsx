import { useEffect, useContext } from 'react';
import CartContext from '../../../context/cart-context';
import ErrorContext from '../../../context/error-context';
import isStorageSupported from '../../../helpers/isStorageSupported';

import CartProduct from '../CartProduct';

import { ModalWrap, TitleWrap, ItemsWrap, TotalWrap, ButtonsWrap, ResetBtn, BuyBtn } from './style';
import { CartItem } from '../../../types/interfaces';

const CartDisplay = () => {
	const cartCtx = useContext(CartContext);
	const errorCtx = useContext(ErrorContext);

	useEffect(() => {
    cartCtx.getTotal();
  }, [cartCtx.items]);

	const onClickHandler = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
		const id = parseInt(e.currentTarget.name);
		const removedItems = (cartCtx.items.filter((item: CartItem) => item.id !== id));
		isStorageSupported("localStorage") ? localStorage.setItem('items', JSON.stringify(removedItems)) : errorCtx.setLocalStorageError('No local storage is available!');
		cartCtx.setItems(removedItems);
		//console.log(localStorage !== null ? JSON.parse(localStorage.getItem('items') || "") : []);
	}

	const onClickResetHandler = () => {
		isStorageSupported("localStorage") ? localStorage.removeItem('items') : errorCtx.setLocalStorageError('No local storage is available!');
		cartCtx.setItems([]);
	}

	return (
		<ModalWrap>
			<TitleWrap>Cart</TitleWrap>
			<ItemsWrap>
				{ cartCtx.items.map((cartItem: CartItem, index: number) => (
					<CartProduct key={index} cartItem={cartItem} onClickClose={onClickHandler} />
				))}
			</ItemsWrap>
			<TotalWrap>{cartCtx.total} $</TotalWrap>
			<ButtonsWrap>
				<ResetBtn onClick={onClickResetHandler}>Clear</ResetBtn>
				<BuyBtn>Buy</BuyBtn>
			</ButtonsWrap>
		</ModalWrap>
	)
}

export default CartDisplay