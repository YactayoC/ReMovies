const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
});

export const formatMoney = (money: number) => {
  return formatter.format(money);
};
