const frequency = {};

  // 각 숫자의 빈도수를 계산
  array.forEach(number => {
    frequency[number] = (frequency[number] || 0) + 1;
  });