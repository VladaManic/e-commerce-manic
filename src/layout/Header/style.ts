import styled from 'styled-components';
import { color } from '../../shared/styles/variables';

export const HeaderWrap = styled.div`
    display: flex;
		justify-content: space-between;
    padding: 10px;
    background-color: ${color.headerWhite};
    box-shadow: 0 1px 6px 0 ${color.shadowGray};
`;

export const LogoWrap = styled.div`
    display: flex;
    align-items: center;

    .logo-link {
      font-size: 24px;
      font-weight: 700;
      text-decoration: none;
      text-transform: uppercase;
      color: ${color.defaultBlack};
    }
`;

export const CartBadge = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
    width: 200px;
    z-index: 2;
`;

export const CartIcon = styled.img`
    width: 50px;
    z-index; 2;
    cursor: pointer;

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
    z-index; 2;

    &.empty-cart {
      display: none;
    }
`;

export const CartNumber = styled.p`
    margin: auto;
    font-size: 13px;
    font-weight: 700;
    line-height: 10px;
`;

export const AnimationWrap = styled.div`
    overflow: hidden;
    position: absolute;
    top: 13px;
    right: 30px;
    width: 144px;
    height: 30px;
    z-index: -1;
`;

export const CartAnimation = styled.p`
    position: absolute;
    width: 144px;
    right: -180px;
    padding-top: 5px;
    padding-right: 30px;
    padding-bottom: 5px;
    padding-left: 8px;
    border-radius: 15px;
    background-color: ${color.cartOrange};
    font-size: 12px;
    font-weight: 700;
    font-style: italic;
    text-transform: uppercase;
    transition: transform 0.4s;

    &.show {
      transform: translate(-120px);
    }
`;