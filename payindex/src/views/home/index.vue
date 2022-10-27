<template>
  <div class="index-container">
    <div class="body">
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
        <div class="text">
          <span class="text1">扫一扫</span>
          <span class="text2">收付款</span>
          <span class="text3">出行</span>
          <span class="text4">卡包</span>
        </div>
        <ul>
          <li class="iconfont icon-saoyisao"></li>
          <li class="iconfont icon-shoufukuan-1"></li>
          <li class="iconfont icon-airplane"></li>
          <li class="iconfont icon-qiabao"></li>
        </ul>
      </div>
      <!-- 扫一扫 -->
      <!-- 导航栏 -->

      <!-- 小程序 -->
      <div class="small-programs">
        <div class="father">
          <i class="son iconfont icon-elemo
          icon-blue"></i>
          <span class="text">饿了么</span>
        </div>
        <div class="father">
          <i class="son iconfont icon-koubei icon-orange"></i>
          <span class="text">口碑</span>
        </div>
        <div class="father">
          <i class="son iconfont icon-shiminzhongxin icon-blue
"></i>
          <span class="text adjust">城市服务</span>
        </div>
        <div class="father">
          <i class="son iconfont icon-taobao icon-orange"></i>
          <span class="text">淘宝</span>
        </div>
        <div class="father">
          <i class="son iconfont icon-shenghuohuafeichongzhi icon-orange"></i>
          <span class="text adjust">话费充值</span>
        </div>
        <div class="father">
          <i class="son iconfont icon-wodejifenbao icon-blue"></i>
          <span class="text">转账</span>
        </div>
        <div class="father">
          <i class="son iconfont icon-icon-test icon-green"></i>
          <span class="text adjust">蚂蚁森林</span>
        </div>
        <div class="father">
          <i class="son iconfont icon-mayihuabei
          icon-blue"></i>
          <span class="text">花呗</span>
        </div>
        <div class="father">
          <i class="son iconfont icon-paobu icon-orange"></i>
          <span class="text">运动</span>
        </div>
        <div class="father">
          <i class="son iconfont icon-shuidianjiaofei icon-blue"></i>
          <span class="text adjust">水电缴费</span>
        </div>
        <div class="father">
          <i class="son iconfont icon-jiankangma icon-green"></i>
          <span class="text">健康</span>
        </div>
        <div class="father">
          <i class="son iconfont icon-cainiao icon-blue"></i>
          <span class="text adjust">菜鸟裹裹</span>
        </div>
        <div class="father">
          <i class="son iconfont icon-jiankangma1
          icon-green"></i>
          <span class="text adjust-special">健康码</span>
        </div>
        <div class="father">
          <i class="son iconfont icon-xiaochengxu
          icon-blue"></i>
          <span class="text adjust-special ">小程序</span>
        </div>
        <div class="father">
          <i class="son iconfont icon-fuwu more"></i>
          <span class="text">更多</span>
        </div>
      </div>
      <!-- 小程序 -->
      <div class="space">
      <!-- 最近消息 -->
      <div class="message">
        <div class="title">
          <span>最近消息</span>
          <span>5条新消息<i class="iconfont icon-xiala fontsize"></i></span>
        </div>
        <div class="row">
          <i class="iconfont icon-mayihuabei small-huabei
          "><i class="innertext">花呗支付助手</i></i>
          <i>支付成功</i>
          <span class="time">3小时以前</span>
        </div>
        <div class="row">
          <i class="iconfont icon-icon-test small-tree
          "><i class="innertext">蚂蚁森林</i></i>
          <i>刚成熟的 52g绿色能量等你收取</i>
          <span class="time">4小时以前</span>
        </div>
      </div>
      <!-- 最近消息 -->

      <!-- 轮播广告 -->
      <div class="lunbo">
      <div class="content">
      <ul id="item">
        <li class="item">
        <a href="#"><img src="@/assets/picture/banner1.png" ></a>
        </li>
        <li class="item">
        <a href="#"><img src="@/assets/picture/banner2.png" ></a>
        </li>
        <li class="item">
        <a href="#"><img src="@/assets/picture/banner3.png" ></a>
        </li>
        <li class="item">
        <a href="#"><img src="@/assets/picture/banner4.png" ></a>
        </li>
      </ul>
      <div id="btn-left"></div>
      <div id="btn-right">></div>
      <ul id="circle">

        <li class="circle"></li>
        <li class="circle"></li>
        <li class="circle"></li>
        <li class="circle"></li>
        <li class="circle"></li>
      </ul>
      </div>
      </div>
      <!-- 轮播广告 -->

      <div class="message">
        <div class="title">
          <span class="find">发现精彩</span>
          <span><i class="iconfont icon-xiala fontsize"></i></span>
        </div>
        <div class="row">
          <img class="image1" src="@/assets/picture/手机.png" alt="华为">
        </div>
        <div class="row">
          <img class="image2" src="@/assets/picture/立租机.png" alt="立租机">
        </div>
      </div>

      </div>

    </div>
  </div>

</template>

<script>
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
  mounted () {
    this.bannerRun()
  },
  methods: {
    bannerRun () {
      const items = document.getElementsByClassName('item')
      const circles = document.getElementsByClassName('circle')
      const leftBtn = document.getElementById('btn-left')
      const rightBtn = document.getElementById('btn-right')
      const content = document.querySelector('.content')
      let index = 0
      let timer = null

      // 清除class
      const clearclass = function () {
        for (let i = 0; i < items.length; i++) {
          items[i].className = 'item'
          circles[i].className = 'circle'
          circles[i].setAttribute('num', i)
        }
      }
      /* 只显示一个class */
      function move () {
        clearclass()
        items[index].className = 'item active'
        circles[index].className = 'circle white'
      }
      // 点击右边按钮切换下一张图片
      rightBtn.onclick = function () {
        if (index < items.length - 1) {
          index++
        } else {
          index = 0
        }
        move()
      }
      // 点击左边按钮切换上一张图片
      leftBtn.onclick = function () {
        if (index < items.length) {
          index--
        } else {
          index = items.length - 1
        }
        move()
      }
      // 开始定时器，点击右边按钮，实现轮播
      timer = setInterval(function () {
        rightBtn.onclick()
      }, 1500)
      // 点击圆点时，跳转到对应图片
      for (let i = 0; i < circles.length; i++) {
        circles[i].addEventListener('click', function () {
          const pointIndex = this.getAttribute('num')
          index = pointIndex
          move()
        })
      }
      // 鼠标移入清除定时器，并开启一个三秒的定时器，使慢慢转动
      content.onmouseover = function () {
        clearInterval(timer)
        timer = setInterval(function () {
          rightBtn.onclick()
        }, 3000)
      }
      // 鼠标移出又开启定时器
      content.onmouseleave = function () {
        clearInterval(timer)
        timer = setInterval(function () {
          rightBtn.onclick()
        }, 1500)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.index-container {
  // box-sizing: content-box;
  .body {
    background-color: #767674;
  }
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
    // background-image: url('@/assets/picture/人民大会堂.png');
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
      font-weight: 400;
      color: #FCFEEF;
    }
    .text {
      float: left;
      position: relative;
      width: 0px;
      height: 0px;
      .text1 {
        position: absolute;
        width: 80px;
        top: 115px;
        left: 63px;
        font-size: 25px;
        color: #FFFFFF;
      }
      .text2 {
        position: absolute;
        width: 80px;
        top: 115px;
        left: 245px;
        font-size: 25px;
        color: #FFFFFF;
      }
      .text3 {
        position: absolute;
        width: 80px;
        top: 115px;
        left: 440px;
        font-size: 25px;
        color: #FFFFFF;
      }
      .text4 {
        position: absolute;
        width: 80px;
        top: 115px;
        left: 615px;
        font-size: 25px;
        color: #F7F7F7;
      }
    }
  }
  .small-programs {
    width: 100%;
    height: 390px;
    background-color: #F7F7F7;
    .father {
      position: relative;
      float: left;
      width: 150px;
      height: 130px;
      background-color: #F7F7F7;
      .son {
        display: block;
        position: absolute;
        top: 35px;
        left: 40px;
        width: 60px;
        height: 60px;
        font-size: 80px;
        line-height: 60px;
      }
      .text {
        position: absolute;
        width: 100px;
        top: 100px;
        left: 55px;
        font-size: 25px;
      }
      .adjust {
        left: 35px;
      }
      .adjust-special {
        left: 42px;
      }
      .icon-blue {
        color: #3C83F6;
      }
      .icon-orange {
        color: #F56327;
      }
      .icon-green {
        color: #58A376;
      }
      .more {
        color: #B8B8B8;
      }
    }
  }
  .space {
    margin-bottom: 100px;
    padding: 20px;
    background-color: #F5F5F5;
    // -----------------------------------
    // -----------------------------------
    a{
    list-style: none;
    }
    li{
    list-style: none;
    }
    .lunbo{
    width: 100%;
    margin-bottom: 40px;
    }
    .content{
    width: 680px;
    height: 145px;
    margin: 20px auto;
    border-radius: 10px;
    position: relative;
    }
    #item{
    width: 100%;
    height: 100%;

    }
    .item{
    position: absolute;
    opacity: 0;
    transition: all 1s;

    }
    .item.active{
    opacity:1;
    }
    img{
    width: 100%;
    }
    #btn-left{
    width: 30px;
    height: 69px;
    font-size: 30px;
    color: white;
    background-color:rgba(0,0,0,0.4);
    line-height: 69px;
    padding-left:5px;
    z-index: 10;/*始终显示在图片的上层*/
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-60%);/*使按钮向上偏移居中对齐*/
    cursor: pointer;
    opacity: 0;/*平时隐藏*/
    }
    .lunbo:hover #btn-left{
    /*鼠标滑入，显示图标*/
    opacity: 1;
    }

    #btn-right{
    width: 26px;
    height: 69px;
    font-size: 30px;
    color: white;
    background-color:rgba(0,0,0,0.4);
    line-height: 69px;
    padding-left: 5px;
    z-index: 10;
    position: absolute;
    right: 0;
    top: 50%;
    cursor: pointer;
    opacity: 0;
    transform: translateY(-60%);
    }
    .lunbo:hover #btn-right{
    opacity: 1;
    }
    #circle{
    height: 20px;
    display: flex;
    position: absolute;
    bottom: 35px;
    right: 25px;
    }
    .circle{
    width: 10px;
    height: 10px;
    border-radius: 10px;
    border: 2px solid white;
    background: rgba(0,0,0,0.4);
    cursor: pointer;
    margin: 5px;
    }
    .white{
    background-color: #FFFFFF;
    }
    .message {
      width: 680px;
      height: 280px;
      margin: 15px;
      border-radius: 15px;
      background-color: #FFFFFF;
      .title {
        display: flex;
        padding: 12px;
        justify-content: space-between;
        font-size: 25px;
        color: #797979;
        .fontsize {
          font-size: 25px;
        }
        .find {
          font-size: 25px;
          font-weight: 700;
          color: #1A1A1A;
        }
      }
      .row {
        display: flex;
        padding: 20px;
        justify-content: space-between;
        line-height: 40px;
        font-size: 25px;
        color: #797979;
        .image1 {
          width: 290px;
        }
        .image2 {
          width: 640px;
        }
        .time {
          font-size: 15px;
          color: #D4D4D4;
        }
        .small-huabei {
          font-size: 25px;
          color: #3F76E8;
          .innertext {
            font-weight: 700;
            color: #1A1A1A;
          }
        }
        .small-tree {
          font-size: 25px;
          color: #57AE82;
          .innertext {
            font-weight: 700;
            color: #1A1A1A;
          }
        }
      }
    }
  }
}

</style>
