class Util {
    constructor() {

    }
    showWarningMsg(that, message) {
        that.$message.warning({
            showClose: false,
            message,
            duration: 1500
        });
    }
    showSuccessMsg(that, message) {
        that.$message.success({
            showClose: false,
            message,
            duration: 1500
        });
    }
    showErrorMsg(that, error) {
        that.$message.error({
            showClose: false,
            message: (typeof error === 'string') ? error : ((error || {}).message || '未解析错误'),
            duration: 1500
        });
    }
}

export default Util;