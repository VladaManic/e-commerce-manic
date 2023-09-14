import { useContext } from 'react';
import ProductsContext from '../../../context/products-context';
import ModalContext from '../../../context/modal-context';
import clsx from 'clsx';

import { FilterWrap, TextWrap, SelectedCategory, FilterBtn } from './style';

const Filter = () => {
	const productsCtx = useContext(ProductsContext);
	const modalCtx = useContext(ModalContext);

	const onClickHandler = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
		const button: HTMLButtonElement = e.currentTarget;
		if(button.classList.contains('filter-selected')){
			productsCtx.getFilteredGroup('All');
			productsCtx.setCategoryName('All');
			productsCtx.setFilterSelected();
		} else {
			modalCtx.setModalType(true);
			modalCtx.setIsOpen(true);
		}
	} 

	return (
		<FilterWrap>
			<TextWrap>Category:</TextWrap>
			<SelectedCategory>{productsCtx.category}</SelectedCategory>
			<FilterBtn className={clsx(productsCtx.filterSelected ? 'filter-selected' : 'not-selected')} onClick={onClickHandler}>Change</FilterBtn>
		</FilterWrap>
	)
}

export default Filter