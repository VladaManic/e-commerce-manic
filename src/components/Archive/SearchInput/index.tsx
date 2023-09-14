import { useContext, useRef } from 'react';
import ProductsContext from '../../../context/products-context';
import clsx from 'clsx';

import { InputWrap, XIcon } from './style';

const SearchInput = () => {
	const productsCtx = useContext(ProductsContext);
	const inputRef = useRef<HTMLInputElement | null>(null);
	const refLength = inputRef.current?.value.length;

	//Typing characters in input field
	const keyUpHandler = (e: React.FormEvent<HTMLInputElement>) => {
		const input: HTMLInputElement = e.currentTarget;
		productsCtx.getSearch(input.value.toLowerCase())
	}

	//On click X to reset search input
	const onClickHandler = () => {
		productsCtx.getSearch('all');
		if(inputRef.current !== null) {
			inputRef.current.value = "";
		}
	}

	return (
		<InputWrap>
			<input type="text" id="search" placeholder="Start searching..." onKeyUp={keyUpHandler} ref={inputRef} className={clsx(refLength && refLength > 0 ? 'set-string' : 'no-string')} />
			{refLength && refLength > 0 ? (<XIcon onClick={onClickHandler}>x</XIcon>) : (null)}
		</InputWrap>
	)
}

export default SearchInput