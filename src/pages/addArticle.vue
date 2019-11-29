<template>
    <div class="section">
        <div class="section-l">
            <el-form :model="formData" size="mini">
                <el-form-item label="标题：">
                    <el-input class="w-300" v-model.trim="formData.title"></el-input>
                </el-form-item>
                <el-form-item label="类型：">
                    <el-select class="w-200" v-model="formData.categoryId" placeholder="">
                        <el-option v-for="(item, index) in categoryList" :key="index" :label="item.categoryName" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div class="editor" id="editor"></div>
            <div class="btn-wrapper">
                <el-button class="preview-btn" type="primary" @click="preview" size="small">预览</el-button>
                <el-button class="submit-btn" type="primary" @click="onSubmit" size="small">提交</el-button>
            </div>
        </div>
        <div class="section-r">
            <div class="preview-wrapper" v-html="innerHTML"></div>
        </div>
    </div>
</template>

<script>
    const E = require('wangeditor')
    var editor;
    
    export default {
        data() {
            return {
                categoryList: [],
                formData: {
                    articleId: this.$route.query.id,
                    title: '',
                    categoryId: ''
                },
                innerHTML: ''
            }
        },
        computed: {
            
        },
        created() {
            if(this.formData.articleId) {
                this.getArticleDetail();
            }
            this.getCategoryList();
        },
        mounted() {
            this.$nextTick(() => {
                editor = new E('#editor');
                editor.create();
            })
        },
        methods: {
            getArticleDetail() {
                let params = {
                    articleId: this.formData.articleId
                }
                apiRequest('/api/article/getArticleDetail', params).then(res => {
                    this.formData.title = res.title;
                    this.formData.categoryId = res.categoryId;
                    this.innerHTML = res.content;
                }).catch(err => {
                    util.showErrorMsg(this, err);
                })
            },
            getCategoryList() {
                apiRequest('/api/article/categoryList').then(res => {
                    this.categoryList = res;
                }).catch(err => {
                    util.showErrorMsg(this, err);
                })
            },
            preview() {
                this.innerHTML = editor.txt.html();
            },
            onSubmit() {
                let params = {
                    ...this.formData,
                    content: this.innerHTML
                };
                let path = '/api/article/createArticle';
                if(params.articleId) {
                    path = '/api/article/updateArticle';
                }
                apiRequest(path, params).then(res => {
                    util.showSuccessMsg(this, '提交成功')
                }).catch(err => {
                    util.showErrorMsg(this, err)
                })
            }
        }
    }
</script>

<style scoped>
.section{
    display: flex;
    padding: 0 30px;
}
.section-l, .section-r{
    width: 50%;
}
.editor{
    margin-top: 20px;
    position: relative;
    z-index: 20;
}
.btn-wrapper{
    display: flex;
    justify-content: center;
    margin-top: 20px;
}
</style>