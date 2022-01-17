import Home from './../pages/Home';
import Teste from './../pages/Teste';
import Teste2 from './../pages/Teste2';

const dashboardRoutes = [
  {
    path: "/home",
    name: "Home",
    icon: "nc-icon nc-chart-pie-35",
    component: Home,
  },
  {
    path: "/teste",
    name: "Teste",
    icon: "nc-icon nc-chart-pie-35",
    component: Teste,
  },
  {
    path: "/",
    name: "Teste2",
    icon: "nc-icon nc-chart-pie-35",
    component: Teste2,
  },
];

export default dashboardRoutes;