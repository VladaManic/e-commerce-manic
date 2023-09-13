import { useEffect, useContext } from 'react';
import CartContext from '../../../context/cart-context';

import CartProduct from '../CartProduct';

import { ModalWrap, TitleWrap, ItemsWrap, TotalWrap } from './style';
import { CartItem } from '../../../types/interfaces';

const CartDisplay = () => {
	const cartCtx = useContext(CartContext);

	useEffect(() => {
    cartCtx.getTotal();
  }, [cartCtx.items]);

	return (
		<ModalWrap>
			<TitleWrap>Cart</TitleWrap>
			<ItemsWrap>
				{ cartCtx.items.map((cartItem: CartItem, index: number) => (
					<CartProduct key={index} cartItem={cartItem} />
				))}
			</ItemsWrap>
			<TotalWrap>{cartCtx.total} $</TotalWrap>
		</ModalWrap>
	)
}

export default CartDisplay