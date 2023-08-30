import { createContext, useState } from 'react';

const ProductsContext = createContext({
	products: [],
	setData: (data: any) => {[]},
});

export function ProductsContextProvider(props: any){
	const [currentProducts, setCurrentProducts] = useState([])

	function setDataHandler(data: any){
		setCurrentProducts(data);
	}

	const context = {
		products: currentProducts,
		setData: setDataHandler,
	} 

	return (
		<ProductsContext.Provider value={context}>
			{props.children}
		</ProductsContext.Provider>
	);
}

export default ProductsContext;