// export const sortList = (data, key, order) => {
//   if (!key) return data;

//   return [...data].sort((a, b) => {
//     if (order === 'asc') {
//       return a[key] > b[key] ? 1 : -1;
//     } else {
//       return a[key] < b[key] ? 1 : -1;
//     }
//   });
// };

export const sortList = (data, key, order = 'asc') => {
  if (!key || !data || data.length === 0) return data;

  return [...data].sort((a, b) => {
    const valueA = isNaN(parseFloat(a[key])) ? a[key] : parseFloat(a[key]);
    const valueB = isNaN(parseFloat(b[key])) ? b[key] : parseFloat(b[key]);

    if (typeof valueA === 'number' && typeof valueB === 'number') {
      return order === 'asc' ? valueA - valueB : valueB - valueA;
    }

    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return order === 'asc'
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    }

    return 0;
  });
};
