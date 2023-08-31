import { createContext, useState } from 'react';
// Types
import {ProductObj} from '../types/interfaces';

const ProductsContext = createContext({
	products: [],
	filteredGroup: [],
	setData: (data: ProductObj[]) => {null},
	setDefaultGroup: (param: string) => {null},
	setFilteredGroup: (param: string) => {null},
});

export function ProductsContextProvider(props: any){
	const [currentProducts, setCurrentProducts] = useState([])
	const [currentGroup, setCurrentGroup] = useState([])

	function setDataHandler(data: any){
		setCurrentProducts(data);
	}

	function setDefaultGroupHandler(data: any){
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