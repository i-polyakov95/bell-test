<template lang="pug">
    v-card(
        min-width="400"
        tile
    )
        v-text-field(
            label="Filled"
            filled
        )
        my-list-item(
            v-for="item in items"
            :key='item.id'
            :content='item.name'
        )
</template>

<script>
import ListItem from '@/components/ListItem.vue';

export default {
    components: {
        'my-list-item': ListItem,
    },

    props: {
        items: {
            type: Array,
            default: () => []
        },
    },

    data() {
        return {
            d_items: [...this.items]
        }
    },
}
</script>

<style lang="scss" scoped>

</style>