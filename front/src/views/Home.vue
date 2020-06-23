<template lang="pug">
    .home.text-center.pa-10
        h1.mb-10.primary--text Главная
        .d-flex.justify-center(v-if="unselected && unselected.length")
            v-card.unselected.mr-10(
                min-width="400"
                tile
            )
                v-card-title.pl-5
                    v-icon.mr-4 mdi-file
                    | Невыбранные элементы
                v-text-field.px-5(
                    label="Фильтр"
                    outlined clearable
                    v-model="filter"
                    append-icon="mdi-magnify"
                )
                v-virtual-scroll(
                    :items="unselected"
                    :item-height="40"
                    height="550"
                )
                    template(v-slot="{ item }")
                        .list-item.px-5.d-flex.justify-space-between.align-center
                            .left
                                v-btn(icon color="pink" @click="selectItem(item.id)")
                                    v-icon mdi-plus
                                span  {{item.name}}
                            .right.grey--text {{item.id}}
            v-card.selected(
                min-width="400"
                tile
            )
                v-card-title.pl-5
                    v-icon.mr-4 mdi-checkbox-marked-circle-outline
                    | Выбранные элементы
                v-virtual-scroll(
                    :items="selected"
                    :item-height="40"
                    height="620"
                )
                    template(v-slot="{ item }")
                        .list-item.px-5.d-flex.justify-space-between.align-center
                            .left
                                v-btn(icon color="pink" @click="unselectItem(item.id)")
                                    v-icon mdi-minus
                                span  {{item.name}}
                            .right.grey--text {{item.id}}
        .d-flex.justify-center(v-else)
            v-alert(
                dense
                width="400px"
                type="error"
            ) Нет данных! Проверьте, запущено ли API!
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'Home',

    computed: {
        selected() {
            return this.$store.state.listOfSelected
        },
        unselected() {
            if (!this.filter) return this.$store.state.listOfUnselected
            else return this.$store.state.listOfUnselected
                .filter(x => x.name.includes(this.filter))
                .sort((a, b) => {
                    let reg = new RegExp(this.filter, 'g')
                    return b.name.match(reg).length - a.name.match(reg).length
                })
        }
    },

    data() {
        return {
            filter: ''
        }
    },

    methods: {
        ...mapMutations([ 'selectItem', 'unselectItem' ]),
    },
}
</script>

<style lang="scss">
.list-item {
    background: #fafafa;
}
</style>