<template lang="pug">
    .home.text-center.pa-10
        h1.mb-10 История
        .d-flex.justify-center
            v-simple-table(height="70vh" style="width: 800px" fixed-header)
                template(v-slot:default)
                    thead
                        tr
                            th.text-center Элемент
                            th.text-center Тип
                            th.text-center Время
                    tbody
                        tr(v-for="entry in history" :key="`${entry.item.id}-${+entry.date}`")
                            td {{ `[${entry.item.id}]: ${entry.item.name}` }}
                            td {{ entry.type === 'select' ? 'Добавлен' : 'Удалён' }}
                            td(:title="entry.date | moment('DD.MM.YYYY, HH:mm:ss')") {{ entry.date | moment("from", "now")}}
</template>

<script>
export default {
    computed: {
        history() {
            return this.$store.state.history
        },
    },

    methods: {
        moment() {
            return this.$moment
        }
    },
}
</script>