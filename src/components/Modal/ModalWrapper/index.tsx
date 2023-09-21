import { useContext } from 'react';
import ReactDom from 'react-dom';
import ModalContext from '../../../context/modal-context';

import { ModalWrap, Overlay, ButtonWrap } from './style';

interface Props {
	children: any;
	onClose: any;
	closeCondition: boolean;
}

const ModalWrapper = ({children, onClose, closeCondition }: Props) => {
	const modalCtx = useContext(ModalContext);

	const onClickHandler = () => {
		if(closeCondition){
			modalCtx.openFilter ? modalCtx.setOpenFilter(false) : modalCtx.setOpenCart(false);
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
    document.body
  )
}

export default ModalWrapper