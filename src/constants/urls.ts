export const NORMAL_WEB_HOSTNAME = 'normalfinance.io';

export const NORMAL_WEB_URL = `https://${NORMAL_WEB_HOSTNAME}`;
export const NORMAL_APP_URL = `https://app.${NORMAL_WEB_HOSTNAME}`;

const helpUrl = 'https://help.normalfinance.io';

export const normalUrls = {
  // Help and web articles/items
  helpUrl,
  helpArticleUrls: {
    apiKey: {
      coinbase: `${helpUrl}/en/articles/8420718-how-to-create-a-coinbase-api-key`,
      binance: `${helpUrl}/en/articles/8412926-how-to-create-and-set-up-binance-api-key`,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      binance_us: `${helpUrl}/en/articles/8415116-how-to-create-and-set-up-binance-us-api-key`,
      bybit: `${helpUrl}/en/articles/8420567-how-to-create-and-set-up-bybit-api-key`,
      okx: `${helpUrl}/en/articles/8420945-how-to-create-and-set-up-okx-api-key`,
      kraken: `${helpUrl}/en/articles/9010535-how-to-create-a-kraken-api-key`,
      gemini: `${helpUrl}/en/articles/8420781-how-to-create-and-set-up-gemini-api-key`,
      kucoin: `${helpUrl}/en/articles/8420905-how-to-create-and-set-up-kucoin-api-key`,
    },
  },
  docsUrl: `https://docs.${NORMAL_WEB_HOSTNAME}`,
  socialUrls: {
    twitter: 'https://twitter.com/normalfi',
    discord: 'https://discord.gg/xQMvceZjeS',
    github: 'https://github.com/normalfinance',
  },
  termsOfServiceUrl: 'https://www.normalfinance.io/legal/terms-of-service',
  privacyPolicyUrl: 'https://www.normalfinance.io/legal/privacy-policy',

  // Core API Urls
  apiOrigin: 'https://api.normalfinance.io',

  // API Paths
  apiPaths: {
    exchanges: {
      portfolios: '/v1/exchanges/portfolios',
      orders: '/v1/exchanges/orders',
      paymentMethods: '/v1/exchanges/payment-methods',
      address: '/v1/exchanges/address',
      deposits: '/v1/exchanges/deposits',
      balance: '/v1/exchanges/balance',
      transactions: '/v1/exchanges/transactions',
    },
    investments: {
      execute: '/v1/investments/execute',
      charge: '/v1/investments/charge',
    },
    divestments: {
      execute: '/v1/divestments/execute',
    },
    schedules: '/v1/schedules',
  },

  // Web Interface Urls
  webInterfaceLendingUrl: `${NORMAL_WEB_URL}/lending`,
  webInterfaceIndexesUrl: `${NORMAL_WEB_URL}/indexes`,
  webInterfaceInvestmentsUrl: `${NORMAL_WEB_URL}/investments`,
  webInterfaceOrdersUrl: `${NORMAL_WEB_URL}/orders`,
  webInterfaceEducationUrl: `${NORMAL_WEB_URL}/education`,
  webInterfaceExchangesUrl: `${NORMAL_WEB_URL}/user/account?tab=exchanges`,
  webInterfaceReferralsUrl: `${NORMAL_WEB_URL}/user/account?tab=referrals`,
  webInterfaceSecurityUrl: `${NORMAL_WEB_URL}/user/account?tab=security`,
  webInterfaceNotificationsUrl: `${NORMAL_WEB_URL}/user/account?tab=notifications`,

  exchangeAccountRegistrationUrls: {
    coinbase: 'https://www.coinbase.com/signup',
    binance: 'https://accounts.binance.com/register',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    binance_us: 'https://www.binance.us/register',
    bybit: 'https://www.bybit.com/register',
    okx: 'https://www.okx.com/account/register',
    kraken: 'https://www.kraken.com/sign-up',
    gemini: 'https://exchange.gemini.com/register',
    kucoin: 'https://www.kucoin.com/ucenter/signup',
  },
};
