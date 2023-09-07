import {ButtonWrap} from './style'
import {FilterArr} from '../../../types/interfaces';

interface Props {
	category: FilterArr;
	onClick: any;
}

const CategoryBtn = ({category, onClick} : Props) => {
	return (
		<ButtonWrap name={category.name} onClick={onClick}>{category.name}</ButtonWrap>
	)
}

export default CategoryBtn