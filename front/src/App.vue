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
            v-menu(offset-y open-on-hover rounded="b-lg")
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

<style lang="scss">
// Vuetify конечно прекрасен (а Quasar ещё лучше), но иногда нужно заниматься такой магией 🤷
.theme--light.v-list-item--active::before {
    opacity: 0 !important;
}
.theme--light.v-list-item--active:hover::before {
    opacity: 0.12 !important;
}
</style>