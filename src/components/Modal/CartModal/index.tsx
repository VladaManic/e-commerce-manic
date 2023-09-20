import { useContext } from 'react';
import CartContext from '../../../context/cart-context';

import CartEmpty from '../CartEmpty';
import CartDisplay from '../CartDisplay';

const CartModal = () => {
	const cartCtx = useContext(CartContext);

	return (
		<>
			{ cartCtx.items.length === 0 ? <CartEmpty /> : <CartDisplay /> }
		</>
	)
}

export default CartModal