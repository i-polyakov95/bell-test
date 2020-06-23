<template lang="pug">
    .home.text-center.pa-10
        h1.mb-10.primary--text История {{type === 'all' ? 'всех действий' : type === 'selected' ? 'добавлений' : 'удалений'}}
        .d-flex.justify-center
            v-card(tile v-if="history && history.length > 0")
                v-simple-table(
                    height="70vh"
                    style="width: 600px;"
                    fixed-header
                )
                    template(v-slot:default)
                        thead
                            tr
                                th.text-center Тип
                                th.text-left Элемент
                                th.text-right Время
                        tbody
                            tr(v-for="entry in history" :key="`${entry.item.id}-${+entry.date}`")
                                td.text-center(style="width: 1%")
                                    v-icon(
                                        :color="entry.type === 'selected' ? 'green' : 'red'"
                                        :title="entry.type === 'selected' ? 'Добавлен' : 'Удалён'"
                                    )
                                        | {{ entry.type === 'selected' ? 'mdi-plus-circle' : 'mdi-minus-circle' }}
                                td.text-left.d-flex.align-center
                                    .index.grey--text(style="width: 40px") {{ entry.item.id }}
                                    .name {{`${entry.item.name}` }}
                                td.text-right(
                                    :title="entry.date | moment('DD.MM.YYYY, HH:mm:ss')"
                                    style="width:28%"
                                ) {{ entry.date | moment("DD.MM.YYYY, HH:mm:ss")}}
            v-alert(
                v-else
                dense
                border="left"
                type="warning"
            ) Нет данных
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
}
</script>