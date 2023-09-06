import { createContext, useState } from 'react';

// Types
import {CartItem} from '../types/interfaces';

const CartContext = createContext({
	items: [],
	getItems: () => {null},
	setItems: (data: CartItem[]) => {null},
});

export function CartContextProvider(props: any){
	//localStorage.clear();
	const itemsStored = localStorage["items"] ? JSON.parse(localStorage.getItem('items') || "") : [];
	const [currentItems, setCurrentItems] = useState<any>(itemsStored);

	const getItemsHandler = () => {
		return currentItems;
	}

	const setItemsHandler = (data: CartItem[]) => {
		setCurrentItems(data);
	}

	const context = {
		items: currentItems,
		getItems: getItemsHandler,
		setItems: setItemsHandler,
	} 

	return (
		<CartContext.Provider value={context}>
			{props.children}
		</CartContext.Provider>
	);
}

export default CartContext;