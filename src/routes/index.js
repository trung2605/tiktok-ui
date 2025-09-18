
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Settings from '~/pages/Settings';
import Upload from '~/pages/Upload';
import HeaderOnly from '~/components/Layout/HeaderOnly';
import Search from '~/pages/Search';

// Public routes that can be accessed without authentication
const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/following',
    component: Following,
  },
  {
    path: '/profile',
    component: Profile,
  },
   {
    path: '/settings',
    component: Settings,
  },
  {
    path: '/upload',
    component: Upload,
    layout: HeaderOnly, // No layout for the upload page
  },
  {
    path: '/search',
    component: Search,
    layout: null, // No layout for the search page
  },
];

// Private routes that require authentication
const privateRoutes = [
 
];

export { publicRoutes, privateRoutes };
