import isValidGuess from "../validation/isValidGuess.js";

/**
 * 사용자에게 세 자리 숫자를 입력받으며, 중복되지 않는 세 자리 숫자가 될 때까지 입력을 받습니다.
 * 게임을 종료하려면 취소 버튼을 클릭하면 null을 반환합니다.
 * @return {string|null} 사용자의 유효한 추측 혹은 게임 종료(null)
 */
const getGuess = () => {
	const guess = prompt("세 자리 숫자를 입력해주세요: ");
	if (guess === null) {
		alert("게임을 종료합니다.");
		return null;
	}

	if (isValidGuess(guess)) {
		return guess;
	}

	alert("중복되지 않는 세 자리 숫자를 정확히 입력해야 합니다.");
	return promptForGuess();
};

export default getGuess;
