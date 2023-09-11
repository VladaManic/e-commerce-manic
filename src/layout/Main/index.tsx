import {useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import {useContext } from 'react';
import ErrorContext from '../../context/error-context';

import Archive from '../../pages/Archive';
import Single from '../../pages/Single';

import { MainWrap, ErrorWrap } from './style';

const Main = () => {
	const errorCtx = useContext(ErrorContext);
	
	return (
		<MainWrap>
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