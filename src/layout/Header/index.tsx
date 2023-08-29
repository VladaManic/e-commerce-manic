import shoppingCart from '../../assets/img/shopping-cart.png'

// Styles
import { HeaderWrap, CartIcon } from './style';

const Header = () => {
	return (
		<HeaderWrap>
			<p>Store</p>
			<CartIcon src={ shoppingCart } alt="Cart icon" />
		</HeaderWrap>
	)
}

export default Header