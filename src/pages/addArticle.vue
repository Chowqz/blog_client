<template>
    <div class="section">
        <div class="section-l">
            <el-form :model="formData" size="mini">
                <el-form-item label="标题：">
                    <el-input class="w-300" v-model.trim="formData.title"></el-input>
                </el-form-item>
                <el-form-item label="类型：">
                    <el-select class="w-200" v-model="formData.categoryId" placeholder="">
                        <el-option v-for="(item, index) in categoryList" :key="index" :label="item.categoryName" :value="item.categoryId"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div class="editor" id="editor"></div>
            <el-button type="primary" @click="preview" size="small">预览</el-button>
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
                    title: '',
                    categoryId: ''
                },
                innerHTML: ''
            }
        },
        computed: {
            
        },
        created() {
            this.getCategoryList();
        },
        mounted() {
            this.$nextTick(() => {
                editor = new E('#editor');
                editor.create();
            })
        },
        methods: {
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
                apiRequest('/api/article/createArticle', params).then(res => {
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
    height: 600px;
}
</style>