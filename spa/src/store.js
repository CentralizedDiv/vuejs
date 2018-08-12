import Vue from 'vue';
import Vuex from 'vuex';
import JwtToken from './services/jwt-token';
import {User} from './services/resources';
import SessionStorage from './services/session-storage';

Vue.use(Vuex);


const state = {
    times: [],
    auth: {
        check: JwtToken.token != null,
        user: SessionStorage.getObject('user')
    }
};

const mutations = {
    //Mutations change the application state, then components can use them
    setUser(state,user){
        SessionStorage.setObject('user', user);
        state.auth.user = user;
    },
    authenticated(state){
        state.auth.check = true;
    },
    unauthenticated(state){
        state.auth.check = false;
        state.auth.user = null;
        SessionStorage.remove('user');
        JwtToken.token = null;
    }
};

const actions = {
    //Here is where we call the backend
    login(context, {email, password}){
        return JwtToken.accessToken(email, password).then(response => {
            //Then, we commit a mutation
            context.commit('authenticated');
            context.dispatch('getUser');
            return response;
        })
    },
    getUser(context){
        User.query().then(response => {
            context.commit('setUser', response.data.user);
        })
    }
};

export default new Vuex.Store({
    state,
    mutations,
    actions
});