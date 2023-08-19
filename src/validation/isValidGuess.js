/**
 * 사용자의 입력이 세 자리 숫자이며, 각 자리의 숫자가 중복되지 않는지 확인합니다.
 * @param {string} input 사용자의 입력
 * @param {number} [size=3] 정답의 길이 (선택적 파라미터, 기본값은 3)
 * @return {boolean} 입력이 세 자리 숫자이며, 중복된 숫자가 없는지 여부
 */
const isValidGuess = (input, size = 3) => {
	if (input?.length !== size || isNaN(input)) {
		return false;
	}

	const uniqueDigits = new Set(input);
	return uniqueDigits.size === size;
};

export default isValidGuess;
