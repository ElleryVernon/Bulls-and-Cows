/**
 * 사용자의 추측과 정답을 비교하여 스트라이크와 볼의 수를 계산합니다.
 * @param {string} guess 사용자의 추측값
 * @param {string} answer 정답
 * @return {Object} 스트라이크와 볼의 수
 */
const countStrikeAndBall = (guess, answer) =>
	Array.from(guess).reduce(
		(acc, digit, idx) => ({
			strike: acc.strike + (digit === answer[idx] ? 1 : 0),
			ball: acc.ball + (digit !== answer[idx] && answer.includes(digit) ? 1 : 0),
		}),
		{ strike: 0, ball: 0 }
	);

export default countStrikeAndBall;
