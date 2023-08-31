import { createContext, useState } from 'react';

// Types
import {ProductObj} from '../types/interfaces';

const ProductsContext = createContext({
	products: [],
	filteredGroup: [],
	category: 'All',
	setData: (data: ProductObj[]) => {null},
	setDefaultGroup: (data: ProductObj[]) => {null},
	setFilteredGroup: (param: string) => {null},
	setCategoryName: (param: string) => {null},
});

export function ProductsContextProvider(props: any){
	const [currentProducts, setCurrentProducts] = useState<any>([]);
	const [currentGroup, setCurrentGroup] = useState<any>([]);
	const [currentCategory, setCurrentCategory] = useState<string>('All');

	function setDataHandler(data: ProductObj[]){
		setCurrentProducts(data);
	}

	function setDefaultGroupHandler(data: ProductObj[]){
		setCurrentGroup(data)
	}

	function setCategoryNameHandler(param: string){
		setCurrentCategory(param);
	}

	function setFilteredGroupHandler(param: string){
		const newGroup = currentProducts.filter((singleProduct: ProductObj) => singleProduct.category === param);
		setCurrentGroup(newGroup);
	}

	const context = {
		products: currentProducts,
		filteredGroup: currentGroup,
		category: currentCategory,
		setData: setDataHandler,
		setDefaultGroup: setDefaultGroupHandler,
		setFilteredGroup: setFilteredGroupHandler,
		setCategoryName: setCategoryNameHandler,
	} 

	return (
		<ProductsContext.Provider value={context}>
			{props.children}
		</ProductsContext.Provider>
	);
}

export default ProductsContext;