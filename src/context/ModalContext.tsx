import { createContext, useState, PropsWithChildren } from 'react';

const ModalContext = createContext({
	openFilter: false,
	openCart: false,
	setOpenFilter: (param: boolean) => {null},
	setOpenCart: (param: boolean) => {null},
});

export const ModalContextProvider =({ children }: PropsWithChildren<object>) => {
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
			{children}
		</ModalContext.Provider>
	);
}

export default ModalContext;