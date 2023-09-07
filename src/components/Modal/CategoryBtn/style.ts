import styled from 'styled-components';
import { color } from '../../../shared/styles/variables';

export const ButtonWrap = styled.button`
		margin-right: 3px;
		margin-left: 3px;
		padding: 5px;
		border-radius: 5px;
		background-color: ${color.borderGreen};
		font-size: 14px;
		color: ${color.defaultWhite};

		&:hover {
			background-color: ${color.cartOrange};
		}
`;