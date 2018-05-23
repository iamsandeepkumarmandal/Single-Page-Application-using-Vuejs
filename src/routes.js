//define your routes
import Hello from './components/HelloWorld';
import About from './components/About';


const ROUTES_CONFIG = [
  { path: '/', component: Hello },
  { path: '/about', component: About }
];
export default ROUTES_CONFIG;
