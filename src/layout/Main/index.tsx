import { Routes, Route } from 'react-router-dom';

import Archive from '../../pages/Archive';
import Single from '../../pages/Single';

const Main = () => {
	return (
		<div className="main">
			<Routes>
				<Route path="/" element={<Archive />} />
				<Route path="/article/:id" element={<Single />} />
			</Routes>
		</div>
	)
}

export default Main