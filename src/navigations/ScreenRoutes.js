import {
  AlgoTradeIcon,
  Homeicon,
  InsightIcon,
  KiteConnectIcon,
  MyStrategiesIcon,
  PortfolioIcon,
  ReferAndearnIcon,
  SubscriptionIcon,
  LeaderBoardIcon,
  WatchlistIcon,
  ChangePassIcon,
  FeedBackIcon,
  HelpIcons,
  SettingIcons,
} from '../assets/SVG/appiconsvg/Icons';
import {COLORS} from '../constants/theme';

export const screens = {
  HomeTabs: 'HomeTabs',
  Home: 'Home',
  HomeNavigator: 'HomeNavigator',
  // Watchlist: 'Watchlist',
  WatchlistNavigator: 'WatchlistNavigator',
  // AlgoTrader: 'AlgoTrader',
  AlgoTraderNavigator: 'AlgoTraderNavigator',
  // Portfolio: 'Portfolio',
  PortfolioNavigator: 'PortfolioNavigator',
  // Insights: 'Insights',
  InsightsNavigator: 'InsightsNavigator',
  // Drawer navigations

  // LeaderBoard: 'Leaderboard',
  LeaderBoardNavigator: 'LeaderBoardNavigator',
  // MyStrategies: 'MyStrategies',
  MyStrategiesNavigator: 'MyStrategiesNavigator',
  // ReferAndEarn: 'ReferAndEarn',
  ReferAndEarnNavigator: 'ReferAndEarnNavigator',
  // Subscription: 'Subscription',
  SubscriptionNavigator: 'SubscriptionNavigator',
  // KiteToConnect: 'KiteToConnect',
  KiteToConnectNavigator: 'KiteToConnectNavigator',
  // AccountDetails: 'AccountDetails',
  AccountDetailsNavigator: 'AccountDetailNavigator',
};

export const routes = [
  {
    name: screens.HomeTabs,
    focusedRoute: screens.HomeTabs,
    title: 'Home',
    showInTab: false,
    showInDrawer: true,
    icon: focused => (
      <Homeicon color={focused ? `${COLORS.primary}` : '#0B588D'} size={24} />
    ),
  },
  {
    name: screens.HomeNavigator,
    focusedRoute: screens.HomeNavigator,
    title: 'Home',
    showInTab: true,
    showInDrawer: false,
    icon: focused => (
      <Homeicon color={focused ? `${COLORS.primary}` : '#0B588D'} size={24} />
    ),
  },
  // {
  //   name: screens.Watchlist,
  //   focusedRoute: screens.WatchlistNavigator,
  //   title: 'Watchlist',
  //   showInTab: true,
  //   showInDrawer: false,
  //   icon: focused => (
  //     <WatchlistIcon
  //       color={focused ? `${COLORS.primary}` : '#0B588D'}
  //       size={24}
  //     />
  //   ),
  // },
  {
    name: screens.WatchlistNavigator,
    focusedRoute: screens.WatchlistNavigator,
    title: 'Watchlist',
    showInTab: true,
    showInDrawer: false,
    icon: focused => (
      <WatchlistIcon
        color={focused ? `${COLORS.primary}` : '#0B588D'}
        size={24}
      />
    ),
  },
  // {
  //   name: screens.AlgoTrader,
  //   focusedRoute: screens.AlgoTraderNavigator,
  //   title: 'AlgoTrader',
  //   showInTab: true,
  //   showInDrawer: false,
  //   icon: focused => (
  //     <AlgoTradeIcon
  //       color={focused ? `${COLORS.primary}` : '#0B588D'}
  //       size={24}
  //     />
  //   ),
  // },
  {
    name: screens.AlgoTraderNavigator,
    focusedRoute: screens.AlgoTraderNavigator,
    title: 'AlgoTrader',
    showInTab: true,
    showInDrawer: false,
    icon: focused => (
      <AlgoTradeIcon
        color={focused ? `${COLORS.primary}` : '#0B588D'}
        size={24}
      />
    ),
  },
  // {
  //   name: screens.Portfolio,
  //   focusedRoute: screens.PortfolioNavigator,
  //   title: 'Portfolio',
  //   showInTab: true,
  //   showInDrawer: false,
  //   icon: focused => (
  //     <PortfolioIcon
  //       color={focused ? `${COLORS.primary}` : '#0B588D'}
  //       size={24}
  //     />
  //   ),
  // },
  {
    name: screens.PortfolioNavigator,
    focusedRoute: screens.AlgoTraderNavigator,
    title: 'Portfolio',
    showInTab: true,
    showInDrawer: false,
    icon: focused => (
      <PortfolioIcon
        color={focused ? `${COLORS.primary}` : '#0B588D'}
        size={24}
      />
    ),
  },
  // {
  //   name: screens.Insights,
  //   focusedRoute: screens.InsightsNavigator,
  //   title: 'Insights',
  //   showInTab: true,
  //   showInDrawer: false,
  //   icon: focused => (
  //     <InsightIcon
  //       color={focused ? `${COLORS.primary}` : '#0B588D'}
  //       size={24}
  //     />
  //   ),
  // },
  {
    name: screens.InsightsNavigator,
    focusedRoute: screens.InsightsNavigator,
    title: 'Insights',
    showInTab: true,
    showInDrawer: false,
    icon: focused => (
      <InsightIcon
        color={focused ? `${COLORS.primary}` : '#0B588D'}
        size={24}
      />
    ),
  },

  //Drawer navigations
  // {
  //   name: screens.LeaderBoard,
  //   focusedRoute: screens.LeaderBoardNavigator,
  //   title: 'LeaderBoard',
  //   showInTab: false,
  //   showInDrawer: false,
  //   icon: focused => (
  //     <LeaderBoardIcon
  //       color={focused ? `${COLORS.primary}` : '#0B588D'}
  //       size={24}
  //     />
  //   ),
  // },
  {
    name: screens.LeaderBoardNavigator,
    focusedRoute: screens.LeaderBoardNavigator,
    title: 'LeaderBoard',
    showInTab: false,
    showInDrawer: true,
    icon: focused => (
      <LeaderBoardIcon
        color={focused ? `${COLORS.primary}` : '#0B588D'}
        size={24}
      />
    ),
  },
  // {
  //   name: screens.MyStrategies,
  //   focusedRoute: screens.MyStrategiesNavigator,
  //   title: 'My Strategies',
  //   showInTab: false,
  //   showInDrawer: false,
  //   icon: focused => (
  //     <MyStrategiesIcon
  //       color={focused ? `${COLORS.primary}` : '#0B588D'}
  //       size={24}
  //     />
  //   ),
  // },
  {
    name: screens.MyStrategiesNavigator,
    focusedRoute: screens.MyStrategiesNavigator,
    title: 'My Strategies',
    showInTab: false,
    showInDrawer: true,
    icon: focused => (
      <MyStrategiesIcon
        color={focused ? `${COLORS.primary}` : '#0B588D'}
        size={24}
      />
    ),
  },
  // {
  //   name: screens.ReferAndEarn,
  //   focusedRoute: screens.ReferAndEarnNavigator,
  //   title: 'Refer & Earn',
  //   showInTab: false,
  //   showInDrawer: false,
  //   icon: focused => (
  //     <ReferAndearnIcon
  //       color={focused ? `${COLORS.primary}` : '#0B588D'}
  //       size={24}
  //     />
  //   ),
  // },
  {
    name: screens.ReferAndEarnNavigator,
    focusedRoute: screens.ReferAndEarnNavigator,
    title: 'Refer & Earn',
    showInTab: false,
    showInDrawer: true,
    icon: focused => (
      <ReferAndearnIcon
        color={focused ? `${COLORS.primary}` : '#0B588D'}
        size={24}
      />
    ),
  },
  // {
  //   name: screens.Subscription,
  //   focusedRoute: screens.SubscriptionNavigator,
  //   title: 'Subscription',
  //   showInTab: false,
  //   showInDrawer: false,
  //   icon: focused => (
  //     <SubscriptionIcon
  //       color={focused ? `${COLORS.primary}` : '#0B588D'}
  //       size={24}
  //     />
  //   ),
  // },
  {
    name: screens.SubscriptionNavigator,
    focusedRoute: screens.SubscriptionNavigator,
    title: 'Subscription',
    showInTab: false,
    showInDrawer: true,
    icon: focused => (
      <SubscriptionIcon
        color={focused ? `${COLORS.primary}` : '#0B588D'}
        size={24}
      />
    ),
  },
  // {
  //   name: screens.KiteToConnect,
  //   focusedRoute: screens.KiteToConnectNavigator,
  //   title: 'Kite to Connect',
  //   showInTab: false,
  //   showInDrawer: false,
  //   icon: focused => (
  //     <KiteConnectIcon
  //       color={focused ? `${COLORS.primary}` : '#0B588D'}
  //       size={24}
  //     />
  //   ),
  // },
  {
    name: screens.KiteToConnectNavigator,
    focusedRoute: screens.KiteToConnectNavigator,
    title: 'Kite to Connect',
    showInTab: false,
    showInDrawer: true,
    icon: focused => (
      <KiteConnectIcon
        color={focused ? `${COLORS.primary}` : '#0B588D'}
        size={24}
      />
    ),
  },
  // {
  //   name: screens.AccountDetails,
  //   focusedRoute: screens.AccountDetailsNavigator,
  //   title: 'Account Details',
  //   showInTab: false,
  //   showInDrawer: false,
  // },
  {
    name: screens.AccountDetailsNavigator,
    focusedRoute: screens.AccountDetailsNavigator,
    title: 'Account Details',
    showInTab: false,
    showInDrawer: false,
  },
];

export const screenRoutes = [
  {
    screenName: 'Settings',
    route: 'Settings',
    icon: focused => (
      <SettingIcons
        color={focused ? `${COLORS.primary}` : '#0B588D'}
        size={24}
      />
    ),
  },
  {
    screenName: 'Change Password',
    route: 'Chagnepassword',
    icon: focused => (
      <ChangePassIcon
        color={focused ? `${COLORS.primary}` : '#0B588D'}
        size={24}
      />
    ),
  },
  {
    screenName: 'Help',
    route: 'Help',
    icon: focused => (
      <HelpIcons color={focused ? `${COLORS.primary}` : '#0B588D'} size={24} />
    ),
  },
  {
    screenName: 'Feedback',
    route: 'Feedback',
    icon: focused => (
      <FeedBackIcon
        color={focused ? `${COLORS.primary}` : '#0B588D'}
        size={24}
      />
    ),
  },
];
