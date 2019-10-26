<template>
    <div class="login">
        <div class="login-box">
            <div class="form-wrapper" v-loading="isLogining" element-loading-text="登录中，请稍等…">
                <el-form class="login-form" :model="formData" :rules="rules" ref="loginForm">
                    <el-form-item prop="userName">
                        <el-input class="input-box" v-model.trim="formData.userName" placeholder="请输入用户名" @keyup.native.enter="login"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input class=input-box type="password" v-model.trim="formData.password" placeholder="请输入密码" @keyup.native.enter="login"></el-input>
                    </el-form-item>
                    <el-form-item style="margin-bottom: 0px;">
                        <el-button class="login-btn" type="primary" @click="login" size="middle">登 录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                formData: {
                    userName: '',
                    password: ''
                },
                rules: {
                    userName: [{required: true, message: '请输入用户名', trigger: 'change'}],
                    password: [{required: true, message: '请输入密码', trigger: 'change'}]
                },
                isLogining: false
            }
        },
        methods: {
            login() {
                this.$refs.loginForm.validate(valid => {
                    if(valid) {
                        let params = {
                            userName: this.formData.userName,
                            password: this.formData.password
                        };
                        this.isLogining = true;
                        apiRequest('/api/user/login', params).then(res => {
                            this.isLogining = false;
                            
                        }).catch(err => {
                            this.isLogining = false;
                            util.showErrorMsg(this, err);
                        })
                    }
                })
            },
            resetForm() {
                this.$refs.loginForm.resetFields();
            }
        }
    }
</script>

<style scoped>
.login {
    height: 100%;
    background: #2f4050;
    position: relative;
}
.login-box{
    width: 500px;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, 0);
}
.system-name{
    color: rgb(13, 175, 101);
    font-size: 36px;
    text-align: center;
    letter-spacing: 8px;
    margin-bottom: 20px;
}
.form-wrapper{
    display: flex;
    justify-content: center;
    background: #fff;
    padding: 40px 0;
}
.input-box.el-input{
    width: 350px;
}
.width-350 input{
    background-color: #fff;
}
.login-btn{
    width: 100%;
}
@media screen and (max-width: 768px) {
    .login-box{
        max-width: 100%;
        box-sizing: border-box;
        padding: 0 15px;
    }
    .system-name{
        font-size: 28px;
    }
    .form-wrapper{
        padding: 40px 15px;
    }
    .login-form{
        width: 100%;
    }
    .input-box.el-input{
        width: 100%;
    }
}
</style>