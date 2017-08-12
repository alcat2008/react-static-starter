
// import App from './App';
import { Home, Foo, About } from './pages'

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
  '/foo': Foo,
  '/about': About
}

export default routes
