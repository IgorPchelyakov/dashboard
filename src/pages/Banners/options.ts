const blockChild = [
  {
    value: 'Desktop Блок №1 Головна',
    label: 'Desktop Блок №1 Головна',
  },
  {
    value: 'Desktop Блок №2 Головна',
    label: 'Desktop Блок №2 Головна',
  },
  {
    value: 'Desktop Блок №3 Головна',
    label: 'Desktop Блок №3 Головна',
  },
  {
    value: 'Desktop Блок №4 Головна',
    label: 'Desktop Блок №4 Головна',
  },
  {
    value: 'Desktop Блок №5 Головна',
    label: 'Desktop Блок №5 Головна',
  },
  {
    value: 'Desktop Блок №1 Публікації',
    label: 'Desktop Блок №1 Публікації',
  },
  {
    value: 'Desktop Блок №2 Публікації',
    label: 'Desktop Блок №2 Публікації',
  },
  {
    value: 'Desktop Блок №1 Розділи',
    label: 'Desktop Блок №1 Розділи',
  },
  {
    value: 'Desktop Блок №2 Розділи',
    label: 'Desktop Блок №2 Розділи',
  },
  {
    value: 'Desktop Блок №3 Розділи',
    label: 'Desktop Блок №3 Розділи',
  },
  {
    value: 'Mobile Блок №1 Головна',
    label: 'Mobile Блок №1 Головна',
  },
  {
    value: 'Mobile Блок №2 Головна',
    label: 'Mobile Блок №2 Головна',
  },
  {
    value: 'Mobile Блок №3 Головна',
    label: 'Mobile Блок №3 Головна',
  },
  {
    value: 'Mobile Блок №4 Головна',
    label: 'Mobile Блок №4 Головна',
  },
  {
    value: 'Mobile Блок №5 Головна',
    label: 'Mobile Блок №5 Головна',
  },
  {
    value: 'Mobile Блок №1 Публікації',
    label: 'Mobile Блок №1 Публікації',
  },
  {
    value: 'Mobile Блок №2 Публікації',
    label: 'Mobile Блок №2 Публікації',
  },
  {
    value: 'Mobile Блок №1 Розділи',
    label: 'Mobile Блок №1 Розділи',
  },
  {
    value: 'Mobile Блок №2 Розділи',
    label: 'Mobile Блок №2 Розділи',
  },
  {
    value: 'Mobile Блок №3 Розділи',
    label: 'Mobile Блок №3 Розділи',
  },
];

export const bannerFeeds = [
  {
    value: 'Загальнонаціональна',
    label: 'Загальнонаціональна',
  },
  {
    value: 'Київська область',
    label: 'Київська область',
    children: [
      {
        value: 'Київ',
        label: 'Київ',
        children: blockChild,
      },
      {
        value: 'Біла Церква',
        label: 'Біла Церква',
        children: blockChild,
      },
      {
        value: 'Бровари',
        label: 'Бровари',
        children: blockChild,
      },
    ],
  },
  {
    value: 'Житомирська область',
    label: 'Житомирська область',
    children: [
      {
        value: 'Київ',
        label: 'Київ',
        children: blockChild,
      },
      {
        value: 'Біла Церква',
        label: 'Біла Церква',
        children: blockChild,
      },
      {
        value: 'Бровари',
        label: 'Бровари',
        children: blockChild,
      },
    ],
  },
];
