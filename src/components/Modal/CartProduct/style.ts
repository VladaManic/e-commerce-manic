import styled from 'styled-components';
import { color } from '../../../shared/styles/variables';

export const SingleWrap = styled.div`
	position: relative;
  display: flex;
	margin-bottom: 10px;
	padding: 10px;
	border-radius: 5px;
	background-color: ${color.cartGray};
`;

export const CloseBtn = styled.button`
	position: absolute;
	top: 0;
	left: 0;
  margin-right: 15px;
	width: 25px;
	height: 25px;
	border: 1px solid ${color.filterRed};
	border-radius: 25px;
	background-color: ${color.btnGray};
`;

export const ImgWrap = styled.div`
  margin-right: 15px;
`;

export const ProductImg = styled.img`
  width: 60px;
`;

export const DataWrap = styled.div`
	flex: 1;
`;

export const UpperWrap = styled.div`
  display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
`;

export const TitleWrap = styled.h3`
  margin: 0;
	font-size: 14px;
	font-weight: 400;
`;

export const DownerWrap = styled.div`
  display: flex;
	justify-content: space-between;
`;

export const PriceWrap = styled.p`
	font-size: 14px;
`;

export const TotalWrap = styled.p`
	font-size: 14px;
  font-weight: 700;
`;

