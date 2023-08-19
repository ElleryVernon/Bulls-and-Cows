import handleAttempt from "./handleAttempt.js";
import generateThreeDigits from "../utils/generateThreeDigits.js";

/**
 * 숫자 야구 게임을 실행합니다.
 *
 * 1. 세 자리의 랜덤한 숫자(정답)를 생성합니다.
 * 2. 사용자로부터 추측을 입력 받으며, 입력이 유효하지 않을 경우 재입력을 요청합니다.
 * 3. 입력된 추측과 정답을 비교하여 스트라이크와 볼을 계산합니다.
 * 4. 세 자리를 모두 맞출 경우, 게임을 종료하고 성공 메시지를 표시합니다.
 * 5. 사용자가 게임을 종료하고자 할 경우, 게임을 종료합니다.
 * 6. 정답을 맞히지 못한 경우, 스트라이크와 볼의 횟수를 알리고 2번 단계로 돌아갑니다.
 */
const playRound = (attempts, answer) => {
	const isGameEnded = handleAttempt(attempts, answer);
	if (!isGameEnded) {
		playRound(attempts + 1, answer);
	}
};

const playGame = () => {
	const answer = generateThreeDigits();
	playRound(0, answer);
};

export default playGame;
