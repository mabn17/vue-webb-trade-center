export const round = (value, decimals=2) => {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
};

export const sumArr = (arr, multiply=false, prop='price') => {
  let total = 0;

  for (let i = 0, _len = arr.length; i < _len; i++) {
    if (multiply) {
      total += arr[i][prop] * arr[i][multiply];
      continue;
    }

    total += arr[i][prop];
  }

  return Math.round(total * 100) / 100;
};
