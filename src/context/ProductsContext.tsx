import { createContext, useState, PropsWithChildren } from 'react';

import { ProductObj, ProductCtxProperties } from '../types/interfaces';

const ProductsContext = createContext<ProductCtxProperties>({
	products: [],
	allCategories: [],
	filteredGroup: [],
	category: 'All',
	filterSelected: false,
	searchString: '',
	setData: (data: ProductObj[]) => {null},
	setAllCategories: (param: string[]) => {null},
	getFilteredGroup: (param: string) => {null},
	setCategoryName: (param: string) => {null},
	setFilterSelected: (param: boolean) => {null},
	setSearchString: (param: string) => {null},
	getSearch: (param: string) => {null},
});

export const ProductsContextProvider =({ children }: PropsWithChildren<object>) => {
	const [currentProducts, setCurrentProducts] = useState<ProductObj[]>([]);
	const [currentCategories, setCurrentCategories] = useState<string[]>([]);
	const [currentGroup, setCurrentGroup] = useState<ProductObj[]>([]);
	const [currentCategory, setCurrentCategory] = useState<string>('All');
	const [currentFilterSelected, setCurrentFilterSelected] = useState<boolean>(false);
	const [currentSearchString, setCurrentSearchString] = useState<string>('');

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
	const setFilterSelectedHandler = (param: boolean) => {
		setCurrentFilterSelected(param);
	}

	//Getting all products with choosen category
	const getFilteredGroupHandler = (param: string) => {
		//First filter by category
		const newGroup = param !== 'All' ? currentProducts.filter((singleProduct: ProductObj) => singleProduct.category === param) : currentProducts;
		//Than include search string in filtration
		const newNewGroup = newGroup.filter((singleProduct: ProductObj) => { return singleProduct.title.toLowerCase().includes(currentSearchString)});
		setCurrentGroup(newNewGroup);
	}

	//Setting string inserted in search input field
	const setSearchStringHandler = (param: string) => {
		setCurrentSearchString(param);
	}

	//Filtering all products with string simularity 
	const getSearchHandler = (param: string) => {
		//First filter by search string
		const newGroup = param !== '' ? currentProducts.filter((singleProduct: ProductObj) => { return singleProduct.title.toLowerCase().includes(param)}) : currentProducts;
		//Than filter result by choosen category
		const newNewGroup = currentCategory !== 'All' ? newGroup.filter((singleProduct: ProductObj) => singleProduct.category === currentCategory) : newGroup;
		setCurrentGroup(newNewGroup);
	}

	const context = {
		products: currentProducts,
		allCategories: currentCategories,
		filteredGroup: currentGroup,
		category: currentCategory,
		filterSelected: currentFilterSelected,
		searchString: currentSearchString,
		setData: setDataHandler,
		setAllCategories: setAllCategoriesHandler,
		getFilteredGroup: getFilteredGroupHandler,
		setCategoryName: setCategoryNameHandler,
		setFilterSelected: setFilterSelectedHandler,
		setSearchString: setSearchStringHandler,
		getSearch: getSearchHandler,
	} 

	return (
		<ProductsContext.Provider value={context}>
			{children}
		</ProductsContext.Provider>
	);
}

export default ProductsContext;