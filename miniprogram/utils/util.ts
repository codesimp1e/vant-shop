import { WechatMiniprogram } from '../node_modules/@types/wechat-miniprogram/lib.wx.api'
type RequestSuccessCallback<T> = WechatMiniprogram.RequestSuccessCallback
type RequsetMethod = "OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT" | undefined
type RequestOptions = {
    url:string
    method:RequsetMethod
    success?:RequestSuccessCallback<string | ArrayBuffer | Record<string, any>>
}
function myRequest(options:RequestOptions) {
    wx.showLoading({
        title: "数据加载中"
    })
    wx.request({
        url: options.url,
        method: options.method,
        success: options.success,
        fail: () => {
            wx.showToast({
                title: "加载失败",
                icon: "error",
                duration: 1500
            })
        },
        complete: () => {
            wx.hideLoading()
        }
    })
}

export { myRequest }