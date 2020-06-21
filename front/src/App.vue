<template lang="pug">
    v-app
        v-app-bar(
            app dark flat
            color="accent"
        )
            .d-flex.align-center.full-width
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
        v-content
            router-view
</template>

<script>
export default {
    name: 'App',
};
</script>
