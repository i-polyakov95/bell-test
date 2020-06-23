<template lang="pug">
    .home.text-center.pa-10
        h1.mb-10 История
        .d-flex.justify-center
            v-simple-table(height="70vh" style="width: 800px" fixed-header)
                template(v-slot:default)
                    thead
                        tr
                            th.text-center.small Тип
                            th.text-left Элемент
                            th.text-center Время
                    tbody
                        tr(v-for="entry in history" :key="`${entry.item.id}-${+entry.date}`")
                            td.small
                                v-icon(
                                    :color="entry.type === 'selected' ? 'green' : 'red'"
                                    :title="entry.type === 'selected' ? 'Добавлен' : 'Удалён'"
                                )
                                    | {{ entry.type === 'selected' ? 'mdi-plus-circle' : 'mdi-minus-circle' }}
                            td.text-left {{ `[ ${entry.item.id} ]: ${entry.item.name}` }}
                            td(:title="entry.date | moment('DD.MM.YYYY, HH:mm:ss')") {{ entry.date | moment("from", "now")}}
</template>

<script>
export default {
    computed: {
        history() {
            if (this.type === 'all') return this.$store.state.history
            else return this.$store.state.history.filter(x => x.type === this.type)
        },

        type() {
            if (['all', 'selected', 'unselected'].includes(this.$route.query.type)) return this.$route.query.type
            else return 'all'
        }
    },

    mounted () {
    },

    methods: {
        moment() {
            return this.$moment
        }
    },
}
</script>

<style lang="scss" scoped>
.small {
    width: 1%;
}
</style>