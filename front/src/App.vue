<template lang="pug">
    v-app
        v-app-bar(
            app dark flat
            color="accent"
        )
            v-btn(
                text
                to='/'
                color="primary"
            ) Главная
            v-menu(offset-y open-on-hover)
                template(v-slot:activator="{ on, attrs }")
                    v-btn(
                        text
                        color="primary"
                        to='/history?type=all'
                        dark
                        v-bind="attrs"
                        v-on="on"
                    ) История
                v-list
                    v-list-item(
                        to='/history?type=selected'
                    ) История добавлений
                    v-list-item(
                        to='/history?type=unselected'
                    ) История удалений
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
            .then(data => this.$store.commit('fillUnselectedList', data.items ? data.items : []))
            .catch(err => console.error(err))
    },
};
</script>
