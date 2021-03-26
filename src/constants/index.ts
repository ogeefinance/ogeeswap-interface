import { ChainId, JSBI, Percent, Token, WETH } from '@ogeefinance/ogeeswap-sdk'

export const ROUTER_ADDRESS = '0xdb4De0AcAdb5ddB622B7493bE981E65584b4AD04'

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

export const DAI = new Token(ChainId.MAINNET, '0x3D760a45D0887DFD89A2F5385a236B29Cb46ED2a', 18, 'DAI', 'Dai Token')
export const HUSD = new Token(ChainId.MAINNET, '0x0298c2b32eaE4da002a15f36fdf7615BEa3DA047', 18, 'HUSD', 'HUSD Token')
export const USDT = new Token(ChainId.MAINNET, '0xa71EdC38d189767582C38A3145b5873052c3e47a', 18, 'USDT', 'Tether USD')
export const WHT = new Token(
  ChainId.MAINNET,
  '0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F',
  18,
  'WHT',
  'Wrapped HT'
)
export const ETH = new Token(
  ChainId.MAINNET,
  '0x64FF637fB478863B7468bc97D30a5bF3A428a1fD',
  18,
  'ETH',
  'Heco-Peg ETH Token'
)

const WETH_ONLY: ChainTokenList = {
  [ChainId.MAINNET]: [WETH[ChainId.MAINNET]],
  [ChainId.HECOTESTNET]: [WETH[ChainId.HECOTESTNET]],
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, HUSD, USDT, ETH],
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {},
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, HUSD, USDT],
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, HUSD, USDT],
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.MAINNET]: [
    [
      new Token(ChainId.MAINNET, '0x81c3BB76508BB4668fD38DDA71655972F4a3526F', 18, 'OGE', 'Ogee Token'),
      new Token(ChainId.MAINNET, '0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F', 18, 'WHT', 'Wrapped HT'),
    ],
    [HUSD, USDT],
    [DAI, USDT],
  ],
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 80
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH
