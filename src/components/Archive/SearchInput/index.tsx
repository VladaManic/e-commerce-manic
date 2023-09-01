import {useContext} from 'react';
import ProductsContext from '../../../context/products-context';

const SearchInput = () => {
	const productsCtx = useContext(ProductsContext);

	const keyUpHandler = (e: React.FormEvent<HTMLInputElement>) => {
		const input: HTMLInputElement = e.currentTarget;
		productsCtx.getSearch(input.value.toLowerCase())
	}

<<<<<<< HEAD
	
=======
>>>>>>> bc477cc659163270c6669ea3a333ee10d7e200ec
	return (
		<>
			<input type="text" id="search" placeholder="Start searching..." onKeyUp={keyUpHandler} />
		</>
	)
}

export default SearchInput