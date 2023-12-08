export interface ProductObj {
	id: number,
	title: string,
	description: string,
	category: string,
	image: string,
	price: number
}

export interface CartItem {
	id: number,
	quantity: number,
	price: number,
	total: number
}

export interface ProductCtxProperties {
	products: ProductObj[],
	allCategories: string[],
	filteredGroup: ProductObj[],
	category: string,
	filterSelected: boolean,
	searchString: string,
	setData: (data: ProductObj[]) => void,
	setAllCategories: (param: string[]) => void,
	getFilteredGroup: (param: string) => void,
	setCategoryName: (param: string) => void,
	setFilterSelected: (param: boolean) => void,
	setSearchString: (param: string) => void,
	getSearch: (param: string) => void,
}

export interface CartCtxProperties {
	items: CartItem[],
	animationBoolean: boolean,
	total: number,
	getItems: () => void,
	setItems: (data: CartItem[]) => void,
	setAnimation: () => void
}