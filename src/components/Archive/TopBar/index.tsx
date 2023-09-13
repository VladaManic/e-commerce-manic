import SearchInput from '../SearchInput';
import Filter from '../Filter';

// Styles
import { TopBarWrap } from './style';

const TopBar = () => {
	return (
		<TopBarWrap>
			<SearchInput />
			<Filter />
		</TopBarWrap>
	)
}

export default TopBar