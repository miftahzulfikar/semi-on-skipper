import type { SkipperRouteEntry } from '@tokopedia/skipper/router';

import MainLayout from '@/layouts/MainLayout';
import DefaultLayout from '@/layouts/DefaultLayout';

import Home from './Home/Lazy';
import About from './About/Lazy';
import Blog from './Blog/Lazy';
import Semi from './Semi/Lazy';

import VerifyParamsLayout from './About/layout/VerifyParams/Lazy';

const ROUTES: SkipperRouteEntry[] = [
  {
    type: 'layout-route',
    layout: MainLayout,
    routes: [
      {
        type: 'nested-route',
        name: 'about',
        path: '/about',
        routes: [
          {
            type: 'route',
            name: 'about-us',
            path: ':slug',
            layout: [VerifyParamsLayout, DefaultLayout],
            component: About,
          },
        ],
      },
      {
        type: 'route',
        name: 'home',
        path: '/',
        layout: [DefaultLayout],
        component: Home,
      },
    ],
  },
  {
    type: 'route',
    name: 'blog',
    path: '/blog',
    component: Blog,
  },
  {
    type: 'route',
    name: 'semi',
    path: '/semi',
    component: Semi,
  },
];

export default ROUTES;
