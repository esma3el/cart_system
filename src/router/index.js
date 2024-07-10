import { createRouter, createMemoryHistory } from "vue-router";


const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import('../pages/Home.vue')
        },        
    ],
});

export default router;