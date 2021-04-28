import { createWebHistory, createRouter } from "vue-router";
import Home from "../App.vue";
import Atom from "../components/pages/atoms.vue";


const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	}, {
		path: "/atom",
		name: "Atoms",
		component: Atom,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});


export default router;
