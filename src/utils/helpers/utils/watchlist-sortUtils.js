export const sortByFundamentalRank = data =>
  [...data].sort(
    (a, b) =>
      (a?.fundamental_ranking ?? Infinity) -
      (b?.fundamental_ranking ?? Infinity),
  );

export const sortByPegRatio = data => {
  const positive = data
    .filter(item => item?.symbol?.PEG_Ratio >= 0.01)
    .sort((a, b) => a.symbol.PEG_Ratio - b.symbol.PEG_Ratio);

  const negative = data
    .filter(item => item?.symbol?.PEG_Ratio < 0)
    .sort((a, b) => b.symbol.PEG_Ratio - a.symbol.PEG_Ratio);

  const neutral = data.filter(item => {
    const ratio = item?.symbol?.PEG_Ratio;
    return ratio === 0 || ratio === null || ratio === undefined;
  });

  return [...positive, ...negative, ...neutral];
};

export const assignTechnicalRank = data => {
  const validScores = data
    .map(item => item.technicalScore)
    .filter(score => typeof score === 'number' && !isNaN(score));

  const uniqueScores = [...new Set(validScores)].sort((a, b) => b - a);
  const scoreToRankMap = new Map(
    uniqueScores.map((score, index) => [score, index + 1]),
  );

  return data.map(item => ({
    ...item,
    technical_rank: scoreToRankMap.get(item.technicalScore) || null,
  }));
};

export const sortByTechnicalRank = data => {
  const dataWithScore = data.map(item => {
    const changePercent = parseFloat(item?.NSE_PER_CHANGE) || 0;
    const changeAmount = parseFloat(item?.NSE_CHANGE) || 0;
    const peg = parseFloat(item?.PEG_Ratio) || 0;
    const pe = parseFloat(item?.PE_Ratio) || 0;

    const technicalScore =
      changePercent * 2 +
      changeAmount +
      (peg < 1 ? 5 : peg < 2 ? 2 : -1) +
      (pe < 0 ? -3 : pe < 15 ? 2 : -1);

    return {...item, technicalScore};
  });

  const ranked = assignTechnicalRank(dataWithScore);

  return [...ranked].sort(
    (a, b) => (a.technical_rank ?? Infinity) - (b.technical_rank ?? Infinity),
  );
};

export const sortBySentimentalRank = data =>
  [...data].sort(
    (a, b) =>
      (a?.sentimentscore?.sentiment_ranking ?? Infinity) -
      (b?.sentimentscore?.sentiment_ranking ?? Infinity),
  );

export const sortByMutualFundRank = data =>
  [...data].sort(
    (a, b) => (a?.mf_ranking ?? Infinity) - (b?.mf_ranking ?? Infinity),
  );

export const sortAlphabeticalAZ = data =>
  [...data].sort((a, b) =>
    (a?.symbol?.name ?? '').localeCompare(b?.symbol?.name ?? ''),
  );
