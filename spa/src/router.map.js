import FirstScreenComponent from './components/FirstScreen.vue';
import SecondScreenComponent from './components/SecondScreen.vue';
import LoginComponent from './components/Login.vue';
import LogoutComponent from './components/Logout.vue';

export default [
    {
        name: 'auth.login',
        path: '/',
        component: LoginComponent,
        meta: {auth: false}
    },
    {
        name: 'auth.logout',
        path: '/logout',
        component: LogoutComponent,
        meta: {auth: true}
    },
    {
        name: 'screen.first',
        path: '/first',
        component: FirstScreenComponent,
        meta: {auth: true}
    },
    {
        name: 'screen.second',
        path: '/second',
        component: SecondScreenComponent,
        meta: {auth: true}
    }
];