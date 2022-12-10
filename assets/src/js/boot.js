import { createApp } from 'vue'
import HomePage from '../../../node_modules/wd-vue-lib/src/components/warp-driven/wd/community-home-page.vue';
import {config} from '../../../node_modules/wd-vue-lib/src/api/api-setting';
config({
    INIT_PRODUCTS:{
        ajax_url:wd_woo_plugin_vs.ajax_url
    },
    GET_VS_INIT_STATUS:{
        ajax_url:wd_woo_plugin_vs.ajax_url
    },
    GET_PRODUCT_HTML:{
        ajax_url:wd_woo_plugin_vs.ajax_url,
    },
    GET_PRODUCTS_HTML_BY_VS:{
        ajax_url:wd_woo_plugin_vs.ajax_url,
    },
    GET_PRODUCT_LIST_HTML:{
        ajax_url:wd_woo_plugin_vs.ajax_url,
    },
    GET_HANDLE_HISTORY:{
        ajax_url:wd_woo_plugin_vs.ajax_url,
    },
    GET_PRODUCT_CATEGORIES:{
        ajax_url:wd_woo_plugin_vs.ajax_url,
    },
    GET_PRODUCTS_BY_CATEGORY:{
        ajax_url:wd_woo_plugin_vs.ajax_url,
    }
})
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
let app = createApp({}).use(ElementPlus).component('home-page',HomePage).mount('#app')