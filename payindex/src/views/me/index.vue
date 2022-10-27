<template>
  <div class="me-container">
    <div class="background-image">
      <img src="@/assets/picture/背景.jpg" alt="背景">
      <i class="name">《中国有哈哈》冠军</i>
      <img class="photo" src="@/assets/picture/头像.jpg" alt="头像">
    </div>
    <div class="content">
      <div class="null"></div>
      <div class="details">
        <div class="first-row">
          <img class="small-photo"  src="@/assets/picture/头像.jpg" alt="头像">
          <i class="blue-name">《中国有哈哈》冠军</i>
          <span class="text">go on</span>
        </div>
        <div class="second-row">
            <img class="moment" src="@/assets/picture/背景.jpg" alt="">
          <span class="locate">大连</span>
        </div>
        <div class="third-row">
          <i class="time">刚刚</i>
          <i class="iconfont icon-xiala moment-font"></i>
        </div>
        <div class="like">
          <span class="name">张三</span>
        </div>
      </div>
      <!-- //////////////////////////////// -->
      <div class="details">
        <div class="first-row">
          <img class="small-photo"  src="@/assets/picture/头像.jpg" alt="头像">
          <i class="blue-name">《中国有哈哈》冠军</i>
          <span class="text">go on</span>
        </div>
        <div class="second-row">
            <img class="moment" src="@/assets/picture/背景.jpg" alt="">
          <span class="locate">大连</span>
        </div>
        <div class="third-row">
          <i class="time">刚刚</i>
          <i class="iconfont icon-xiala moment-font"></i>
        </div>
        <div class="like">
          <span class="name">张三</span>
        </div>
      </div>
      <!-- ///////////////////////////////////////// -->
      <div class="details">
        <div class="first-row">
          <img class="small-photo"  src="@/assets/picture/头像.jpg" alt="头像">
          <i class="blue-name">《中国有哈哈》冠军</i>
          <span class="text">go on</span>
        </div>
        <div class="second-row">
            <img class="moment" src="@/assets/picture/背景.jpg" alt="">
          <span class="locate">大连</span>
        </div>
        <div class="third-row">
          <i class="time">刚刚</i>
          <i class="iconfont icon-xiala moment-font"></i>
        </div>
        <div class="like">
          <span class="name">张三</span>
        </div>
      </div>
      <!-- ///////////////////////////////////////// -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'MePage',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang="less" scoped>
.me-container {
  .background-image {
    position: relative;
    width: 100%;
    height: 700px;
    img {
      width: 100%;
      height: 100%;
    }
    .photo {
      position: absolute;
      top: 580px;
      left: 530px;
      float: left;
      z-index: 20;
      width: 180px;
      height: 180px;
      border-radius: 20px;
    }
    .name {
      position: absolute;
      top: 635px;
      left: 180px;
      font-size: 35px;
      font-weight: 700;
      color: #FFFFFB;
    }
  }
  .content {
      width: 100%;
      height: 100%;
      margin-bottom: 400px;
      padding: 20px;
      // background-color: pink;
      .null {
        height: 100px;
      }
      .details {
        position: relative;
        margin-top: 66px;
        padding-bottom: 35px;
        border-bottom: 1px solid #E9E9E9;
        // background-color: red;
        .first-row {
          .small-photo {
            width: 100px;
            height: 100px;
            border-radius: 15px;
          }
          .blue-name {
            position: absolute;
            font-weight: 700;
            font-size: 25px;
            color: #596386;
          }
          .text {
            position: absolute;
            top: 70px;
            left: 120px;
            font-weight: 700;
            font-size: 30px;
          }
        }
        .second-row {
          width: 400px;
          position: absolute;
          top: 120px;
          left: 120px;
          // background-color: green;
          .moment {
            width: 100%;
            height: 400px;
          }
          .locate {
            margin: 10px;
            font-size: 15px;
            color: #485A6D;
          }
        }
        .third-row {
          width: 520px;
          height: 500px;
          .time {
            margin-left: 120px;
            line-height: 930px;
            font-size: 15px;
            color: #B5B5B5
          }
          .moment-font {
            margin-left: 310px;
            font-size: 25px;
            color: #68758C;
          }
          // background-color: blue;
        }
        .like {
          width: 500px;
          height: 50px;
          padding-left: 20px;
          margin-left: 120px;
          background-color: #F7F7F7;
          .name {
            font-size: 30px;
            font-weight: 700;
            color: #4E587D;
          }
        }
      }
    }
}
</style>
