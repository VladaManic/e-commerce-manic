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

export interface FilterArr {
	id: number,
	name: string,
}