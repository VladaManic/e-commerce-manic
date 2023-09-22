import { createContext, useState } from 'react';

const LoadingContext = createContext({
	loading: true,
	setLoading: (param: boolean) => {null},
});

export function LoadingContextProvider(props: any){
	const [currentLoading, setCurrentLoading] = useState<boolean>(true);

	const setLoading = (param: boolean) => {
		setCurrentLoading(param);
	}

	const context = {
		loading: currentLoading,
		setLoading: setCurrentLoading,
	} 

	return (
		<LoadingContext.Provider value={context}>
			{props.children}
		</LoadingContext.Provider>
	);
}

export default LoadingContext;