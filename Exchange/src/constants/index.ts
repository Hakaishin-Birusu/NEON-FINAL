import { ChainId, JSBI, Percent, Token, WETH } from "@vixelloswap/sdk";
import { AbstractConnector } from "@web3-react/abstract-connector";

import { injected, walletconnect, walletlink } from "../connectors";

export const ROUTER_ADDRESS = "0x2d35813A45b7F0bc162EC3f3d464722C2e717C2d";

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[];
};

export const WNEON = new Token(
  ChainId.NEON_DEVNET,
  "0x11adC2d986E334137b9ad0a0F290771F31e9517F",
  18,
  "WNEON",
  "Wrapped NEON"
);
export const USDT = new Token(
  ChainId.NEON_DEVNET,
  "0xAA24A5A5E273EFAa64a960B28de6E27B87FfDFfc",
  18,
  "USDT",
  "USDT"
);
export const wDAI = new Token(
  ChainId.NEON_DEVNET,
  "0x4954cd6230C19e63B7c7b131760Ef0C0c424321C",
  18,
  "wDAI",
  "wDAI"
);
export const USDC = new Token(
  ChainId.NEON_DEVNET,
  "0xC659B2633Ed725e5346396a609d8f31794d6ac50",
  18,
  "USDC",
  "USDC"
);
export const ETH = new Token(
  ChainId.NEON_DEVNET,
  "0x90306D9492eB658e47A64Ef834e76c81A0242598",
  18,
  "ETH",
  "ETH"
);
export const wBTC = new Token(
  ChainId.NEON_DEVNET,
  "0x07A274154D79C23d5cd7ba78a243645E419CDd46",
  18,
  "wBTC",
  "wBTC"
);
export const AAVE = new Token(
  ChainId.NEON_DEVNET,
  "0xAb94bD2221cAc77FEbDB0B979Eb8839Ed7dDB981",
  18,
  "AAVE",
  "AAVE"
);
export const wCRV = new Token(
  ChainId.NEON_DEVNET,
  "0xcd7cD0Fe96D89aA98F1cB8f17cD31dCb6eA90D0d",
  18,
  "wCRV",
  "wCRV"
);
export const SUSHI = new Token(
  ChainId.NEON_DEVNET,
  "0x74bcA1362b31d52198E102d9E5f5B9af360D6750",
  18,
  "SUSHI",
  "SUSHI"
);
export const wBAL = new Token(
  ChainId.NEON_DEVNET,
  "0x4C694ac087B2D1DFcB7e868af6C0561f070B7f6C",
  18,
  "wBAL",
  "wBAL"
);

const WETH_ONLY: ChainTokenList = {
  [ChainId.MAINNET]: [WETH[ChainId.MAINNET]],
  [ChainId.ROPSTEN]: [WETH[ChainId.ROPSTEN]],
  [ChainId.RINKEBY]: [WETH[ChainId.RINKEBY]],
  [ChainId.GÖRLI]: [WETH[ChainId.GÖRLI]],
  [ChainId.KOVAN]: [WETH[ChainId.KOVAN]],
  [ChainId.NEON_DEVNET]: [WETH[ChainId.NEON_DEVNET]],
  [ChainId.NEON_MAINNET]: [WETH[ChainId.NEON_MAINNET]],
};

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [
    ...WETH_ONLY[ChainId.MAINNET],
    WNEON,
    USDT,
    wDAI,
    USDC,
    ETH,
    wBTC,
    AAVE,
    wCRV,
    SUSHI,
    wBAL,
  ],
  [ChainId.NEON_DEVNET]: [
    ...WETH_ONLY[ChainId.NEON_DEVNET],
    WNEON,
    USDT,
    wDAI,
    USDC,
    ETH,
    wBTC,
    AAVE,
    wCRV,
    SUSHI,
    wBAL,
  ],
  [ChainId.NEON_MAINNET]: [
    ...WETH_ONLY[ChainId.NEON_MAINNET],
    WNEON,
    USDT,
    wDAI,
    USDC,
    ETH,
    wBTC,
    AAVE,
    wCRV,
    SUSHI,
    wBAL,
  ],
};

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: {
  [chainId in ChainId]?: { [tokenAddress: string]: Token[] };
} = {
  [ChainId.MAINNET]: {
    // [AMPL.address]: [DAI, WETH[ChainId.MAINNET]],
  },
};

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [
    ...WETH_ONLY[ChainId.MAINNET],
    WNEON,
    USDT,
    wDAI,
    USDC,
    ETH,
    wBTC,
    AAVE,
    wCRV,
    SUSHI,
    wBAL,
  ],
  [ChainId.NEON_DEVNET]: [
    ...WETH_ONLY[ChainId.NEON_DEVNET],
    WNEON,
    USDT,
    wDAI,
    USDC,
    ETH,
    wBTC,
    AAVE,
    wCRV,
    SUSHI,
    wBAL,
  ],
  [ChainId.NEON_MAINNET]: [
    ...WETH_ONLY[ChainId.NEON_MAINNET],
    WNEON,
    USDT,
    wDAI,
    USDC,
    ETH,
    wBTC,
    AAVE,
    wCRV,
    SUSHI,
    wBAL,
  ],
};

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [
    ...WETH_ONLY[ChainId.MAINNET],
    WNEON,
    USDT,
    wDAI,
    USDC,
    ETH,
    wBTC,
    AAVE,
    wCRV,
    SUSHI,
    wBAL,
  ],
  [ChainId.NEON_DEVNET]: [
    ...WETH_ONLY[ChainId.NEON_DEVNET],
    WNEON,
    USDT,
    wDAI,
    USDC,
    ETH,
    wBTC,
    AAVE,
    wCRV,
    SUSHI,
    wBAL,
  ],
  [ChainId.NEON_MAINNET]: [
    ...WETH_ONLY[ChainId.NEON_MAINNET],
    WNEON,
    USDT,
    wDAI,
    USDC,
    ETH,
    wBTC,
    AAVE,
    wCRV,
    SUSHI,
    wBAL,
  ],
};

export const PINNED_PAIRS: {
  readonly [chainId in ChainId]?: [Token, Token][];
} = {
  // [ChainId.MAINNET]: [
  //   [
  //     new Token(
  //       ChainId.MAINNET,
  //       "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
  //       8,
  //       "cDAI",
  //       "Compound Dai"
  //     ),
  //     new Token(
  //       ChainId.MAINNET,
  //       "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
  //       8,
  //       "cUSDC",
  //       "Compound USD Coin"
  //     ),
  //   ],
  //   [USDC, USDT],
  //   [DAI, USDT],
  // ],
};

export interface WalletInfo {
  connector?: AbstractConnector;
  name: string;
  iconName: string;
  description: string;
  href: string | null;
  color: string;
  primary?: true;
  mobile?: true;
  mobileOnly?: true;
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  INJECTED: {
    connector: injected,
    name: "Injected",
    iconName: "arrow-right.svg",
    description: "Injected web3 provider.",
    href: null,
    color: "#010101",
    primary: true,
  },
  METAMASK: {
    connector: injected,
    name: "MetaMask",
    iconName: "metamask.png",
    description: "Easy-to-use browser extension.",
    href: null,
    color: "#E8831D",
  },
  WALLET_CONNECT: {
    connector: walletconnect,
    name: "WalletConnect",
    iconName: "walletConnectIcon.svg",
    description: "Connect to Trust Wallet, Rainbow Wallet and more...",
    href: null,
    color: "#4196FC",
    mobile: true,
  },
  WALLET_LINK: {
    connector: walletlink,
    name: "Coinbase Wallet",
    iconName: "coinbaseWalletIcon.svg",
    description: "Use Coinbase Wallet app on mobile device",
    href: null,
    color: "#315CF5",
  },
  COINBASE_LINK: {
    name: "Open in Coinbase Wallet",
    iconName: "coinbaseWalletIcon.svg",
    description: "Open in Coinbase Wallet app.",
    href: "https://go.cb-w.com/mtUDhEZPy1",
    color: "#315CF5",
    mobile: true,
    mobileOnly: true,
  },
};

export const NetworkContextName = "NETWORK";

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 50;
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20;

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000));
export const BIPS_BASE = JSBI.BigInt(10000);
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(
  JSBI.BigInt(100),
  BIPS_BASE
); // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(
  JSBI.BigInt(300),
  BIPS_BASE
); // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(
  JSBI.BigInt(500),
  BIPS_BASE
); // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(
  JSBI.BigInt(1000),
  BIPS_BASE
); // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(
  JSBI.BigInt(1500),
  BIPS_BASE
); // 15%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(
  JSBI.BigInt(10),
  JSBI.BigInt(16)
); // .01 ETH
export const BETTER_TRADE_LINK_THRESHOLD = new Percent(
  JSBI.BigInt(75),
  JSBI.BigInt(10000)
);

// the Uniswap Default token list lives here
export const DEFAULT_TOKEN_LIST_URL =
  "https://unpkg.com/@vixelloswap/default-token-list@latest";
