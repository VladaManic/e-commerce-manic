import { useContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorContext from '../../context/error-context';
import ModalContext from '../../context/modal-context';

import Archive from '../../pages/Archive';
import Single from '../../pages/Single';
import ModalWrapper from '../../components/Modal/ModalWrapper';
import FilterModal from '../../components/Modal/FilterModal';
import CartModal from '../../components/Modal/CartModal';

import { MainWrap, LocalStorageErrorWrap, ErrorWrap } from './style';

const Main = () => {
	const errorCtx = useContext(ErrorContext);
	const modalCtx = useContext(ModalContext);
	//3 random default values for states
	const [closeCondition, setCloseCondition] = useState<boolean>(true);
	const [cartModalLocation, setCartModalLocation] = useState<HTMLElement | null>();
	const [filterModalLocation, setFilterModalLocation] = useState<HTMLElement | null>(document.getElementById('root'));
	
	return (
		<>
			<MainWrap>
				{ errorCtx.localStorageError !== '' && <LocalStorageErrorWrap>{errorCtx.localStorageError}</LocalStorageErrorWrap> }
				{ errorCtx.error !== '' ? <ErrorWrap>{errorCtx.error}</ErrorWrap> :
					<Routes>
						<Route path="/" element={<Archive />} />
						<Route path="/article/:id" element={<Single />} />
					</Routes>
				}
			</MainWrap>
			{ modalCtx.openCart && <ModalWrapper elementAppend={cartModalLocation} closeCondition={closeCondition} onClose={() => modalCtx.setOpenCart(false)}><CartModal /></ModalWrapper> }
			{ modalCtx.openFilter && <ModalWrapper elementAppend={filterModalLocation} closeCondition={closeCondition} onClose={() => modalCtx.setOpenFilter(false)}><FilterModal /></ModalWrapper> }
		</>
	)
}

export default Main