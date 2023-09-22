import styled from 'styled-components';
import { color } from '../../shared/styles/variables';

export const LoaderWrap = styled.div`
	 &.hide {
		display: none;
	 }
`;

export const SingleWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 65%;
	margin-right: auto;
	margin-left: auto;

	&.hide {
		display: none;
	}
`;

export const ImageWrap = styled.div`
	position: relative;
	flex-basis: 49%;
	height: 200px;
	padding-top: 20px;
	padding-bottom: 20px;
	border-radius: 10px;
	background-color: ${color.defaultWhite};
	text-align: center;
`;

export const BackIcon = styled.img`
	position: absolute;
	top: 5px;
	left: 5px;
  max-width: 33px;
`;

export const ProductImg = styled.img`
  height: 100%;
`;

export const DataWrap = styled.div`
	flex-basis: 49%;
`;

export const Price = styled.p`
	margin-bottom: 10px;
	font-size: 18px;
	line-height: 22px;
	font-weight: 700;
	color: ${color.priceGreen};
`;

export const QuantityWrap = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 15px;
`;

export const TotalPrice = styled.p`
	font-size: 18px;
	line-height: 22px;
`;

export const CartBtn = styled.button`
	padding: 10px;
	margin-bottom: 20px;
	border-radius: 5px;
	background-color: ${color.borderGreen};
	color: ${color.defaultWhite};
`;

export const Category = styled.p`
	margin-bottom: 10px; 
	font-size: 11px;
	line-height: 11px;
	font-style: italic;
	text-transform: uppercase;
	//color: ${color.categoryBlack};
`;

export const Title = styled.h1`
	margin-bottom: 15px;
	font-size: 16px;
`;

export const Description = styled.p`
	font-size: 12px;
`;