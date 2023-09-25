import { createContext, useState, PropsWithChildren } from 'react';

const LoadingContext = createContext({
	loading: true,
	setLoading: (param: boolean) => {null},
});

export const LoadingContextProvider =({ children }: PropsWithChildren<object>) => {
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
			{children}
		</LoadingContext.Provider>
	);
}

export default LoadingContext;