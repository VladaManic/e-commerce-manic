import { createContext, useState } from 'react';

// Types
import {ProductObj} from '../types/interfaces';

const ProductsContext = createContext({
	products: [],
	filteredGroup: [],
	setData: (data: ProductObj[]) => {null},
	setDefaultGroup: (data: ProductObj[]) => {null},
	setFilteredGroup: (param: string) => {null},
});

export function ProductsContextProvider(props: any){
	const [currentProducts, setCurrentProducts] = useState<any>([])
	const [currentGroup, setCurrentGroup] = useState<any>([])

	function setDataHandler(data: ProductObj[]){
		setCurrentProducts(data);
	}

	function setDefaultGroupHandler(data: ProductObj[]){
		setCurrentGroup(data)
	}

	function setFilteredGroupHandler(param: string){
		const newGroup = currentProducts.filter((singleProduct: ProductObj) => singleProduct.category === param);
		setCurrentGroup(newGroup);
	}

	const context = {
		products: currentProducts,
		filteredGroup: currentGroup,
		setData: setDataHandler,
		setDefaultGroup: setDefaultGroupHandler,
		setFilteredGroup: setFilteredGroupHandler,
	} 

	return (
		<ProductsContext.Provider value={context}>
			{props.children}
		</ProductsContext.Provider>
	);
}

export default ProductsContext;