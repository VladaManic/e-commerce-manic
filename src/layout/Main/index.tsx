import { Routes, Route } from 'react-router-dom';

import Archive from '../../pages/Archive';
import Single from '../../pages/Single';

// Styles
import { MainWrap } from './style';

const Main = () => {
	return (
		<MainWrap>
			<Routes>
				<Route path="/" element={<Archive />} />
				<Route path="/article/:id" element={<Single />} />
			</Routes>
		</MainWrap>
	)
}

export default Main