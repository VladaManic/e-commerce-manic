import TopBar from '../../components/Archive/TopBar';
import AllProducts from '../../components/Archive/AllProducts';

// Styles
import { ArchiveContent } from './style';

const Archive = () => {
	return (
		<ArchiveContent>
			<TopBar />
			<AllProducts />
		</ArchiveContent>
	)
}

export default Archive