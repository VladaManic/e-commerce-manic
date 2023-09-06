import styled, {  } from 'styled-components';
import { color } from '../../shared/styles/variables';

export const HeaderWrap = styled.div`
    display: flex;
		justify-content: space-between;
    padding: 10px;
`;

export const CartBadge = styled.div`
    position: relative;
`;

export const CartIcon = styled.img`
    width: 50px;

    &.empty-cart {
      filter: grayscale(1);
    }
`;

export const CartCount = styled.div`
    display: flex;
    position: absolute;
    top: 5px;
    right: 1px;
    width: 20px;
    height: 20px;
    background-color: ${color.cartOrange};
    border-radius: 50%;

    &.empty-cart {
      display: none;
    }
`;

export const CartNumber = styled.p`
    margin: auto;
    font-size: 14px;
    line-height: 1px;
`;