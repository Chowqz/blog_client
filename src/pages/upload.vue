<template>
    <div>
        <el-button type="primary" @click="triggerSelectFile" size="middle">选择文件</el-button>
        <div style="display: none;">
            <input type="file" multiple ref="uploadInput" @change="onSelectFile"> 
        </div>
    </div>
</template>

<script>
    import {uploadFile} from '@/api';

    export default {
        data() {
            return {

            }
        },
        created() {

        },
        methods: {
            triggerSelectFile(interfaceName, params = {}) {
                this.$refs.uploadInput.value = '';
                this.$refs.uploadInput.click();
            },
            onSelectFile(e) {
                let file = e.target.files[0];
                if(!file) {
                    return;
                }
                let params = {
                    test: 'test'
                };
                uploadFile('/api/upload/import', e.target.files, params).then(res => {
                    console.log(res)
                }).catch(err => {
                    util.showErrorMsg(this, err);
                })
            }
        }
    }
</script>