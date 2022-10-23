<template>
  <div class="index-container">
    <!-- 导航栏 -->
    <div class="page-nav-bar">
      <div class="nav-left">
        <span class="local">大连
          <i class="iconfont icon-xiala"/>
        </span>
        <span class="weather">晴 15°C</span>
      </div>
      <div class="nav-centre">
        <i class="iconfont icon-sousuo"/>
        <div class="input">联动云租车,随取...</div>
        <span class="line"></span>
        <div class="search-btn">Search</div>
      </div>
      <div class="nav-right">
        <i class="iconfont icon-tianjia"></i>
      </div>
    </div>
    <!-- 扫一扫 -->
    <div class="shortcut">
      <ul>
        <li class="iconfont icon-saoyisao">
        </li>
        <li class="iconfont icon-shoufukuan-1"></li>
        <li class="iconfont icon-airplane"></li>
        <li class="iconfont icon-qiabao"></li>
      </ul>
    </div>
    <!-- 扫一扫 -->
    <!-- 导航栏 -->

    <!-- 小程序 -->
    <div></div>
    <!-- 小程序 -->

    <!-- 最近消息 -->

    <!-- 最近消息 -->

    <!-- 轮播广告 -->
    <!-- 轮播广告 -->

  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  name: 'IndexPage',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onClickLeft () {
      Toast('返回')
    },
    onClickRight () {
      Toast('按钮')
    }
  }
}
</script>

<style lang="less" scoped>
.index-container {
  box-sizing: content-box;
  .page-nav-bar {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 75px;
  border: none;
  padding: 5px 0px;
  background-color: #CC281C;
  .nav-left{
    display: flex;
    width: 100px;
    height: 70px;
    padding: 0 10px 0 30px;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #CC281C;
    .local {
      margin: 0;
      padding: 0;
      display: block;
      font-weight: 700;
      font-size: 30px;
      color: #FFFFF9;
      .icon-xiala {
        font-size: 30px;
      }
    }
    .weather {
      margin: 0;
      padding: 0;
      font-size: 5px;
      color: #EB806F;
    }
  }
  .nav-centre {
    box-sizing: border-box;
    display: flex;
    width: 535px;
    height: 70px;
    padding: 0 0 0 20px;
    line-height: 70px;
    flex-direction: row;
    justify-content: flex-start;
    align-content: center;
    border-radius: 15px;
    background-color: #FFFFFF;
    .icon-sousuo {
      font-size: 35px;
      color: #9F9F9D;
    }
    .input {
      margin: 0 10px;
      font-size: 32px;
      color: #767674;
    }
    .line {
      width: 3px;
      height: 60px;
      margin: auto 0;
      background-color: #EDEBE9;
    }
    .search-btn {
      width: 80px;
      height: 100%;
      margin: auto;
      font-size: 25px;
      font-weight: 700;
      color: #BE2627;
    }
  }
  .nav-right {
    display: flex;
    width: 80px;
    height: 70px;
    margin: 0 auto;
    line-height: 70px;
    justify-content: center;
    align-content: center;
    .icon-tianjia {
      font-weight: 400;
      font-size: 40px;
      color: #fff;
    }
  }
}
.shortcut {
    width: 100%;
    height: 150px;
    background-color: #CB2B1D;
    background-position: 100% 50%;
    background-size: 50%;
    background-repeat:  no-repeat ;
    background-image: url('@/assets/picture/人民大会堂.png');
    ul {
      display: flex;
      justify-content: center;
    }
    ul li {
      display: inline-block;
      margin: 0 45px;
      width: 90px;
      height: 150px;
      line-height: 150px;
      font-size: 80px;
      color: #FCFEEF;
    }
  }
}

</style>
