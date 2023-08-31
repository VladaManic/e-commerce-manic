import { NavLink } from 'react-router-dom';
import makeExcerpt from '../../helpers/makeExcerpt';

// Styles
import { SingleWrap, CartBtn, ImgWrap, FeaturedImg, PriceParagraph, TitleWrap, DescriptionWrap, FilterBtn } from './style';

// Types
import { ProductObj } from '../../types/interfaces';

interface Props {
	single: ProductObj;
}

const SingleProduct = ({single}: Props) => {
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
			<FilterBtn>{single.category}</FilterBtn>
		</SingleWrap>
	)
}

export default SingleProduct