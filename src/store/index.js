import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// state
const state = {
    // 首页信息
    homeIndex: 0,
}

// 统一暴露vuex数据
export default new Vuex.Store({
    state
})