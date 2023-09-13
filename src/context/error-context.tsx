import {createContext, useState} from 'react';

const ErrorContext = createContext({
	error: '',
	localStorageError: '',
	setError: (param: string) => {null},
	setLocalStorageError: (param: string) => {null},
});

export function ErrorContextProvider(props: any){
	const [currentError, setCurrentError] = useState<string>('');
	const [currentLocalStorageError, setCurrentLocalStorageError] = useState<string>('');

	const setErrorHandler = (param: string) => {
		setCurrentError(param);
	}

	const setLocalStorageErrorHandler = (param: string) => {
		setCurrentLocalStorageError(param);
	}

	const context = {
		error: currentError,
		localStorageError: currentLocalStorageError,
		setError: setErrorHandler,
		setLocalStorageError: setLocalStorageErrorHandler,
	} 

	return (
		<ErrorContext.Provider value={context}>
			{props.children}
		</ErrorContext.Provider>
	);
}

export default ErrorContext;