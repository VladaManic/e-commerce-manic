import { createContext, useState } from 'react';

import { ProductObj } from '../types/interfaces';

const ProductsContext = createContext({
	products: [],
	allCategories: [],
	filteredGroup: [],
	category: 'All',
	filterSelected: false,
	setData: (data: ProductObj[]) => {null},
	setAllCategories: (param: string[]) => {null},
	getFilteredGroup: (param: string) => {null},
	setCategoryName: (param: string) => {null},
	setFilterSelected: () => {null},
	getSearch: (param: string) => {null},
});

export function ProductsContextProvider(props: any){
	const [currentProducts, setCurrentProducts] = useState<any>([]);
	const [currentCategories, setCurrentCategories] = useState<any>([]);
	const [currentGroup, setCurrentGroup] = useState<any>([]);
	const [currentCategory, setCurrentCategory] = useState<string>('All');
	const [currentFilterSelected, setCurrentFilterSelected] = useState<boolean>(false);

	//After fetching API data at very first render, setting whole data to context property object and setting default arhive page products display
	const setDataHandler = (data: ProductObj[]) => {
		setCurrentProducts(data);
		setCurrentGroup(data);
	}

	//Set all unique categories
	const setAllCategoriesHandler = (param: string[]) => {
		setCurrentCategories(param);
	}

	//Choosen filter category name
	const setCategoryNameHandler = (param: string) => {
		setCurrentCategory(param);
	}

	//Filter btn changes state depending on if filter is choosen or reset 
	const setFilterSelectedHandler = () => {
		setCurrentFilterSelected(!currentFilterSelected);
	}

	//Getting all products with choosen category
	const getFilteredGroupHandler = (param: string) => {
		const newGroup = param !== 'All' ? currentProducts.filter((singleProduct: ProductObj) => singleProduct.category === param) : currentProducts;
		setCurrentGroup(newGroup);
	}

	//Filtering all products with string simularity 
	const getSearchHandler = (param: string) => {
		const newGroup = param !== 'all' ? currentProducts.filter((singleProduct: ProductObj) => { return singleProduct.title.toLowerCase().includes(param)}) : currentProducts;
		setCurrentGroup(newGroup);
	}

	const context = {
		products: currentProducts,
		allCategories: currentCategories,
		filteredGroup: currentGroup,
		category: currentCategory,
		filterSelected: currentFilterSelected,
		setData: setDataHandler,
		setAllCategories: setAllCategoriesHandler,
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