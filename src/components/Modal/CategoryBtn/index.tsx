import { ButtonWrap } from './style'

interface Props {
	category: string;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const CategoryBtn = ({category, onClick} : Props) => {
	return (
		<ButtonWrap name={category} onClick={onClick}>{category}</ButtonWrap>
	)
}

export default CategoryBtn