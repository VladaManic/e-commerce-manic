import styled from 'styled-components';
import { color } from '../../shared/styles/variables';

export const LoaderWrap = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

export const LoaderInner = styled.div`
	width: 40px !important;
	height: 40px !important;
	border: 6px solid ${color.loaderTransparent};
	border-radius: 50%;
	border-top: 6px solid ${color.loaderBlue};
	border-right: 6px solid ${color.loaderBlue};
	background: none !important;
	animation: spin 2s linear infinite;

	/* Safari */
	@-webkit-keyframes spin {
		0% {
			-webkit-transform: rotate(0deg);
		}

		100% {
			-webkit-transform: rotate(360deg);
		}
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
`;