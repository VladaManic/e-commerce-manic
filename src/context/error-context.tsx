import {createContext, useState} from 'react';

const ErrorContext = createContext({
	error: '',
	setError: (param: string) => {null},
});

export function ErrorContextProvider(props: any){
	const [currentError, setCurrentError] = useState<string>('');

	const setErrorHandler = (param: string) => {
		setCurrentError(param);
	}

	const context = {
		error: currentError,
		setError: setErrorHandler,
	} 

	return (
		<ErrorContext.Provider value={context}>
			{props.children}
		</ErrorContext.Provider>
	);
}

export default ErrorContext;