export const round = (value, decimals=2) => {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals)
};

export const sumArr = (arr, multiply=false, prop='price') => {
  let total = 0

  for (let i = 0, _len = arr.length; i < _len; i++) {
    if (multiply) {
      total += arr[i][prop] * arr[i][multiply]
      continue
    }

    total += arr[i][prop]
  }

  return Math.round(total * 100) / 100
}

export const calcDiff = (first, second) => {
  const telj = first - second
  const namn = (first + second) / 2
  const times = 100

  return (telj/namn) * times
}

export const updatedSumArr = (arr, callback) => {
  let total = 0;
  arr.forEach(element => {
    total += callback(element.id);
  });

  return total;
}
