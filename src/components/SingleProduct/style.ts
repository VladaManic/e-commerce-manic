import styled, {  } from 'styled-components';
import { color } from '../../shared/styles/variables';

export const SingleWrap = styled.div`
   box-sizing: border-box;
   position: relative;
   width: 31.5%;
   margin-bottom: 20px;
   padding: 20px;
   background-color: ${color.defaultWhite};
`;

export const CartBtn = styled.button`
	position: absolute;
   width: 50px;
   height: 50px;
   background-color: ${color.cartOrange};
   border-radius: 50%;
   font-size: 23px;
`;

export const ImgWrap = styled.div`
   width: 100%;
   height: 250px;
   margin-bottom: 15px;
`;

export const FeaturedImg = styled.img`
   width: 100%;
   height: 100%;
	object-fit: contain;
`;

export const PriceParagraph = styled.p`
   margin-bottom: 10px;
   font-size: 18px;
   font-weight: 700;
   color: ${color.priceGreen};
`;

export const TitleWrap = styled.p`
   margin-bottom: 10px;
   font-size: 18px;
   font-weight: 500;
   color: ${color.titleBlue};
`;

export const DescriptionWrap = styled.p`
   margin-bottom: 10px;
`;

export const FilterBtn = styled.button`
   text-transform: uppercase;
   color: ${color.filterBlue};
`;