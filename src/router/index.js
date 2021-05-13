import { createWebHistory, createRouter } from "vue-router";
import Home from "../App.vue";
import HorizontalCard from "../components/molecules/HorizontalCard/index.vue"


const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	}, {
		path: "/horizontalcard",
		name: "HorizontalCard",
		component: HorizontalCard,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});


export default router;
