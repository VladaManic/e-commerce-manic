import { NavLink } from 'react-router-dom';

import shoppingCart from '../../assets/img/shopping-cart.png';

// Styles
import { HeaderWrap, CartIcon } from './style';

const Header = () => {
	return (
		<HeaderWrap>
			<NavLink to='/' end><p>Store</p></NavLink>
			<CartIcon src={ shoppingCart } alt="Cart icon" />
		</HeaderWrap>
	)
}

export default Header