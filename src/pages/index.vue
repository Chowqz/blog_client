<template>
    <div>
        <el-button type="primary" @click="onAdd">新增</el-button>
        <el-table :data="dataList" border>
            <el-table-column prop="title" label="标题"></el-table-column>
            <el-table-column prop="authorName" label="作者"></el-table-column>
            <el-table-column prop="createTime" label="创建时间"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="text" @click="onEdit(scope.row)">编辑</el-button>   
                    <el-button type="text" @click="onDel(scope.row)">删除</el-button>   
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dataList: [],
                total: 0,
            }
        },
        created() {
            this.getArticleList()
        },
        methods: {
            getArticleList() {
                apiRequest('/api/article/articleList').then(res => {
                    this.dataList = res.articleList;
                    this.total = res.pageInfo.total;
                }).catch(err => {
                    util.showErrorMsg(this, err);
                })
            },
            onEdit(row) {
                this.$router.push({
                    path: '/addArticle',
                    query: {
                        id: row.id
                    }
                })
            },
            onDel(row) {
                let params = {
                    articleId: row.id
                }
                apiRequest('/api/article/delArticle', params).then(res => {
                    this.getArticleList();
                }).catch(err => {
                    util.showErrorMsg(this, err);
                })
            },
            onAdd() {
                this.$router.push({
                    path: '/addArticle'
                })
            }
        }
    }
</script>

<style scoped>
.article-list{
    width: 600px;
}
.article-item{
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    line-height: 28px;
}
</style>