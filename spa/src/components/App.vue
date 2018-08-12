<template>
    <div class="container">
        <div class="row" v-if="isAuth">
            <h3>Empty Project Vue2: Router - Auth - VueX</h3>
            <h6>Using store property: {{user.name}}</h6>
            <router-link class="btn btn-primary" :to="{name: 'screen.first'}">First Screen</router-link>
            <router-link class="btn btn-primary" :to="{name: 'screen.second'}">Second Screen</router-link>
            <router-link class="btn btn-primary" :to="{name: 'auth.logout'}">Logout</router-link>
            <br/><br/>
        </div>
        <router-view></router-view>
    </div>
</template>

<script type="text/javascript">
    import store from '../store';
    export default {
        computed: {
            isAuth(){
                return store.state.auth.check;
            },
            user(){
                return store.state.auth.user ? store.state.auth.user : {'name': ''};
            }
        }
    };
</script>