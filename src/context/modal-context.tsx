import { createContext, useState } from 'react';

const ModalContext = createContext({
	isOpen: false,
	setIsOpen: (param: boolean) => {null},
});

export function ModalContextProvider(props: any){
	const [currentIsOpen, setCurrentIsOpen] = useState<boolean>(false);

	const setIsOpenHandler = (param: boolean) => {
		setCurrentIsOpen(param);
	}

	const context = {
		isOpen: currentIsOpen,
		setIsOpen: setIsOpenHandler,
	} 

	return (
		<ModalContext.Provider value={context}>
			{props.children}
		</ModalContext.Provider>
	);
}

export default ModalContext;