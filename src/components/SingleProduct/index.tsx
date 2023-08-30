import React from 'react'

// Styles
import { SingleWrap } from './style';

const SingleProduct = ({single}: any) => {
	return (
		<SingleWrap>{single.title}</SingleWrap>
	)
}

export default SingleProduct