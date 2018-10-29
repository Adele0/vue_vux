<template>
  <div class="hello">
     <!-- 页面组件 -->
    <div v-if="$store.state.homeIndex === 0">上天</div>
    <div v-if="$store.state.homeIndex === 1">下地</div>
    <div v-if="$store.state.homeIndex === 2">入海</div>
    <!-- 菜单组件 -->
    <tabbar style="position:fixed" v-model="$store.state.homeIndex">
      <tabbar-item v-for="(item,index) in tabList" :key="index">
        <span slot="label">{{item}}</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      tabList: ['异世界1', '异世界2', '异世界3'],
    }
  }
}
</script>


<style scoped>
</style>
