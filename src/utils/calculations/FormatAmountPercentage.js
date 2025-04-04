export const formatAmount = value => {
  if (!value) return '0';
  return Math.round(value).toLocaleString(); // Format with commas
};

export const formatPercentage = value => {
  if (!value) return '0%';
  return parseFloat(value).toFixed(1) + '%'; // One decimal place
};
