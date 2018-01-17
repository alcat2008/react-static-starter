
// import App from './App';
import { Home, Vote } from './pages'

// const routes = {
//   path: '/',
//   component: App,
//   indexRoute: { component: Home },
//   childRoutes: [
//     { path: 'foo', component: Foo },
//     { path: 'page:index', component: SubPage },
//     { path: '*', component:  },
//   ]
// };

const routes = {
  '/': Home,
  '/vote': Vote,
}

export default routes
