import countStrikeAndBall from "../utils/countStrikeAndBall.js";
import getGuess from "../prompts/getGuess.js";

/**
 * 사용자의 추측을 처리하고 결과를 출력합니다.
 * @param {number} attempts 현재까지의 시도 횟수
 * @param {string} answer 정답
 * @return {boolean} 정답을 맞췄거나 사용자가 게임을 종료한 경우 true, 그렇지 않으면 false
 */
const handleAttempt = (attempts, answer) => {
	const guess = getGuess();

	if (!guess) {
		return true;
	}

	const { strike, ball } = countStrikeAndBall(guess, answer);

	if (strike === 3) {
		alert(`축하합니다!! 정답은 ${answer}이고, ${attempts}번만에 맞추셨어요!`);
		return true;
	} else {
		alert(`스크라이크: ${strike}번, 볼: ${ball}번`);
		return false;
	}
};

export default handleAttempt;
