import {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../../context/cart-context';
import clsx from 'clsx';

import { HeaderWrap, CartIcon } from './style';
import shoppingCart from '../../assets/img/shopping-cart.png';

const Header = () => {
	const cartCtx = useContext(CartContext);

	return (
		<HeaderWrap>
			<NavLink to='/' end><p>Store</p></NavLink>
			<CartIcon src={ shoppingCart } className={clsx(cartCtx.items.length === 0 && 'empty-cart')} alt="Cart icon" />
		</HeaderWrap>
	)
}

export default Header