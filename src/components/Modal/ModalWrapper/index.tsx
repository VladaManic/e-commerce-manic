import { useContext } from 'react';
import ReactDom from 'react-dom';
import ModalContext from '../../../context/ModalContext';

import { ModalWrap, Overlay, ButtonWrap } from './style';

interface Props {
	children: any;
	closeCondition: boolean;
	onClose: any;
	elementAppend: HTMLElement | null | undefined;
}

const ModalWrapper = ({children, closeCondition, onClose, elementAppend = document.body}: Props) => {
	const modalCtx = useContext(ModalContext);

	const onClickHandler = () => {
		if(closeCondition){
			if(modalCtx.openFilter){
				modalCtx.setOpenFilter(false)
			} else if (modalCtx.openCart) {
				modalCtx.setOpenCart(false);
			}
		}
	}

	return ReactDom.createPortal(
		<>
			<Overlay onClick={onClickHandler} />
			<ModalWrap>
				<ButtonWrap onClick={onClose}>x</ButtonWrap>
				{children}
			</ModalWrap>
		</>,
    elementAppend!
  )
}

export default ModalWrapper