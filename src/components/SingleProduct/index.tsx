import React from 'react'

// Styles
import { SingleWrap } from './style';

// Types
import { ProductObj } from '../../types/interfaces';

interface Props {
	single: ProductObj;
}

const SingleProduct = ({single}: Props) => {
	return (
		<SingleWrap>{single.title}</SingleWrap>
	)
}

export default SingleProduct