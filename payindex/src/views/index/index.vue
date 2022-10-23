<template>
  <div class="tab-bar-container">
<van-tabbar v-model="active">
  <van-tabbar-item to="/">
    <i v-if="active === 0" slot="icon" class="iconfont icon-zhifubao1 pay-size"></i>
    <i v-else slot="icon" class="iconfont icon-zhifubao icon-size"></i>
    <span v-if="active !== 0 " class="text">首页</span>
  </van-tabbar-item>
  <van-tabbar-item icon="search" to="/fortune" dot>
    <i slot="icon" class="iconfont icon-wodejifenbao icon-size"></i>
    <span class="text">理财</span>
  </van-tabbar-item>
  <van-tabbar-item icon="setting-o" to="/living">
    <i slot="icon" class="iconfont icon-aishenghuo-tab-fenlei icon-size"></i>
    <span class="text">生活</span>
  </van-tabbar-item>
  <van-tabbar-item icon="setting-o" to="/message" badge="47">
    <i slot="icon" class="iconfont icon-xinxi icon-size"></i>
    <span class="text">消息</span>
  </van-tabbar-item>
  <van-tabbar-item icon="setting-o" to="/me">
    <i slot="icon" class="iconfont icon-sousuo1 icon-size"></i>
    <span class="text">我的</span>
  </van-tabbar-item>
</van-tabbar>
    <!-- 子路由出口 -->
    <router-view />
    <!-- 子路由出口 -->
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  components: {},
  props: {},
  data () {
    return {
      active: 0,
      icon: {
        active: 'https://img01.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img01.yzcdn.cn/vant/user-inactive.png'
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang="less" scoped>
.tab-bar-container{
  .pay-size{
    font-size: 65px;
  }
  .icon-size {
  font-size: 40px;
}
.text {
    font-size: 12px;
  }
}

</style>
