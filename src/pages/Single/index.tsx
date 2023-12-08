import { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from "react-router-dom";
import ProductsContext from '../../context/ProductsContext';
import CartContext from '../../context/CartContext';
import ErrorContext from '../../context/ErrorContext';
import isStorageSupported from '../../helpers/isStorageSupported';
import clsx from 'clsx';

import Loader from '../../layout/Loader';

import { LoaderWrap, SingleWrapper, ImageWrap, BackIcon, ProductImg, DataWrap, Price, QuantityWrap, TotalPrice, CartBtn, Category, Title, Description } from './style';
import backIcon from '../../assets/img/back-icon.png';
import { ProductObj, CartItem } from '../../types/interfaces';

const Single = () => {
	const productsCtx = useContext(ProductsContext);
	const cartCtx = useContext(CartContext);
	const errorCtx = useContext(ErrorContext);
	//Getting param from URL
	const { id } = useParams();
	const intId = Number(id);
	const [loaderSingle, setLoaderSingle] = useState<boolean>(true);
	const [singleProduct, setSingleProduct] = useState<ProductObj | undefined>();
	const [inputVal, setInputVal] = useState<number>(1);
	const [totalPrice, setTotalPrice] = useState<number | undefined>();
	
	useEffect(() => {
		const newObj = productsCtx.products.filter((obj: ProductObj) => obj.id === intId);
		setSingleProduct(newObj[0]);
		newObj[0] && setTotalPrice(newObj[0]['price']);
		//Set topbar filtered name to All
		productsCtx.setCategoryName('All');
		//Reset topbar filter btn
		productsCtx.setFilterSelected(false);
		//Reset search string
		productsCtx.setSearchString('');
	}, [productsCtx.products]);

	const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
		const newValue = parseInt(e.currentTarget.value);
		const price = parseFloat(e.currentTarget.name);
		setInputVal(newValue);
		const newTotal = totalPrice && newValue * price;
		setTotalPrice(newTotal);
	}

	//On click back btn, reset all on archive page
	const onClickBackHandler = () => {
		productsCtx.getSearch('');
	}

	const onClickHandler = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
		const quantity = parseInt(e.currentTarget.value);
		let newCartItems;
		//Getting product with selected id
		const setItem = cartCtx.items.filter((item: CartItem) => item.id === intId);
		//If product is already added
		if(setItem.length > 0){
			const newQuantity = setItem[0]['quantity'] + quantity;
			const totalPrice =  quantity * singleProduct!.price + setItem[0]['total'];
			newCartItems = cartCtx.items.map((item: CartItem) => item.id === intId ? { ...item, quantity: newQuantity, price: singleProduct!.price, total: totalPrice} : item);
		//If product is added for the first time
		} else {
			const calculatedTotal = quantity * singleProduct!.price;
			newCartItems = [...cartCtx.items, {id: intId, quantity: quantity, price: singleProduct!.price, total: calculatedTotal}]
		}
		isStorageSupported("localStorage") ? localStorage.setItem('items', JSON.stringify(newCartItems)) : errorCtx.setLocalStorageError('No local storage is available!');
		cartCtx.setItems(newCartItems);
		cartCtx.setAnimation();
	}

	return (
		<>
			<LoaderWrap className={clsx(!loaderSingle && 'hide')}>
				<Loader />
			</LoaderWrap>
			<SingleWrapper className={clsx(loaderSingle && 'hide')}>
				<ImageWrap>
					<NavLink to={`/`} end onClick={onClickBackHandler}>
						<BackIcon src={backIcon} alt="Back to archive page" />
					</NavLink>
					<ProductImg src={singleProduct?.image} alt={singleProduct?.title} onLoad={() => setLoaderSingle(false)} />
				</ImageWrap>
				<DataWrap>
					<Price>{singleProduct?.price} $</Price>
					<QuantityWrap>
						<input type="number" id="quantity" name={singleProduct?.price.toString()} className="number-input" value={inputVal} min="1" onChange={onChangeHandler} onKeyDown={(e) => {e.preventDefault();}} />
						<TotalPrice>{totalPrice ? totalPrice : singleProduct?.price} $</TotalPrice>
					</QuantityWrap>
					<CartBtn value={inputVal.toString()} onClick={onClickHandler}>Add to cart</CartBtn>
					<Category>{singleProduct?.category}</Category>
					<Title>{singleProduct?.title}</Title>
					<Description>{singleProduct?.description}</Description>
				</DataWrap>
			</SingleWrapper>
		</>
	)
}

export default Single
