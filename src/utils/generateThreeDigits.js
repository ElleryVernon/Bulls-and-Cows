/**
 * 0부터 9까지의 숫자를 무작위로 섞어 3자리 문자열로 만듭니다.
 * @return {string} 세 자리 숫자 문자열
 */
const generateThreeDigits = () =>
	[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
		.sort(() => Math.random() - 0.5)
		.slice(0, 3)
		.join("");

export default generateThreeDigits;
