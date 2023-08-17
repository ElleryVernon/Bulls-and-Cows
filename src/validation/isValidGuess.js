/**
 * 사용자의 입력이 세 자리 숫자이며, 각 자리의 숫자가 중복되지 않는지 확인합니다.
 * @param {string} input 사용자의 입력
 * @return {boolean} 입력이 세 자리 숫자이며, 중복된 숫자가 없는지 여부
 */
const isValidGuess = (input) => {
	if (input?.length !== 3 || isNaN(input)) {
		return false;
	}

	const uniqueDigits = new Set(input);
	return uniqueDigits.size === 3;
};

export default isValidGuess;
