import {
  FlatList,
  ScrollView,
  SectionList,
  StyleSheet,
  View,
} from 'react-native';
import {Text} from 'react-native-paper';
import {COLORS} from '../../../constants/theme';
import CustomeHeader from '../../../components/Header/CustomeHeader';
import responsive from '../../../utils/responsive';

const HelpScreen = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <CustomeHeader
        navigation={navigation}
        title={route.name}
        goBack={'goBack'}
      />
      <ScrollView>
        <View style={styles.dataSection}>
          <View style={styles.getingStartSection}>
            <View style={styles.titleSection}>
              <Text style={styles.title}>A. GettingStarted</Text>
            </View>

            <View>
              <Text style={styles.question}>1. Creating Your Account:</Text>

              <Text style={styles.answer}>
                - Visit{' '}
                <Text
                  style={styles.linkText}
                  onPress={() =>
                    handlePress('https://in.intrinsicvalue.ai/register')
                  }>
                  https://in.intrinsicvalue.ai/register
                </Text>{' '}
                to sign up for a free account.
              </Text>

              <Text style={styles.answer}>
                - To log in, navigate to{' '}
                <Text
                  style={styles.linkText}
                  onPress={() =>
                    handlePress('https://in.intrinsicvalue.ai/sign-in')
                  }>
                  https://in.intrinsicvalue.ai/sign-in
                </Text>{' '}
                and enter your credentials.
              </Text>
            </View>

            <View>
              <Text style={styles.question}>2. Adding New Stocks:</Text>
              <Text style={styles.answer}>
                -Once logged in, access the FTSM Watchlist section.
              </Text>
              <Text style={styles.answer}>
                - To find the intrinsic value of a new stock, select 'Add New
                Stock' and choose your desired stock from the list.
              </Text>
            </View>
            <View>
              <Text style={styles.question}>
                {' '}
                3. Calculating Intrinsic Value:
              </Text>
              <Text style={styles.answer}>
                - Edit the 'EPS Growth' and 'Confidence Rate' (optional)
                parameters for your chosen stock to calculate its Intrinsic
                Value.
              </Text>
            </View>
            <View>
              <Text style={styles.question}>4. Portfolio Limits:</Text>
              <Text style={styles.answer}>
                - Your current plan permits adding up to 10 stocks at any given
                time.
              </Text>
            </View>
            <View>
              <Text style={styles.question}>5. Sorting Your Stocks:</Text>
              <Text style={styles.answer}>
                - Use the 'Sort by' feature to organize your stocks. You can
                sort them based on Fundamental, Technical, Sentimental, or
                Mutual Fund Rankings.
              </Text>
            </View>

            <View>
              <Text style={styles.question}>
                6. Company & Stock Information:
              </Text>
              <Text style={styles.answer}>
                - Use the 'Sort by' feature to organize your stocks. You can
                sort them based on Fundamental, Technical, Sentimental, or
                Mutual Fund Rankings.Selecting a company's name in the app
                provides an in-depth exploration of extensive publicly available
                data concerning your selected stock. This includes several key
                aspects:
              </Text>
              <Text style={styles.answer}>
                Business Model Summary, Financial Statements, Cash Flow
                Statements, Balance Sheet, Financial Ratios, Company News,
              </Text>
              <Text style={styles.answer}>
                Each section is designed to enhance your fundamental
                understanding of the chosen stock.
              </Text>
            </View>
          </View>

          <View>
            <View style={styles.titleSection}>
              <Text style={styles.title}>B. FAQ</Text>
            </View>
            <View>
              <Text style={styles.question}>What is Intrinsic Value?</Text>
              <Text style={styles.answer}>
                Intrinsic value is a financial term used to determine the true
                value of an asset, based on its fundamental characteristics
                rather than its current market price. It involves analyzing
                financial metrics and future cash flows to assess what a company
                or asset is genuinely worth. This concept is central to value
                investing, where the goal is to identify and invest in assets
                priced below their intrinsic value.
              </Text>
            </View>
            <View>
              <Text style={styles.question}>What is IntrinsicValue.ai?</Text>
              <Text style={styles.answer}>
                IntrinsicValue.ai is a user-friendly application that enables
                Value Investors to instantly determine the Intrinsic Value of
                any stock with a single click.
              </Text>

              <Text style={styles.answer}>
                The app also features a suite of software tools aimed at aiding
                investors in selecting stocks and making informed decisions,
                relying on solid facts rather than opinions or recommendations.
              </Text>
              <Text style={styles.answer}>
                Emphasizing facts over advice, IntrinsicValue.ai strictly
                provides data-driven insights based on quantitative rankings and
                sophisticated mathematical models, steering clear of offering
                any stock recommendations or advisory services.
              </Text>
            </View>
            <View>
              <Text style={styles.question}>Is the Dashboard data live?</Text>
              <Text style={styles.answer}>
                The data displayed on the dashboard is not real-time and has a
                15-minute delay.
              </Text>
            </View>
            <View>
              <Text style={styles.question}>
                What is the meaning of FTSM Watchlist?
              </Text>
              <Text style={styles.answer}>
                The FTSM Watchlist, one of our tools, encompasses the
                Fundamental, Technical, Sentimental, and Mutual Fund Ranking
                system.
              </Text>
              <Text style={styles.answer}>
                This ranking approach offers an all-encompassing assessment of
                stocks, integrating perspectives from fundamental rankings,
                technical indicators, sentiment rankings, and mutual fund
                investments.
              </Text>
            </View>
            <View>
              <Text style={styles.question}>
                What is Fundamental Rank & how is it calculated?
              </Text>
              <Text style={styles.answer}>
                The Fundamental Rank is determined by assessing the Margin of
                Safety, which represents the percentage difference between the
                Current Market Price and the Intrinsic Value of a stock. Stocks
                with the highest Margin of Safety are assigned a rank of 1,
                while those with lower Margins of Safety, indicating potential
                overvaluation, are ranked lower.
              </Text>
            </View>
            <View>
              <Text style={styles.question}>
                What is Technical Rank & how is it calculated?
              </Text>
              <Text style={styles.answer}>
                The Technical Rank is computed by evaluating Positive, Neutral,
                or Negative indicators related to the stock's price and momentum
                over a specified time period. Users can tailor the specific
                technical indicators in the app's My Strategies section. Stocks
                exhibiting more Positive indicators and fewer Negative
                indicators receive higher rankings.
              </Text>
            </View>
            <View>
              <Text style={styles.question}>
                What is Sentimental Rank & how is it calculated?
              </Text>
              <Text style={styles.answer}>
                The Sentimental Rank is derived from the rankings of Positive,
                Neutral, or Negative sentiment indicators gleaned from various
                news headlines related to a specific stock. Stocks with more
                Positive indicators and fewer Negative indicators are positioned
                at the top of the ranking.
              </Text>
            </View>
            <View>
              <Text style={styles.question}>
                What is Mutual Fund Rank & how is it calculated?
              </Text>
              <Text style={styles.answer}>
                The Mutual Fund Rank is established by considering the net
                investment value contributed by all Indian mutual fund companies
                in a particular stock. The rank is influenced by the percentage
                of net investment in relation to the market capitalization of
                the company; a higher percentage results in a higher rank.
              </Text>
            </View>
            <View>
              <Text style={styles.question}>What is EPS Growth rate?</Text>
              <Text style={styles.answer}>
                The EPS (Earnings Per Share) Growth Rate is a measure of the
                rate at which a company's earnings per share increases over a
                specified period. It is a key indicator of a company's
                profitability and financial health, used by investors to gauge
                its potential for future growth and performance. This growth
                rate is often calculated annually, but can also be examined
                quarterly or over different time frames to assess short-term or
                long-term trends in earnings.
              </Text>
            </View>
            <View>
              <Text style={styles.question}>What is Confidence Rate?</Text>
              <Text style={styles.answer}>
                In value investing, the Confidence Rate refers to an investor's
                degree of certainty in their assumptions and predictions about a
                company's future performance. It's a subjective measure used to
                gauge how confident an investor feels about their rankings of a
                stock, especially when determining its intrinsic value and
                making investment decisions. This rate can influence the
                discount rate or margin of safety applied in valuation models.
              </Text>
            </View>
            <View>
              <Text style={styles.question}>What is Analysts’ Estimate?</Text>
              <Text style={styles.answer}>
                Analysts' Estimate is a consensus forecast made by financial
                experts on key financial metrics like earnings per share (EPS)
                and revenue for a company's future performance. These estimates,
                derived from thorough research and rankings, serve as a
                benchmark for investors to assess a company's potential and can
                significantly impact market sentiment and stock prices. These
                estimates have been sourced from the Yahoo Finance platform.
              </Text>
            </View>
            <View>
              <Text style={styles.question}>What is the Margin of Safety?</Text>
              <Text style={styles.answer}>
                The Margin of Safety is a principle in value investing that
                involves purchasing securities when their market price is
                significantly below their intrinsic value. This approach
                provides a cushion against errors in estimation or unforeseen
                market downturns, thereby reducing the potential risk of loss
                for the investor.
              </Text>
            </View>
            <View>
              <Text style={styles.question}>What is Discount Rate?</Text>
              <Text style={styles.answer}>
                The Discount Rate is a critical rate used in financial rankings
                to calculate the present value of future cash flows, reflecting
                the expected rate of return on an investment. It accounts for
                the time value of money, recognizing that current funds are more
                valuable than the same amount in the future due to their earning
                potential. In evaluating investments, a higher discount rate is
                often applied to riskier ventures to account for the greater
                uncertainty in receiving future returns.
              </Text>
            </View>
            <View>
              <Text style={styles.question}>
                What does Positive, Neutral or Negative indicator mean?
              </Text>
              <Text style={styles.answer}>
                In stock market charts, Positive, Neutral, or Negative
                indicators are technical rankings tools used to interpret market
                trends and investor sentiment towards a particular stock. These
                indicators help investors make informed decisions based on the
                stock's projected performance.
              </Text>
              <Text style={styles.answer}>
                A Positive indicator suggests a potential upward trend or
                bullish sentiment, indicating a good time to buy.
              </Text>
              <Text style={styles.answer}>
                {' '}
                A Neutral indicator implies stability or uncertainty in the
                stock's direction, suggesting a hold position.
              </Text>
              <Text style={styles.answer}>
                Conversely, a Negative indicator signals a potential downward
                trend or bearish sentiment, often interpreted as a sell signal.
              </Text>
              <Text style={styles.answer}>
                {' '}
                These indicators help investors make informed decisions based on
                the stock's projected performance.
              </Text>
              <Text style={styles.answer}>
                These indicators are derived from analyzing stock price and
                trading volume (momentum) in technical rankings, and through
                evaluating market sentiment in sentiment rankings.
              </Text>
            </View>

            <View>
              <Text style={styles.question}>How does My Strategies work?</Text>
              <Text style={styles.answer}>
                "My Strategies" allows users to tailor their technical trading
                approaches. It offers options to choose chart time frames from 1
                day, 1 week, or 1 month, and to select from over 25 oscillators
                and moving average indicators. These indicators and their values
                are computed in real-time.
              </Text>
            </View>
            <View>
              <Text style={styles.question}>
                Where are you getting data from?
              </Text>
              <Text style={styles.answer}>
                IntrinsicValue harnesses a diverse array of both structured and
                unstructured data sources available on the internet.
                Additionally, it employs a range of quantitative models, both
                widely recognized and less conventional, to compute its
                indicators.
              </Text>
            </View>
            <View>
              <Text style={styles.question}>
                Why should you use My Portfolio?
              </Text>
              <Text style={styles.answer}>
                My Portfolio enables you to monitor your trades and discover
                your Internal Rate of Return (IRR). Unlike many portfolio
                software that concentrate on absolute returns, this feature
                stands out by offering the capability to calculate IRRs.
              </Text>
            </View>
            <View>
              <Text style={styles.question}>
                How does the Leaderboard work?
              </Text>
              <Text style={styles.answer}>
                The Leaderboard on IntrinsicValue.ai is a playful, game-like
                element that lets users add stocks to their FTSM Watchlist based
                on their top 10 performance in weekly, monthly, and annual
                returns. While this feature adds an entertaining dimension to
                the platform, it should be viewed solely for fun and not as a
                source of stock recommendations or advice.
              </Text>
            </View>

            <View>
              <Text style={styles.question}>
                How do I suggest improvements to IntrinsicValue.ai?
              </Text>
              <Text style={styles.answer}>
                You have the option to complete the Feedback form available on
                the IntrinsicValue.ai website & app.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  dataSection: {
    flexDirection: 'column',
    padding: responsive.padding(10),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  getingStartSection: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  titleSection: {
    alignItems: 'flex-start',
  },
  title: {
    margin: responsive.margin(10),
    fontWeight: 'bold',
    color: COLORS.primary,
    fontSize: responsive.fontSize(16),
    fontFamily: 'inter',
  },
  question: {
    marginTop: responsive.margin(5),
    fontWeight: 'bold',
    color: '#5E5F60',
    fontSize: responsive.fontSize(16),
    fontFamily: 'inter',
  },
  answer: {
    fontSize: responsive.fontSize(11),
    textAlign: 'justify',
    fontFamily: 'inter',
  },
  linkText: {
    fontFamily: 'inter',
    color: COLORS.primary,
    textDecorationLine: 'underline',
    paddingLeft: 5,
  },
});

export default HelpScreen;
