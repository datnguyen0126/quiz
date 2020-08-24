<template>
    <div class="d-block">
        <br>
        These question are <span class="font-weight-bold">{{ $route.params.level }}</span> level. Do you want to try it?
        <br>
        <br>
        <br>
        <button class="btn btn-success" v-on:click="startQuiz"><router-link v-bind:to="$route.params.level + '/question/1'" class="text-light">Do quiz</router-link></button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'testinfo',
    methods: {
        ...mapActions({
            startQuiz: "startQuiz"
        }),
        startQuiz1(){
            console.log('sdf');
        }
    }
}
</script>

