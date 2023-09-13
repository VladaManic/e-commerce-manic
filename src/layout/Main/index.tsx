import { useContext } from 'react';
import {Routes, Route} from 'react-router-dom';
import ErrorContext from '../../context/error-context';

import Archive from '../../pages/Archive';
import Single from '../../pages/Single';

import { MainWrap, LocalStorageErrorWrap, ErrorWrap } from './style';

const Main = () => {
	const errorCtx = useContext(ErrorContext);
	
	return (
		<MainWrap>
			{ errorCtx.localStorageError !== '' && <LocalStorageErrorWrap>{errorCtx.localStorageError}</LocalStorageErrorWrap> }
			{ errorCtx.error !== '' ? <ErrorWrap>{errorCtx.error}</ErrorWrap> :
				<Routes>
					<Route path="/" element={<Archive />} />
					<Route path="/article/:id" element={<Single />} />
				</Routes>
			}
		</MainWrap>
	)
}

export default Main