import { createContext, useState } from 'react';

const ModalContext = createContext({
	openFilter: false,
	openCart: false,
	setOpenFilter: (param: boolean) => {null},
	setOpenCart: (param: boolean) => {null},
});

export function ModalContextProvider(props: any){
	const [currentOpenFilter, setCurrentOpenFilter] = useState<boolean>(false);
	const [currentOpenCart, setCurrentOpenCart] = useState<boolean>(false);

	const setOpenFilter = (param: boolean) => {
		setCurrentOpenFilter(param);
	}

	const setOpenCart = (param: boolean) => {
		setCurrentOpenCart(param);
	}

	const context = {
		openFilter: currentOpenFilter,
		openCart: currentOpenCart,
		setOpenFilter: setCurrentOpenFilter,
		setOpenCart: setCurrentOpenCart,
	} 

	return (
		<ModalContext.Provider value={context}>
			{props.children}
		</ModalContext.Provider>
	);
}

export default ModalContext;