// 封装wx。request的求情函数

function request(url,method = "GET"){
    return new Promise((resolve,reject) => {
        wx.request({
            url,
            method,
            success: res => {
                resolve(res)
            }
        })
    })
}
// 导出函数
export default request;