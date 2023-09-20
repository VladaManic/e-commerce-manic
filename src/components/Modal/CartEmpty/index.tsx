import shoppingCart from '../../../assets/img/shopping-cart.png';

import { ModalWrap, TitleWrap, ImgWrap, CartImg, TextWrap } from './style';

const CartEmpty = () => {
	return (
		<ModalWrap>
			<TitleWrap>Cart</TitleWrap>
			<ImgWrap>
				<CartImg src={shoppingCart} alt="Empty cart" />
			</ImgWrap>
			<TextWrap>Cart empty</TextWrap>
		</ModalWrap>
	)
}

export default CartEmpty