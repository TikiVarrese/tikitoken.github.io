import { lazy } from 'react'

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Recovery = lazy(() => import('../pages/Recovery'))
const DailyTasks = lazy(() => import('../pages/DailyTasks'))
const Staking = lazy(() => import('../pages/Staking'))
const Sweepstake = lazy(() => import('../pages/Sweepstake'))
const Calculate =lazy(() => import('../pages/Calculator'))
const Tuesday = lazy(() => import('../pages/Tuesday'))

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/recovery',
    component: Recovery,
  },
  {
    path: '/sweepstake',
    component: Sweepstake,
  },
  {
    path: '/staking',
    component: Staking,
  },
  {
    path: '/calculator',
    component: Calculate,
  },
  {
    path: '/tasks',
    component: DailyTasks
  }
  // {
  //   path: '/tikituesday',
  //   component: Tuesday,
  // },
]

export default routes
