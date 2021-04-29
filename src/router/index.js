import { createWebHistory, createRouter } from "vue-router";
import Home from "../App.vue";
import Atoms from "../components/pages/atoms.vue";
import Molecules from "../components/pages/molecules.vue";


const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	}, {
		path: "/atoms",
		name: "Atoms",
		component: Atoms,
	}, {
		path: "/molecules",
		name: "Molecules",
		component: Molecules,
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});


export default router;
