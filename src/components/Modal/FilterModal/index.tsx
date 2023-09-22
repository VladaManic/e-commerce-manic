import { useContext } from 'react';
import ProductsContext from '../../../context/ProductsContext';
import ModalContext from '../../../context/ModalContext';

import CategoryBtn from '../CategoryBtn';

import { ModalWrap, TitleWrap, FiltersWrap } from './style';

const FilterModal = () => {
	const productsCtx = useContext(ProductsContext);
	const modalCtx = useContext(ModalContext);
	
	const onClickHandler = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const button: HTMLButtonElement = e.currentTarget;
		const categoryName = button.name;
		productsCtx.getFilteredGroup(categoryName);
		productsCtx.setCategoryName(categoryName);
		productsCtx.setFilterSelected(true);
		modalCtx.setOpenFilter(false);
	}

	return (
		<ModalWrap>
			<TitleWrap>Filter by category</TitleWrap>
			<FiltersWrap>
				{productsCtx.allCategories.map((category: string, index: number) => (
					<CategoryBtn key={index} category={category} onClick={onClickHandler} />
				))}
			</FiltersWrap>
		</ModalWrap>
	)
}

export default FilterModal