import styled from 'styled-components';
import { color } from '../../../shared/styles/variables';

export const ModalWrap = styled.div`
	
`;

export const TitleWrap = styled.p`
	margin-bottom: 40px;
	font-size: 16px;
	font-weight: 700;
`;

export const ItemsWrap = styled.div`
	
`;

export const TotalWrap = styled.p`
	padding: 15px;
	margin-bottom: 10px;
	border: 1px solid ${color.borderGreen};
	border-radius: 5px;
	font-size: 19.2px;
	font-weight: 700;
	text-align: center;
`;

export const ButtonsWrap = styled.div`
	display: flex;
	justify-content: center;
`;

export const ResetBtn = styled.button`
	margin-right: 15px;
	padding: 10px 5px;
	min-width: 90px;
	border-radius: 5px;
	background-color: ${color.resetBlack};
	color: ${color.defaultWhite};
`;

export const BuyBtn = styled.button`
	margin-left: 15px;
	padding: 10px 5px;
	min-width: 90px;
	border-radius: 5px;
	background-color: ${color.borderGreen};
	color: ${color.defaultWhite};
`;