// custom-tab-bar/index.ts
import { ComponentWithStore } from 'mobx-miniprogram-bindings'
import { store } from '../store/store'

ComponentWithStore({
    /**
     * 组件的属性列表
     */
    properties: {

    },
    /**
     * 组件的初始数据
     */
    data: {

    },
    storeBindings: {
        store,
        fields: {
            list: 'tabbarList',
            active: 'activeTabBar'
        },
        actions: {
            update: 'updateActiveTabBar'
        }
    },
    // behaviors: [storeBindingsBehavior],
    /**
     * 组件的方法列表
     */
    methods: {
        onChange(event: any) {
            store.updateActiveTabBar(event.detail)
            wx.switchTab({
                'url':store.tabbarList[event.detail].page
            })
        }
    }
})
