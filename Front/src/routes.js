import Home from "./views/Home.vue";
import Iniciado from "./views/Inciado.vue";

export const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/iniciado", name: "inciado", component: Iniciado }
];
