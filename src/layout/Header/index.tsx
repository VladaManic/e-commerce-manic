import {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../../context/cart-context';
import clsx from 'clsx';

import { HeaderWrap, CartBadge, CartIcon, CartCount, CartNumber, AnimationWrap, CartAnimation } from './style';
import shoppingCart from '../../assets/img/shopping-cart.png';

const Header = () => {
	const cartCtx = useContext(CartContext);

	return (
		<HeaderWrap>
			<NavLink to='/' end><p>Store</p></NavLink>
			<CartBadge>
				<CartIcon src={ shoppingCart } className={clsx(cartCtx.items.length === 0 && 'empty-cart')} alt="Cart icon" />
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