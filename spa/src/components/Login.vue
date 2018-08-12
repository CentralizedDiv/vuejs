<template>
    <div class="container">
        <div class="row" style="margin-top:10%">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Login</div>
                    <div class="panel-body">
                        <div class="alert alert-danger" v-if="error.error">{{error.message}}</div>
                        <form class="form-horizontal" @submit.prevent="login()" method="post">
                            <div class="form-group">
                                <label for="email" class="col-md-4 control-label">User</label>
                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control"
                                           name="email" required autofocus v-model="user.email">
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="password" class="col-md-4 control-label">Password</label>

                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control"
                                           name="password" required v-model="user.password">
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-md-8 col-md-offset-4">
                                    <button type="submit" class="btn btn-primary">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import store from '../store';

    export default {
        mounted(){
            if(this.isAuth()) {
                this.$router.push({name: 'screen.first'});
            }
        },
        data(){
            return {
                user: {
                    email: '',
                    password: ''
                },
                error: {
                    error: false,
                    message: ''
                }
            }
        },
        methods: {
            login(){
                store.dispatch('login', this.user)
                    .then((response) => {
                        this.$router.push({name: 'screen.first'});
                    })
                    .catch((responseError) => {
                        this.error.error = true;
                        if (responseError.status === 400) {
                            this.error.message = responseError.data.error;
                        } else {
                            this.error.message = 'Login failed!'
                        }
                    })
            },
            isAuth(){
                return store.state.auth.check;
            }
        }
    }
</script>