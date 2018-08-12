import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router.map';
import store from './store';
//Handle router
Vue.use(VueRouter);

const router = new VueRouter({
    routes
});
//Check if user is authenticated
router.beforeEach((to, from, next) => {
    if(!store.state.auth.check && to.meta.auth){
        return router.push({name: 'auth.login'});
    }
    next();
});

export default router;