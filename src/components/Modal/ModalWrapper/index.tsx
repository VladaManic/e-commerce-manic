import { useContext } from 'react';
import ReactDom from 'react-dom';
import ModalContext from '../../../context/modal-context';

import { ModalWrap, Overlay, ButtonWrap } from './style';

interface Props {
	children: any;
	wrapperId: string;
	closeCondition: boolean;
	onClose: any;
}

const ModalWrapper = ({children, wrapperId, closeCondition, onClose}: Props) => {
	const modalCtx = useContext(ModalContext);
	let elementAppend = document.getElementById(wrapperId);

	if (!elementAppend) {
    elementAppend = document.body;
  }

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
    elementAppend
  )
}

export default ModalWrapper