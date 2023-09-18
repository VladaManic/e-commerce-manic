import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ProductsContext from '../../../context/products-context';
import makeExcerpt from '../../../helpers/makeExcerpt';
import clsx from 'clsx';

import { SingleWrap, CartBtn, ImgWrap, FeaturedImg, PriceParagraph, TitleWrap, DescriptionWrap, FilterBtn } from './style';
import { ProductObj } from '../../../types/interfaces';

interface Props {
	single: ProductObj;
	onClickCart: any;
}

const SingleProduct = ({single, onClickCart}: Props) => {
	const productsCtx = useContext(ProductsContext);

	const onClickHandler = () => {
		productsCtx.getFilteredGroup(single.category);
		productsCtx.setCategoryName(single.category);
		productsCtx.setFilterSelected();
	}

	return (
		<SingleWrap>
			<CartBtn id={single.id.toString()} name={single.price.toString()} onClick={onClickCart}>+</CartBtn>
			<NavLink to={`/article/${single.id}`}>
				<ImgWrap>
					<FeaturedImg src={single.image} alt={single.title} />
				</ImgWrap>
			</NavLink>
			<PriceParagraph>{single.price} $</PriceParagraph>
			<NavLink to={`/article/${single.id}`} className="default-link">
				<TitleWrap>{makeExcerpt(single.title, 8, false)}</TitleWrap>
			</NavLink>
			<DescriptionWrap>{makeExcerpt(single.description, 17, true)}</DescriptionWrap>
			<FilterBtn name={single.category} onClick={onClickHandler} className={clsx(productsCtx.filterSelected && 'filter-selected')}>{single.category}</FilterBtn>
		</SingleWrap>
	)
}

export default SingleProduct