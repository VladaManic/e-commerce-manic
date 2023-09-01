import {useContext} from 'react';
import ProductsContext from '../../../context/products-context';
import { NavLink } from 'react-router-dom';
import makeExcerpt from '../../../helpers/makeExcerpt';
import clsx from 'clsx';

// Styles
import { SingleWrap, CartBtn, ImgWrap, FeaturedImg, PriceParagraph, TitleWrap, DescriptionWrap, FilterBtn } from './style';

// Types
import { ProductObj } from '../../../types/interfaces';

interface Props {
	single: ProductObj;
}

const SingleProduct = ({single}: Props) => {
	const productsCtx = useContext(ProductsContext);

	const onClickHandler = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const button: HTMLButtonElement = e.currentTarget;
		const categoryName = button.name;
		productsCtx.getFilteredGroup(categoryName);
		productsCtx.setCategoryName(categoryName);
		productsCtx.setFilterSelected();
	}

	return (
		<SingleWrap>
			<CartBtn>+</CartBtn>
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