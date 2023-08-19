/**
 * 사용자의 추측과 정답을 비교하여 스트라이크와 볼의 수를 계산합니다.
 * @param {string} guess 사용자의 추측값
 * @param {string} answer 정답
 * @return {Object} 스트라이크와 볼의 수
 */
const countStrikeAndBall = (guess, answer) => {
	const strike = [...guess].filter((digit, idx) => digit === answer[idx]);
	const ball = [...guess].filter((digit, idx) => digit !== answer[idx] && answer.includes(digit));

	return { strike: strike.length, ball: ball.length };
};

export default countStrikeAndBall;
