import Vue from 'vue';

//Use this to make simple operation in texts/numbers

Vue.filter('ucwords', value => value.charAt(0).toUpperCase() + value.slice(1));