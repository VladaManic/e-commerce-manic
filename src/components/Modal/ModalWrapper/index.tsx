import ReactDom from 'react-dom';
import {useContext} from 'react';
import ModalContext from '../../../context/modal-context';

import { ModalWrap, Overlay, ButtonWrap } from './style';

interface Props {
	open: boolean;
	children: any;
	onClose: any;
}

const ModalWrapper = ({ open, children, onClose }: Props) => {
	const modalCtx = useContext(ModalContext);

	if (!open) return null;

	const onClickHandler = () => {
		modalCtx.setIsOpen(false);
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