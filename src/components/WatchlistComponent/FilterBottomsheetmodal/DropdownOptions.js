const SORT_OPTIONS = [
  {id: '5', label: 'PEG Ratio Ascending', value: 'pegRatio'},
  {id: '0', label: 'Fundamental Rank', value: 'fundamentalRank'},
  {id: '1', label: 'Technical Rank', value: 'technicalRank'},
  {id: '2', label: 'Sentimental Rank', value: 'sentimentalRank'},
  {id: '3', label: 'Mutual Fund Rank', value: 'mutualFundRank'},
  {id: '4', label: 'Alphabetical (A-Z)', value: 'alphabeticalAZ'},
];
const SHORT_TERM_TREND = 'short_term_trend';
const LONG_TERM_TREND = 'long_term_trend';
const BULLISH_REVERSAL = [
  {value: 'Inverse Head and Shoulders', label: 'Inverse Head & Shoulders'},
  {value: 'Double Bottom', label: 'Double Bottom'},
  {value: 'Triple Bottom', label: 'Triple Bottom'},
  {value: 'Rounding / Saucer Bottom', label: 'Rounding / Saucer Bottom'},
  {value: 'Falling Wedge', label: 'Falling Wedge'},
  {value: 'Diamond Bottom', label: 'Diamond Bottom'},
  {value: 'Morning Star', label: 'Morning Star'},
  {value: 'Bullish Engulfing', label: 'Bullish Engulfing'},
];

const BULLISH_CONTINUATION = [
  {value: 'Cup and Handle', label: 'Cup & Handle'},
  {value: 'Ascending Triangle', label: 'Ascending Triangle'},
  {value: 'Bullish Flag', label: 'Bullish Flag'},
  {value: 'Bullish Pennant', label: 'Bullish Pennant'},
  {value: 'Bullish Rectangle', label: 'Bullish Rectangle'},
];

const BEARISH_REVERSAL = [
  {value: 'Head and Shoulders', label: 'Head & Shoulders'},
  {value: 'Double Top', label: 'Double Top'},
  {value: 'Triple Top', label: 'Triple Top'},
  {value: 'Rising Wedge', label: 'Rising Wedge'},
  {value: 'Diamond Top', label: 'Diamond Top'},
  {value: 'Rounding Top', label: 'Rounding Top'},
  {value: 'Megaphone / Broadening', label: 'Megaphone / Broadening'},
  {value: 'Bump and Run', label: 'Bump & Run'},
  {value: 'Evening Star', label: 'Evening Star'},
  {value: 'Bearish Engulfing', label: 'Bearish Engulfing'},
];

const BEARISH_CONTINUATION = [
  {value: 'Descending Triangle', label: 'Descending Triangle'},
  {value: 'Bearish Flag', label: 'Bearish Flag'},
  {value: 'Bearish Pennant', label: 'Bearish Pennant'},
  {value: 'Bearish Rectangle', label: 'Bearish Rectangle'},
];

const NEUTRAL_CONTEXTUAL_CONTINUATION = [
  {value: 'Symmetrical Triangle', label: 'Symmetrical Triangle'},
  {value: 'Rectangle / Trading Range', label: 'Rectangle / Trading Range'},
  {value: 'Runaway / Measuring Gap', label: 'Runaway / Measuring Gap'},
];

const NEUTRAL_CONTEXTUAL_REVERSAL = [
  {value: 'Doji', label: 'Doji'},
  {value: 'Breakaway Gap', label: 'Breakaway Gap'},
  {value: 'Exhaustion Gap', label: 'Exhaustion Gap'},
  {value: 'Island Reversal', label: 'Island Reversal'},
];

const TREND = [
  {value: 'Bullish', label: 'Short Term Bullish', type: SHORT_TERM_TREND},
  {value: 'Bullish', label: 'Long Term Bullish', type: LONG_TERM_TREND},
  {value: 'Bearish', label: 'Short Term Bearish', type: SHORT_TERM_TREND},
  {value: 'Bearish', label: 'Long Term Bearish', type: LONG_TERM_TREND},
];

const PATTERN_GROUP_OPTIONS = [
  {label: 'Trend', options: TREND},
  {label: 'Bullish Reversal', options: BULLISH_REVERSAL},
  {label: 'Bullish Continuation', options: BULLISH_CONTINUATION},
  {label: 'Bearish Reversal', options: BEARISH_REVERSAL},
  {label: 'Bearish Continuation', options: BEARISH_CONTINUATION},
  {
    label: 'Neutral / Contextual Continuation',
    options: NEUTRAL_CONTEXTUAL_CONTINUATION,
  },
  {
    label: 'Neutral / Contextual Reversal',
    options: NEUTRAL_CONTEXTUAL_REVERSAL,
  },
];

export {SORT_OPTIONS, PATTERN_GROUP_OPTIONS};
