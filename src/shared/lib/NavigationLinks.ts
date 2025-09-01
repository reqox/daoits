interface DropdownLinks {
  title: string;
  to: string;
}

interface NavigationLinks {
  title: string;
  to: string;
  dropdown?: DropdownLinks[];
}

export const NavigationLinks: NavigationLinks[] = [
  {
    title: 'navigation.coop.title',
    to: 'coop',
    dropdown: [
      {
        title: 'navigation.coop.dropdown.description',
        to: 'coop/description',
      },
    ],
  },
  {
    title: 'navigation.services.title',
    to: 'services/app',
    dropdown: [
      { title: 'navigation.services.dropdown.app', to: 'services/app' },
      { title: 'navigation.services.dropdown.web', to: 'services/web' },
      /* {
          title: 'navigation.services.dropdown.promotion',
          to: 'services/promotion',
        }, */
    ],
  },
  {
    title: 'navigation.developments.title',
    to: 'developments/defibridge',
    dropdown: [
      {
        title: 'navigation.developments.dropdown.defibridge',
        to: 'developments/defibridge',
      },
      {
        title: 'navigation.developments.dropdown.economy',
        to: 'developments/economy',
      },
      // {
      //   title: 'navigation.developments.dropdown.feonyx',
      //   to: 'developments/feonyx',
      // },
    ],
  },
  {
    title: 'navigation.blockchain.title',
    to: 'blockchain',
  },
  // {
  //   title: 'navigation.tokenomics.title',
  //   to: 'tokenomics',
  //   dropdown: [
  //     {
  //       title: 'navigation.tokenomics.dropdown.ifehu',
  //       to: 'tokenomics/ifehu',
  //     },
  //     {
  //       title: 'navigation.tokenomics.dropdown.investor',
  //       to: 'tokenomics/investor',
  //     },
  //   ],
  // },
];
