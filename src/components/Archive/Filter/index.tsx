import {useContext, useState} from 'react';
import ProductsContext from '../../../context/products-context';
import clsx from 'clsx';

import ModalWrapper from '../../../components/Modal/ModalWrapper';

import { FilterWrap, TextWrap, SelectedCategory, FilterBtn } from './style';

const Filter = () => {
	const productsCtx = useContext(ProductsContext);
	const [isOpen, setIsOpen] = useState(false);

	const onClickHandler = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
		const button: HTMLButtonElement = e.currentTarget;
		if(button.classList.contains('filter-selected')){
			productsCtx.getFilteredGroup('All');
			productsCtx.setCategoryName('All');
			productsCtx.setFilterSelected();
		} else {
			setIsOpen(true);
		}
	} 

	return (
		<>
		<FilterWrap>
			<TextWrap>Category:</TextWrap>
			<SelectedCategory>{productsCtx.category}</SelectedCategory>
			<FilterBtn className={clsx(productsCtx.filterSelected ? 'filter-selected' : 'not-selected')} onClick={onClickHandler}>Change</FilterBtn>
		</FilterWrap>
		<ModalWrapper open={isOpen} onClose={() => setIsOpen(false)}>Modal</ModalWrapper>
		</>
	)
}

export default Filter