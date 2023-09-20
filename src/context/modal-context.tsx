import { createContext, useState } from 'react';

const ModalContext = createContext({
	isOpen: false,
	modalType: true,
	setIsOpen: (param: boolean) => {null},
	setModalType: (param: boolean) => {null},
});

export function ModalContextProvider(props: any){
	const [currentIsOpen, setCurrentIsOpen] = useState<boolean>(false);
	const [currentModalType, setCurrentModalType] = useState<boolean>(true);

	const setIsOpenHandler = (param: boolean) => {
		setCurrentIsOpen(param);
	}

	const setModalTypeHandler = (param: boolean) => {
		setCurrentModalType(param);
	}

	const context = {
		isOpen: currentIsOpen,
		modalType: currentModalType,
		setIsOpen: setIsOpenHandler,
		setModalType: setModalTypeHandler, 
	} 

	return (
		<ModalContext.Provider value={context}>
			{props.children}
		</ModalContext.Provider>
	);
}

export default ModalContext;