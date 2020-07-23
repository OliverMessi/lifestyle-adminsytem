<template>
    <el-button :size="size" :type="type"
               :loading="loading"  @click="handleClick">
               <!--:disabled="!hasPerms(perms)"-->
        {{label}}
    </el-button>
</template>

<script>
    export default {
        name: "BgButton",
        props: {
            label: {
                type: String,
                default: 'Button'
            },
            size: {
                type: String,
                default: 'mini'
            },
            type: {
                type: String,
                default: null
            },
            loading: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            perms: {
                type: String,
                default: null
            }
        },
        data() {
            return {
            }
        },
        methods: {
            handleClick: function () {
                this.$emit('click', {})
            },
            // hasPerms: function (perms) {
            //     return hasPermission(perms) & !this.disabled
            // }
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>