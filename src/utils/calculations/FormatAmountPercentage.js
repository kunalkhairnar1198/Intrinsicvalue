export const formatAmount = value => {
  if (!value) return '0.00';
  const num = parseFloat(value);
  if (isNaN(num)) return '0.00';

  return num.toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const formatPercentage = value => {
  if (!value) return '0%';
  return parseFloat(value).toFixed(1) + '%';
};

export const formatNumberToIndianStandard = (
  number,
  minimumFractionDigits = 2,
  maximumFractionDigits = 2,
) => {
  const num = parseFloat(number);
  if (isNaN(num)) {
    return '0.00';
  }

  return new Intl.NumberFormat('en-IN', {
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(num);
};
