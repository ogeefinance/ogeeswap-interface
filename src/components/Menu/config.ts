import { MenuEntry } from '@ogeefinance/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://farm.ogee.finance/',
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
    href: 'https://farm.ogee.finance/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://farm.ogee.finance/syrup',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://farm.ogee.finance/lottery',
  },
  {
    label: 'NFT',
    icon: 'NftIcon',
    href: 'https://farm.ogee.finance/nft',
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    calloutClass: 'rainbow',
    items: [
      {
        label: 'Leaderboard',
        href: 'https://farm.ogee.finance/teams',
      },
      {
        label: 'Task Center',
        href: 'https://farm.ogee.finance/profile/tasks',
      },
      {
        label: 'Your Profile',
        href: 'https://farm.ogee.finance/profile',
      },
    ],
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
        href: 'https://info.ogee.exchange/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://info.ogee.exchange/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://info.ogee.exchange/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: 'https://ogee.finance/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Voting',
        href: 'https://voting.ogee.finance',
      },
      {
        label: 'Github',
        href: 'https://github.com/ogeefinance',
      },
      {
        label: 'Docs',
        href: 'https://docs.ogee.finance',
      },
      {
        label: 'Blog',
        href: 'https://ogeeswap.medium.com',
      },
    ],
  },
]

export default config
