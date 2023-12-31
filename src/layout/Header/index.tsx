import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import ModalContext from '../../context/ModalContext';
import clsx from 'clsx';

import { HeaderWrap, LogoWrap, CartBadge, CartIcon, CartCount, CartNumber, AnimationWrap, CartAnimation } from './style';
import shoppingCart from '../../assets/img/shopping-cart.png';

const Header = () => {
	const cartCtx = useContext(CartContext);
	const modalCtx = useContext(ModalContext);

	const onClickHandler = () => {
		modalCtx.setOpenCart(true);
	}

	return (
		<HeaderWrap>
			<LogoWrap>
				<NavLink className="logo-link" to='/' end>Store</NavLink>
			</LogoWrap>
			<CartBadge>
				<CartIcon src={ shoppingCart } className={clsx(cartCtx.items.length === 0 && 'empty-cart')} alt="Cart icon" onClick={onClickHandler} />
				<CartCount className={clsx(cartCtx.items.length === 0 && 'empty-cart')}>
					<CartNumber>{cartCtx.items.length !== 0 && cartCtx.items.length}</CartNumber>
				</CartCount>
				<AnimationWrap>
					<CartAnimation className={clsx(cartCtx.animationBoolean && 'show')}>Item(s) added</CartAnimation>
				</AnimationWrap>
			</CartBadge>
		</HeaderWrap>
	)
}

export default Header