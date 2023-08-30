import { NavLink } from 'react-router-dom';

// Styles
import { SingleWrap, CartBtn, ImgWrap, FeaturedImg, PriceParagraph, TitleWrap } from './style';

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
				<TitleWrap>{single.title}</TitleWrap>
			</NavLink>
			<p>{single.description}</p>
			<button>{single.category}</button>
		</SingleWrap>
	)
}

export default SingleProduct