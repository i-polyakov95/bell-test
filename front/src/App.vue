<template lang="pug">
    v-app
        v-app-bar(
            app dark flat
            color="accent"
        )
            .d-flex.align-center
                v-btn(
                    text
                    to='/'
                    color="primary"
                ) Главная
                v-btn(
                    text
                    to='/history'
                    color="primary"
                ) История
        v-main
            router-view
</template>

<script>
import axios from 'axios';

export default {
    name: 'App',

    created () {
        axios
            .get('http://localhost:3000')
            .then(res => {
                if (res.status != 200) throw new Error('Проверьте, запущено ли API!')
                else return res.data
            })
            .then(data => this.$store.commit('setElements', data))
            .catch(err => console.error(err))
    },
};
</script>
