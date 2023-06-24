import {createRouter, createWebHistory,createWebHashHistory} from "vue-router"


const routes = [
    {
        path: "/",
        name: 'index',
        component: () => import("../view/index.vue"),

    }, {
        path: "/about",
        name: 'about',
        component: () => import("../view/about.vue"),

    },{
        path: "/service",
        name: 'service',
        component: () => import("../view/service.vue"),

    },{
        path: "/gallery",
        name: 'gallery',
        component: () => import("../view/gallery.vue"),

    }, {
        path: "/price",
        name: 'price',
        component: () => import("../view/price.vue"),

    },
    {
        path: "/contact",
        name: 'contact',
        component: () => import("../view/contact.vue"),

    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;

