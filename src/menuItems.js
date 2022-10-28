export const menuItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Search by Category',
    url: '/about',
    submenu: [
      {
        title: 'Marvel',
        url: 'marvel',
      },
      {
        title: 'DC',
        url: 'dc',
      },
      {
        title: 'Star Trek',
        url: 'startrek',
      },
      {
        title: 'Anime',
        url: 'anime',
      },
      {
        title: 'Extra',
        submenu: [
          {
            title: 'Something',
            url: '/',
          },
          {
            title: 'Else',
            url: '/',
          },
        ],
      },
    ],
  },
];
