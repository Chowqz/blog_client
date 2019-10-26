<template>
    <div></div>
</template>

<script>
    export default {
        data() {
            return {
                dataList: []
            }
        },
        created() {
            this.getUserList()
        },
        methods: {
            getUserList() {
                apiRequest('/api/article/articleList').then(res => {

                }).catch(err => {
                    util.showErrorMsg(this, err);
                })
            }
        }
    }
</script>

<style scoped>
    
</style>