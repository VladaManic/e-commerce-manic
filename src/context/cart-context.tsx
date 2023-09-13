import { createContext, useState } from 'react';
import isStorageSupported from '../helpers/isStorageSupported';

import { CartItem } from '../types/interfaces';

const CartContext = createContext({
	items: [],
	animationBoolean: false,
	total: 0,
	getItems: () => {null},
	setItems: (data: CartItem[]) => {null},
	setAnimation: () => {null},
	getTotal: () => {null},
});

export function CartContextProvider(props: any){
	//localStorage.clear();
	let itemsStored;
	if (!isStorageSupported("localStorage")) {
		itemsStored = [];
	} else {
		try {
			itemsStored = JSON.parse(localStorage.getItem('items') || "");
		} catch (err) {
			itemsStored = [];
		}
	}
	const [currentItems, setCurrentItems] = useState<any>(itemsStored);
	const [currentAnimation, setCurrentAnimation] = useState<boolean>(false);
	const [currentTotal, setCurrentTotal] = useState<number>(0);

	//Getting all products that are already set to cart
	const getItemsHandler = () => {
		return currentItems;
	}

	//Adding new cart items to local storage
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

	//Getting total price for all items on cart
	const getTotalHandler = () => {
		let totalValue = 0;
		currentItems.forEach((item: CartItem) => {
			totalValue = totalValue + item['total'];
		})
		//Round on 2 decimals
		const roundedValue = totalValue.toFixed(2);
		setCurrentTotal(parseFloat(roundedValue));
	}

	const context = {
		items: currentItems,
		animationBoolean: currentAnimation,
		total: currentTotal,
		getItems: getItemsHandler,
		setItems: setItemsHandler,
		setAnimation: setAnimationHandler,
		getTotal: getTotalHandler,
	} 

	return (
		<CartContext.Provider value={context}>
			{props.children}
		</CartContext.Provider>
	);
}

export default CartContext;