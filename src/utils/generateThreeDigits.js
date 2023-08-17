/**
 * 0부터 9까지의 숫자를 무작위로 섞어 3자리 문자열로 만듭니다.
 * @return {string} 세 자리 문자열
 */
const generateThreeDigits = () =>
	Array.from({ length: 10 }, (_, idx) => idx)
		.sort(() => Math.random() - 0.5)
		.slice(0, 3)
		.join("");

export default generateThreeDigits;
