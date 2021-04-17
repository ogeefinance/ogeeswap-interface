import { MenuEntry } from '@ogeefinance/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://ogeeswap.com/#/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://ogeeswap.com/#/pools',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://info.ogee.exchange',
      },
      {
        label: 'Tokens',
        href: 'https://info.ogee.exchange/#/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://info.ogee.exchange/#/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://info.ogee.exchange/#/accounts',
      },
    ],
  },
  {
    label: 'IDO',
    icon: 'IfoIcon',
    href: 'https://ogeeswap.com/#/ido',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/ogeefinance',
      },
      {
        label: 'Docs',
        href: 'https://docs.ogeeswap.com',
      },
    ],
  },
]

export default config
