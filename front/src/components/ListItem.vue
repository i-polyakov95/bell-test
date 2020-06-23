<template lang="pug">
    v-list-item
        v-list-item-content
            v-list-item-title
                v-btn(icon color="pink")
                    v-icon mdi-plus
                |  {{content}}
</template>

<script>
export default {
    props: {
        content: {
            type: String,
            default: ''
        },
    },
}
</script>

<style lang="scss" scoped>

</style>