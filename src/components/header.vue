<template>
  <header class="container-fluid px-0">
    <div class="my-w100 container px-0 clearfix">
      <!-- logo-->
      <router-link to="/" class="logo float-left">
        <img src="http://127.0.0.1:1018/img/header/logo.png" alt>
      </router-link>
      <a @click="toViews" href="javascript:;" class="float-right my-mt">
        <img data-view="/cart" src="http://127.0.0.1:1018/img/header/shopping-cart-gray_f0fb320.png" title="购物车">
      </a>
      <div href="javascript:;" class="float-right my-mt pr-2 myUser">
        <img :src="uid?'http://127.0.0.1:1018/img/header/w200h200.jpg':'http://127.0.0.1:1018/img/header/icon-user_d8bdb23.png'">
        <div class="myUser-hd">
          <span></span>
          <ul class="list-unstyled bg-white mb-0">
            <li v-show="!uid">
              <a href="javascript:;" @click="toViews" data-view="/login">立即登录</a>
            </li>
            <li v-show="!uid">
              <a href="javascript:;" @click="toViews" data-view="/reg">立即注册</a>
            </li>
            <li v-show="uid">
              <a href="javascript:;">个人中心</a>
            </li>
            <li>
              <a href="javascript:;">我的订单</a>
            </li>
            <li>
              <a href="javascript:;">M码通道</a>
            </li>
            <li v-show="uid">
              <a href="javascript:;" @click="quit">退出登录</a>
            </li>
          </ul>
        </div>
      </div>
      <input
        type="text"
        class="form-control float-right d-inline-block py-2 border-0 mr-3"
        placeholder="魅族16th"
      >
      <!-- 折叠导航栏-->
      <div class="navbar navbar-expand-lg navbar-dark bg-trans float-right p-0">
        <div class="navbar-toggler" data-toggle="collapse" data-target="#foldContent">
          <span class="navbar-toggler-icon"></span>
        </div>
        <div class="collapse navbar-collapse" id="foldContent">
          <ul class="navbar-nav">
            <li class="nav-item" data-toggle="hc1">
              <a href="javascript:;" class="nav-link text-center">手机</a>
              <div class="hc" id="hc1">
                <ul class="my-w100 d-flex list-unstyled h-100 justify-content-around">
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:1018/img/header/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png@240x240.jpg" class>
                      <span>魅族Note9</span>
                      <span>￥1398</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:1018/img/header/Cgbj0VvQPnuAAwPPAAMv8zzt2DE910.png@240x240.jpg" class>
                      <span>魅族 Note8</span>
                      <span>￥999</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:1018/img/header/Cgbj0FvINLWACd0AAAh2dGv5_R0516.png@240x240.jpg" class>
                      <span>魅族 16 X</span>
                      <span>￥1798</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:1018/img/header/Cgbj0VuhxsmABvIIAAMCZZS4ycg181.png@240x240.jpg" class>
                      <span>魅族 V8 高配版</span>
                      <span>￥898</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:1018/img/header/Cgbj0FusSK2AQZgiAAlFKHoO-co889.png@240x240.jpg" class>
                      <span>魅族 X8</span>
                      <span>￥1298</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:1018/img/header/Cgbj0FtqgnmAFgJPAAhgnScaoFg724.png@240x240.jpg" class>
                      <span>魅族 16th</span>
                      <span>￥2498</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:1018/img/header/Cgbj0FrcblSAGHrPAAvT_qZZSA0427.png@240x240.jpg" class>
                      <span>魅族 15</span>
                      <span>￥1498</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:1018/img/header/Cgbj0Vq9-oeARs_XAALvUdl5qpo302.png@240x240.jpg" class>
                      <span>魅蓝 E3</span>
                      <span>￥1799</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item" data-toggle="hc2">
              <a href="javascript:;" class="nav-link text-center">声学</a>
              <div class="hc" id="hc2">
                <ul class="my-w100 d-flex list-unstyled h-100 justify-content-around">
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:1018/img/header/Cgbj0Fsp-8yATCDFAASWKnb1fdQ339.png@240x240.jpg" class>
                      <span>POP 真无线蓝牙耳机</span>
                      <span>￥499</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:1018/img/header/Cgbj0FpeqUqAYAbBAAJRQlEIMmc702.png@240x240.jpg" class>
                      <span>魅族 Flow Bass 三单元耳机</span>
                      <span>￥399</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:1018/img/header/Cgbj0VrcX6yABHxPAARZwWUAjc4748.png@240x240.jpg" class>
                      <span>魅族 HALO 激光蓝牙耳机</span>
                      <span>￥499</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:1018/img/header/1459849377-64075.png@240x240.jpg" class>
                      <span>魅族 EP51 蓝牙运动耳机</span>
                      <span>￥129</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:1018/img/header/Cgbj0Fui_-OAIlOuAAIlimOCLcA452.png@240x240.jpg" class>
                      <span>魅族 EP52 Lite 蓝牙耳机</span>
                      <span>￥129</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:1018/img/header/Cgbj0FpeqaKAYLSmAATXqR4BPH8829.png@240x240.jpg" class>
                      <span>魅族 LIVE 四单元动铁耳机</span>
                      <span>￥1099</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:1018/img/header/Cgbj0Ft-WkOAAhCKAAFqcNe6c3M482.png@240x240.jpg" class>
                      <span>魅族 EP-31 耳机</span>
                      <span>￥99</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:1018/img/header/Cgbj0Vn2f8mAcov7AAHUhmjUdk0958.png@240x240.jpg" class>
                      <span>魅蓝 EP52 蓝牙耳机</span>
                      <span>￥199</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item" data-toggle="hc3">
              <a href="javascript:;" class="nav-link text-center">配件</a>
              <div class="hc" id="hc3">
                <ul class="my-w100 d-flex list-unstyled h-100 justify-content-around">
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:1018/img/header/Cgbj0VugrWKAXgQoAALx033SuQ0691.png@240x240.jpg" class>
                      <span>魅族移动电源3</span>
                      <span>￥79</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:1018/img/header/1467170145-52479.png@240x240.jpg" class>
                      <span>快充电源适配器（UP0830S）</span>
                      <span>￥69</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:1018/img/header/Cgbj0VrcXw2AL0tBAApTh_xwKKk709.png@240x240.jpg" class>
                      <span>魅族无线充电器</span>
                      <span>￥79</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:1018/img/header/Cgbj0FqYqxqAcZ-nAAGaLqkN71s729.png@240x240.jpg" class>
                      <span>魅族 Type-C 2.0数据线</span>
                      <span>￥49</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:1018/img/header/1458617159-29477.png@240x240.jpg" class>
                      <span>魅族 Micro USB 数据线</span>
                      <span>￥29</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:1018/img/header/CnQOjVef_HaAaD-bAAHXId4TWtA165.png@240x240.jpg" class>
                      <span>魅族 Type-C 金属数据线</span>
                      <span>￥39</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:1018/img/header/Cgbj0VwkSZKATjTlAAajD8PGNhs208.png@240x240.jpg" class>
                      <span>魅族 16th 高透保护膜</span>
                      <span>￥19</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:1018/img/header/Cgbj0Ft7iV6AQANcAAL00J0tbyQ152.png@240x240.jpg" class>
                      <span>魅族 16th Plus 亲肤保护壳</span>
                      <span>￥29</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item" data-toggle="hc4">
              <a href="javascript:;" class="nav-link text-center">生活</a>
              <div class="hc" id="hc4">
                <ul class="my-w100 d-flex list-unstyled h-100 justify-content-around">
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:1018/img/header/Cix_s1gYZWCAc1jqAAGoLQ8h81w741.png@240x240.jpg" class>
                      <span>魅族盒子 一键找回遥控器</span>
                      <span>￥199</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:1018/img/header/1465698264-58364.jpg@240x240.jpg" class>
                      <span>魅族路由器 极速版</span>
                      <span>￥99</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:1018/img/header/CnQOjViEff2AGm-aAADs7Q-pP_M820.png@240x240.jpg" class>
                      <span>魅族桌面多功能USB排插</span>
                      <span>￥89</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:1018/img/header/Cgbj0Vqwv3SAKEs9AAeZO9uMlbg447.png@240x240.jpg" class>
                      <span>Everyday 乐游系列 酷 MA</span>
                      <span>￥599</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:1018/img/header/Cix_s1g7l-yANQsqAAJSWz441uE109.jpg@240x240.jpg" class>
                      <span>魅蓝休闲旅行双肩包</span>
                      <span>￥199</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:1018/img/header/Cgbj0Vn6yW6AUlsRAAWrjB0SvJc768.png@240x240.jpg" class>
                      <span>魅蓝胸包</span>
                      <span>￥89</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:1018/img/header/Cgbj0Vmnd4mACpbbAAWpKisBvl4526.png@240x240.jpg" class>
                      <span>魅蓝数码收纳包</span>
                      <span>￥59</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:1018/img/header/Cgbj0VlZqvaAGb0QAAUD7V55-H8213.png@240x240.jpg" class>
                      <span>魅蓝旅行包</span>
                      <span>￥269</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <a href="javascript:;" class="nav-link text-center">Flyme</a>
            </li>
            <li class="nav-item">
              <a href="javascript:;" class="nav-link text-center">服务</a>
            </li>
            <li class="nav-item">
              <a href="javascript:;" class="nav-link text-center">专卖店</a>
            </li>
            <li class="nav-item">
              <a href="javascript:;" class="nav-link text-center">社区</a>
            </li>
            <li class="nav-item download" data-toggle="hc5">
              <a href="javascript:;" class="nav-link text-center">APP下载</a>
              <div class="hc" id="hc5"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      uid: ""
    };
  },
  created() {
    this.getUid();
  },
  methods: {
    getUid() {
      this.axios.get("http://127.0.0.1:1018/user/getUid").then(res => {
        this.uid = res.data.uid;
      });
    },
    quit() {
      this.axios.get("http://127.0.0.1:1018/user/quit").then(res => {
        history.go(0);
      });
    },
    toViews(e){
      this.$router.push(e.target.dataset.view);
    }
  }
};
</script>

<style scoped>
a.logo {
  margin-top: 2rem;
}
a.logo > img {
  width: 50%;
}
.container-fluid {
  background-color: #fff;
  position: absolute;
  z-index: 101;
}
/*媒体查询*/
@media screen and (min-width: 1200px) {
  nav.my-w100 {
    left: 9.2%;
  }
}
@media screen and (max-width: 1200px) {
  nav.my-w100 {
    left: 0;
  }
}
/*折叠导航栏*/
a.nav-link:hover {
  color: #00b9f2 !important;
}
/*搜索框样式初始化*/
.form-control {
  margin-top: 1.7rem;
  width: 15%;
  border-radius: 1rem;
  font-size: 0.8rem;
  box-shadow: 0 0 0 0.1rem rgba(0, 0, 0, 0.15);
  outline: none;
  background: #fff url(http://127.0.0.1:1018/img/header/magnifier.png) no-repeat 95%
    center;
}
.my-mt {
  margin-top: 1.8rem;
}
/*导航栏a标签样式*/
.navbar-dark .navbar-nav .nav-link {
  padding: 2.15rem;
  color: #333;
}
@media (min-width: 992px) {
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 1.25rem;
    padding-left: 1.25rem;
  }
}
/*鼠标悬停显示隐藏div*/
/* 隐藏div下组件样式 */
div.hc > ul:hover a {
  opacity: 0.5;
}
div.hc > ul > li > a {
  padding-top: 0.8rem;
  display: block;
  text-align: center;
  height: 100%;
  font-size: 0.857rem;
  color: #333;
}
div.hc > ul > li > a:hover {
  opacity: 1;
}
div.hc > ul > li > a > img {
  width: 78%;
}
div.hc > ul > li > a > span {
  width: 87%;
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
/* 隐藏div样式 */
div.hc {
  position: absolute;
  overflow: hidden;
  background: #fff;
  width: 98.87vw;
  height: 0rem;
  transition: 0.5s ease;
  opacity: 0;
  top: 5.79rem;
  left: -35.22rem;
}
/* 媒体查询-- 鼠标悬停在导航栏显示隐藏div*/
@media screen and (min-width: 992px) {
  .navbar-nav > li:hover > div {
    transition-delay: 0.45s;
    height: 13rem;
    opacity: 1;
  }
  /* 显示隐藏下载div */
  .navbar-nav > li.download:hover > div {
    height: 23rem;
  }
}
/* 隐藏下载栏样式 */
.download > div.hc {
  background: #fff
    url(http://127.0.0.1:1018/img/header/935524fa-9d0b-420b-a485-105974823f40.jpg)
    no-repeat center;
  background-size: 82%;
}
/* 导航栏用户按钮样式 */
.myUser {
  position: relative;
}
.myUser > img {
  width: 2.1428rem;
  height: 2.1428rem;
  border-radius: 50%;
}
.myUser-hd {
  position: absolute;
  left: -2.1rem;
  display: none;
}
.myUser-hd > ul {
  padding: 0.5rem 1.5rem;
  border-radius: 2px;
  position: relative;
  top: -0.9rem;
  border: 1px solid #efefef;
}
.myUser-hd > ul > li > a {
  display: block;
  font-size: 0.857rem;
  color: #555;
  padding: 0.5rem 0;
  white-space: nowrap;
}
.myUser-hd > ul > li > a:hover {
  color: #007bff;
}
/* 小箭头样式 */
.myUser-hd > span {
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0 auto;
  transform: rotate(45deg);
  background: #fff;
  position: relative;
  top: 0.5rem;
  border: 1px solid #efefef;
}
/* 鼠标悬停显示用户隐藏div */
.myUser:hover > .myUser-hd {
  display: block;
}
</style>
