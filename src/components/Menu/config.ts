import { MenuEntry } from '@ogeefinance/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: './',
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
    href: 'https://farm.ogeeswap.com/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://farm.ogeeswap.com/pools',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://info.ogeeswap.com',
      },
      {
        label: 'Tokens',
        href: 'https://info.ogeeswap.com/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://info.ogeeswap.com/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://info.ogeeswap.com/accounts',
      },
    ],
  },
  {
    label: 'IDO',
    icon: 'IfoIcon',
    href: 'https://farm.ogeeswap.com/ido',
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
