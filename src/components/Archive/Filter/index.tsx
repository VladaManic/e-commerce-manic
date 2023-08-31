import {useContext} from 'react';
import ProductsContext from '../../../context/products-context';

// Styles
import { FilterWrap, TextWrap, SelectedCategory, FilterBtn } from './style';

const Filter = () => {
	const productsCtx = useContext(ProductsContext);

	return (
		<FilterWrap>
			<TextWrap>Category:</TextWrap>
			<SelectedCategory>{productsCtx.category}</SelectedCategory>
			<FilterBtn>Change</FilterBtn>
		</FilterWrap>
	)
}

export default Filter