import { useContext } from 'react';
import ReactDom from 'react-dom';
import ModalContext from '../../../context/modal-context';

import { ModalWrap, Overlay, ButtonWrap } from './style';

interface Props {
	children: any;
	onClose: any;
}

const ModalWrapper = ({children, onClose }: Props) => {
	const modalCtx = useContext(ModalContext);

	return ReactDom.createPortal(
		<>
			<Overlay onClick={() => modalCtx.openFilter ? modalCtx.setOpenFilter(false) : modalCtx.setOpenCart(false)} />
			<ModalWrap>
				<ButtonWrap onClick={onClose}>x</ButtonWrap>
				{children}
			</ModalWrap>
		</>,
    document.body
  )
}

export default ModalWrapper