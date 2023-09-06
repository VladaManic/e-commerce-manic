import styled, {  } from 'styled-components';

export const HeaderWrap = styled.div`
    display: flex;
		justify-content: space-between;
    padding: 10px;
`;

export const CartIcon = styled.img`
    width: 50px;

    &.empty-cart {
      filter: grayscale(1);
    }
`;