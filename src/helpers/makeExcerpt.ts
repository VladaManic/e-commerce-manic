const makeExcerpt = (str: string, no: number, dots: boolean) => {
	let newString;
	const strArray = str.split(' ');
	if(strArray.length > 8){
		const cutArray = strArray.slice(0, no);
		const toString = cutArray.join(' ');
		if(dots){
			newString = toString + "...";
		} else {
			newString = toString;
		}
	} else {
		newString = str;
	}
	return newString;
}

export default makeExcerpt