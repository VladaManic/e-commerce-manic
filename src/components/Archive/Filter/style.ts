import styled, {  } from 'styled-components';
import { color } from '../../../shared/styles/variables';

export const FilterWrap = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const TextWrap = styled.p`
	margin-right: 10px;
	font-weight: 700;
`;

export const SelectedCategory = styled.p`
	margin-right: 10px;
`;

export const FilterBtn = styled.button`
	padding: 3px 5px;
	margin-top: -3px;
	border-radius: 5px;

	&.not-selected {
		text-transform: uppercase;
		border: 1px solid ${color.borderGreen};
	}

	&.filter-selected {
		background-color: ${color.filterRed};
		color: ${color.defaultWhite};
	}
`;