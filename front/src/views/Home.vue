<template lang="pug">
    .home.text-center.pa-10
        .d-flex.justify-center
            v-card.unselected.mr-10(
                min-width="400"
                tile
            )
                v-card-title Список невыбранных элементов
                v-text-field.px-5(
                    label="Фильтр"
                    filled clearable
                    v-model="filter"
                )
                v-list(dense flat subheader)
                    v-list-item(
                        v-for="item in filtered"
                        :key='item.id'
                        @click=""
                    )
                        v-list-item-content
                            v-list-item-title
                                v-btn(icon color="pink" @click="selectItem(item.id)")
                                    v-icon mdi-plus
                                |  {{item.name}}
            v-card.selected(
                min-width="400"
                tile
            )
                v-card-title Список выбранных элементов
                v-list(dense flat)
                    v-list-item(
                        v-for="item in selected"
                        :key='item.id'
                        @click=""
                    )
                        v-list-item-content
                            v-list-item-title
                                v-btn(icon color="pink" @click="unselectItem(item.id)")
                                    v-icon mdi-minus
                                |  {{item.name}}
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'Home',

    computed: {
        unselected() {
            return this.$store.state.listOfUnselected
        },
        selected() {
            return this.$store.state.listOfSelected
        },
        filtered() {
            if (!this.filter) return this.unselected
            else return this.unselected
                .filter(x => x.name.includes(this.filter))
                .sort((a, b) => {
                    let reg = new RegExp(this.filter, 'g')
                    return b.name.match(reg).length - a.name.match(reg).length
                })
        }
    },

    methods: {
        ...mapMutations([ 'selectItem', 'unselectItem' ]),
    },

    data() {
        return {
            filter: ''
        }
    },
}
</script>

