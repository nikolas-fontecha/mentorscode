import Home from "./views/Home.vue";
import Mentorias from "./views/Mentorias.vue";
import Iniciado from "./views/Inciado.vue";

export const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/mentorias", name: "mentorias", component: Mentorias },
  { path: "/iniciado", name: "inciado", component: Iniciado }
];
