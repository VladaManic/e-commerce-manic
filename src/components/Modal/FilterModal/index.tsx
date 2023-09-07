import {useContext} from 'react';
import ProductsContext from '../../../context/products-context';
import ModalContext from '../../../context/modal-context';

import CategoryBtn from '../CategoryBtn';

import {ModalWrap, TitleWrap, FiltersWrap} from './style'
import {FilterArr} from '../../../types/interfaces';

const FilterModal = () => {
	const productsCtx = useContext(ProductsContext);
	const modalCtx = useContext(ModalContext);
	
	const onClickHandler = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const button: HTMLButtonElement = e.currentTarget;
		const categoryName = button.name;
		productsCtx.getFilteredGroup(categoryName);
		productsCtx.setCategoryName(categoryName);
		productsCtx.setFilterSelected();
		modalCtx.setIsOpen(false);
	}

	return (
		<ModalWrap>
			<TitleWrap>Filter by category</TitleWrap>
			<FiltersWrap>
				{productsCtx.allCategories.map((category: FilterArr) => (
					<CategoryBtn key={category.id} category={category} onClick={onClickHandler} />
				))}
			</FiltersWrap>
		</ModalWrap>
	)
}

export default FilterModal