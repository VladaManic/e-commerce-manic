import { createContext, useState } from 'react';

// Types
import {ProductObj} from '../types/interfaces';

const ProductsContext = createContext({
	products: [],
	filteredGroup: [],
	category: 'All',
	filterSelected: false,
	setData: (data: ProductObj[]) => {null},
	getFilteredGroup: (param: string) => {null},
	setCategoryName: (param: string) => {null},
	setFilterSelected: () => {null},
	getSearch: (param: string) => {null},
});

export function ProductsContextProvider(props: any){
	const [currentProducts, setCurrentProducts] = useState<any>([]);
	const [currentGroup, setCurrentGroup] = useState<any>([]);
	const [currentCategory, setCurrentCategory] = useState<string>('All');
	const [currentFilterSelected, setCurrentFilterSelected] = useState<boolean>(false);

	const setDataHandler = (data: ProductObj[]) => {
		setCurrentProducts(data);
		setCurrentGroup(data);
	}

	const setCategoryNameHandler = (param: string) => {
		setCurrentCategory(param);
	}

	const setFilterSelectedHandler = () => {
		setCurrentFilterSelected(!currentFilterSelected);
	}

	const getFilteredGroupHandler = (param: string) => {
		const newGroup = param !== 'All' ? currentProducts.filter((singleProduct: ProductObj) => singleProduct.category === param) : currentProducts;
		setCurrentGroup(newGroup);
	}

	const getSearchHandler = (param: string) => {
		const newGroup = param !== 'all' ? currentProducts.filter((singleProduct: ProductObj) => { return singleProduct.title.toLowerCase().includes(param)}) : currentProducts;
		setCurrentGroup(newGroup);
	}

	const context = {
		products: currentProducts,
		filteredGroup: currentGroup,
		category: currentCategory,
		filterSelected: currentFilterSelected,
		setData: setDataHandler,
		getFilteredGroup: getFilteredGroupHandler,
		setCategoryName: setCategoryNameHandler,
		setFilterSelected: setFilterSelectedHandler,
		getSearch: getSearchHandler,
	} 

	return (
		<ProductsContext.Provider value={context}>
			{props.children}
		</ProductsContext.Provider>
	);
}

export default ProductsContext;