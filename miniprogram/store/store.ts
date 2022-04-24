import { observable } from 'mobx-miniprogram'


export const store = observable({
    tabbarList : [
        {
            text: "主页",
            icon: "home-o",
            page: "/pages/home/home"
        },
        {
            text: "分类",
            icon: "apps-o",
            page: "/pages/cates/cates"
        }, {
            text: "购物车",
            icon: "cart-o",
            page: "/pages/cart/cart"
        }, {
            text: "我的",
            icon: "user-o",
            page: "/pages/my/my"
        }
    ],
    activeTabBar : 0,
    updateActiveTabBar(params:number) {
        this.activeTabBar = params
    }
})

