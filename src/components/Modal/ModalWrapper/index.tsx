import ReactDom from 'react-dom';

import { ModalWrap, Overlay, ButtonWrap } from './style';

interface Props {
	open: boolean;
	children: any;
	onClose: any;
}

const ModalWrapper = ({ open, children, onClose }: Props) => {
	if (!open) return null;

	return ReactDom.createPortal(
		<>
			<Overlay />
			<ModalWrap>
				<ButtonWrap onClick={onClose}>x</ButtonWrap>
				{children}
			</ModalWrap>
		</>,
    document.body
  )
}

export default ModalWrapper