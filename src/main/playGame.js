import handleAttempt from "./handleAttempt.js";
import generateThreeDigits from "../utils/generateThreeDigits.js";

const playGame = () => {
	const answer = generateThreeDigits();
	const playRound = (attempts) => {
		const isGameEnded = handleAttempt(attempts, answer);
		if (!isGameEnded) {
			playRound(attempts + 1);
		}
	};

	playRound(0);
};

export default playGame;
