export const Tabs = {
  watchlist1: [
    {
      watchlist_name: 'List 1',
      watchlist_namestatus: true,
      stockcapacity: '100',
      usestock: 0,
      id: 1,
    },
  ],
  watchlist2: [
    {
      watchlist_name: 'List 2',
      watchlist_namestatus: true,
      stockcapacity: '100',
      usestock: 12,
      id: 2,
    },
  ],
  watchlist3: [
    {
      watchlist_name: 'List 3',
      watchlist_namestatus: true,
      stockcapacity: '100',
      usestock: 11,
      id: 3,
    },
  ],
};
//inside the watchlist screen these tabs will be editable only
export const watchlistNames = Object.values(Tabs).map(
  item => item[0].watchlist_name,
);
