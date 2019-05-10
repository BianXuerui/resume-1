<template>
  <div>
    <header class="container-fluid bg-white">
      <div class="my-w100">
        <router-link to="/" class="logo">
          <img src="http://127.0.0.1:1018/img/header/logo.png">
        </router-link>
      </div>
    </header>
    <div class="container-fluid main">
      <div class="white text-center">
        <h5 class="login mt-5">
          <a href="javascript:;" :class="cCode==1?'active':''" @click="switchCode">账号登录</a>
          <span></span>
          <a href="javascript:;" :class="aCode==1?'active':''" @click="switchAccount">二维码登录</a>
        </h5>
        <div class="d1 text-left" v-show="cCode==1">
          <input type="text" class="form-control mt-5" placeholder="请输入用户名/手机号/邮箱" autofocus v-model="uname">
          <input type="password" class="form-control mt-5" placeholder="请输入密码" v-model="upwd">
          <label class="mt-4"><input type="checkbox">记住登录状态</label>
          <a href="javascript:;" class="mybtn text-center" @click="login">登录</a>
          <router-link to="/reg" class="leftB">注册</router-link>
          <a href="javascript:;" class="rightB">忘记密码?</a>
        </div>
        <div class="d2" v-show="aCode==1">
          <img src="http://127.0.0.1:1018/img/login/mzQrShow.jpg">
          <p class="mt-3">请使用账号中心右上角或最新的Flyme系统相机扫码功能，扫码登录</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cCode: 1,
      aCode: 0,
      uname: "",
      upwd: "",
    };
  },
  methods: {
    switchCode() {
      this.aCode = 0;
      this.cCode = 1;
    },
    switchAccount() {
      this.aCode = 1;
      this.cCode = 0;
    },
    login(){
      this.axios.post("http://127.0.0.1:1018/user/login",`uname=${this.uname}&upwd=${this.upwd}`)
      .then(res=>{
        if(res.data.code == 1){
          var uid = res.data.uid;
          console.log(uid);
          this.$router.push(sessionStorage.getItem("fromCart")?"/cart":"/");
          history.go(0);
          sessionStorage.removeItem("fromCart");
        }else{
          alert(res.data.msg);
        }
      })
    }
  }
};
</script>

<style scoped>
/* 二维码登录样式 */
.d2 > img {
  width: 110%;
  margin-left:-5%;
}
.d2 > p {
  color:#999;
  font-size:1.1428rem;
  text-align:left;
}
/* 修改bootstrap mt5默认样式 */
.d1 .mt-5 {
    margin-top: 4rem !important;
}
/* 顶部logo栏样式 */
header > div {
  padding-top: 1.7857rem;
  padding-bottom: 3.2rem;
}
a.logo {
  float: left;
  width:8.9285rem;
}
a.logo > img {
  width: 100%;
}
/* 主体样式 */
.main {
  background: #edf9fb url(http://127.0.0.1:1018/img/login/banner.png) no-repeat center;
  height: 53.57rem;
  position: relative;
}
/* 登录大div样式 */
.main > .white {
  width: 26.286rem;
  height: 33.5rem;
  background: #fff;
  position: absolute;
  top: 8.5rem;
  right: 16.5rem;
  padding: 1.5rem 4rem;
}
/* 登录标题样式 */
.white > .login > a {
  color: #7f7f7f;
  display: inline-block;
  width: 49%;
}
.white > .login > a.active {
  color: #000;
}
.white > .login > span {
  font-size: 0.857rem;
  border: 0.086rem solid #b3abab;
}
/* 输入框样式 */
.white  input {
  outline: none;
  margin: auto;
}
/* 注册按钮样式 */
.white a.mybtn {
  display: block;
  /* width:75%; */
  margin: 3rem auto 0;
  padding: 0.5rem 0;
  border-radius: 3px;
  color: #fff;
  background: #387aff;
}
/* 设置左下角登录位置 */
.white .leftB {
  position: absolute;
  bottom: 1.5rem;
  left: 4rem;
}
.white .rightB {
  position: absolute;
  bottom: 1.5rem;
  right: 4rem;
}
</style>