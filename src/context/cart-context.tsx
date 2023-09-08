import {createContext, useState} from 'react';

import {CartItem} from '../types/interfaces';

const CartContext = createContext({
	items: [],
	animationBoolean: false,
	getItems: () => {null},
	setItems: (data: CartItem[]) => {null},
	setAnimation: () => {null},
});

export function CartContextProvider(props: any){
	//localStorage.clear();
	const itemsStored = localStorage["items"] ? JSON.parse(localStorage.getItem('items') || "") : [];
	const [currentItems, setCurrentItems] = useState<any>(itemsStored);
	const [currentAnimation, setCurrentAnimation] = useState<boolean>(false);

	//Getting all products that are already set to cart
	const getItemsHandler = () => {
		return currentItems;
	}

	const setItemsHandler = (data: CartItem[]) => {
		setCurrentItems(data);
	}

	//Enabling animation after product added to cart for 2s
	const setAnimationHandler = () => {
		setCurrentAnimation(true);
		setTimeout(() => {
			setCurrentAnimation(false);
		}, 2000);
	}

	const context = {
		items: currentItems,
		animationBoolean: currentAnimation,
		getItems: getItemsHandler,
		setItems: setItemsHandler,
		setAnimation: setAnimationHandler,
	} 

	return (
		<CartContext.Provider value={context}>
			{props.children}
		</CartContext.Provider>
	);
}

export default CartContext;