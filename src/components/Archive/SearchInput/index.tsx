import {useContext} from 'react';
import ProductsContext from '../../../context/products-context';

const SearchInput = () => {
	const productsCtx = useContext(ProductsContext);

	const keyUpHandler = (e: React.FormEvent<HTMLInputElement>) => {
		const input: HTMLInputElement = e.currentTarget;
		productsCtx.getSearch(input.value.toLowerCase())
	}

	return (
		<>
			<input type="text" id="search" placeholder="Start searching..." onKeyUp={keyUpHandler} />
		</>
	)
}

export default SearchInput