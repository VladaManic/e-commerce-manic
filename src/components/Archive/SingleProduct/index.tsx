import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoadingContext from '../../../context/loading-context';
import ProductsContext from '../../../context/products-context';
import makeExcerpt from '../../../helpers/makeExcerpt';
import clsx from 'clsx';

import Loader from '../../../layout/Loader';

import { SingleWrap, CartBtn, ImgWrap, LoaderWrap, FeaturedImg, PriceParagraph, TitleWrap, DescriptionWrap, FilterBtn } from './style';
import { ProductObj } from '../../../types/interfaces';

interface Props {
	single: ProductObj;
	onClickCart: any;
}

const SingleProduct = ({single, onClickCart}: Props) => {
	const loadingCtx = useContext(LoadingContext);
	const productsCtx = useContext(ProductsContext);
	const [imgLoader, setImgLoader] = useState<boolean>(true);

	const onClickHandler = () => {
		productsCtx.getFilteredGroup(single.category);
		productsCtx.setCategoryName(single.category);
		productsCtx.setFilterSelected(true);
	}

	return (
		<SingleWrap>
			<CartBtn id={single.id.toString()} name={single.price.toString()} onClick={onClickCart}>+</CartBtn>
			<NavLink to={`/article/${single.id}`}>
				<ImgWrap>
					<LoaderWrap style={{display: imgLoader ? "block" : "none"}}>
						<Loader />
					</LoaderWrap>
					<FeaturedImg src={single.image} alt={single.title} onLoad={() => setImgLoader(false)} style={{display: imgLoader ? "none" : "block"}} />
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