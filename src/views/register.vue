<template>
  <div>
    <header class="container-fluid bg-white">
      <div class="my-w100">
        <router-link to="/" class="logo">
          <img src="http://127.0.0.1:1018/img/header/logo.png" alt>
        </router-link>
      </div>
    </header>
    <div class="container-fluid main">
      <div class="white text-center">
        <h5 class>注册Flyme账号</h5>
        <div class="unameMsg mt-3" :class="uname.class" :style="uname.style" v-text="uname.msg"></div>
        <input
          type="text"
          class="form-control"
          id="uname"
          placeholder="请输入用户名"
          autofocus
          @focus="showUname"
          @blur="unameVali"
          v-model="uname.value"
        >
        <div class="upwdMsg" :class="upwd.class" :style="upwd.style">密码长度在6-16位之间</div>
        <input
          type="password"
          class="form-control"
          id="upwd"
          placeholder="请输入密码"
          @focus="showUpwd"
          @blur="upwdVali"
          v-model="upwd.value"
        >
        <div class="upwdCMsg" :class="upwdC.class" :style="upwdC.style">应与第一次输入密码一致</div>
        <input
          type="password"
          class="form-control"
          id="upwdC"
          placeholder="请确认密码"
          @focus="showUpwdC"
          @blur="upwdCVali"
          v-model="upwdC.value"
        >
        <div class="phoneMsg" :class="phone.class" :style="phone.style">请输入正确的手机号</div>
        <input
          type="text"
          class="form-control"
          id="phone"
          placeholder="请输入手机号"
          @focus="showPhone"
          @blur="phoneVali"
          v-model="phone.value"
        >
        <div class="emailMsg" :class="email.class" :style="email.style">请输入正确的邮箱格式</div>
        <input
          type="text"
          class="form-control"
          id="email"
          placeholder="请输入邮箱"
          @focus="showEmail"
          @blur="emailVali"
          v-model="email.value"
        >
        <a href="javascript:;" @click="reg" class="mybtn">立即注册</a>
        <router-link to="/login" class="leftB">登录</router-link>
      </div>
    </div>
  </div>
</template>

<script>
class dataTpl{
  constructor(){
    this.style = {opacity:0};
    this.class = { suc: false, fail: false };
    this.status = true;
    this.value = "";
    this.code = 0;
  }
}
export default {
  data() {
    return {
      uname: new dataTpl(),
      upwd: new dataTpl(),
      upwdC: new dataTpl(),
      phone: new dataTpl(),
      email: new dataTpl()
    };
  },
  methods: {
    showUname() {
      this.uname.style.opacity = 1;
      this.uname.msg = "用户名长度在6-9位之间";
    },
    unameVali() {
      var length = this.uname.value.length;
      this.uname.class.fail = false;
      this.uname.class.suc = false;
      if (length < 6 || length > 9) {
        this.uname.class.fail = true;
        this.uname.msg = "用户名长度在6-9位之间";
        this.uname.code = 0;
      } else {
        this.axios
          .get("http://127.0.0.1:1018/user/vali?uname=" + this.uname.value)
          .then(res => {
            if (res.data == 1) {
              this.uname.class.fail = true;
              this.uname.msg = "用户名已被占用";
              this.uname.code = 0;
            } else {
              this.uname.class.suc = true;
              this.uname.msg = "用户名可以使用";
              this.uname.code = 1;
            }
          });
      }
    },
    showUpwd() {
      this.upwd.style.opacity = 1;
    },
    upwdVali() {
      var length = this.upwd.value.length;
      this.upwd.class.fail = false;
      this.upwd.class.suc = false;
      if (length < 6 || length > 16) {
        this.upwd.class.fail = true;
        this.upwd.code = 0;
      } else {
        this.upwd.class.suc = true;
        this.upwd.code = 1;
      }
    },
    showUpwdC() {
      this.upwdC.style.opacity = 1;
    },
    upwdCVali() {
      this.upwdC.class.fail = false;
      this.upwdC.class.suc = false;
      if (this.upwdC.value == this.upwd.value && this.upwd.value) {
        this.upwdC.class.suc = true;
        this.upwdC.code = 1;
      } else {
        this.upwdC.class.fail = true;
        this.upwdC.code = 0;
      }
    },
    showPhone() {
      this.phone.style.opacity = 1;
    },
    phoneVali() {
      var reg = /^1[3-9]\d{9}$/;
      this.phone.class.fail = false;
      this.phone.class.suc = false;
      if (!reg.test(this.phone.value)) {
        this.phone.class.fail = true;
        this.phone.code = 0;
      } else {
        this.phone.class.suc = true;
        this.phone.code = 1;
      }
    },
    showEmail() {
      this.email.style.opacity = 1;
    },
    emailVali() {
      var reg = /^\w+@\w+\.\w+$/;
      this.email.class.fail = false;
      this.email.class.suc = false;
      if (!reg.test(this.email.value)) {
        this.email.class.fail = true;
        this.email.code = 0;
      } else {
        this.email.class.suc = true;
        this.email.code = 1;
      }
    },
    reg(){
      if(this.uname.code==1&&this.upwd.code==1&&this.upwdC.code==1&&this.email.code==1&&this.phone.code==1){
        var uname = this.uname.value;
        var upwd = this.upwd.value;
        var email = this.email.value;
        var phone = this.phone.value;
        var reg_time = new Date().getTime();
        this.axios.post('http://127.0.0.1:1018/user/reg',`uname=${uname}&upwd=${upwd}&email=${email}&phone=${phone}&reg_time=${reg_time}`)
        .then(res=>{
          if(res.data == 1){
            alert("注册成功");
            this.$router.push("/login");
          }
        })
      }
    }
  }
};
</script>

<style scoped>
/* 顶部logo栏样式 */
header > div {
  padding-top:1.7857rem;
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
  height: 36.9rem;
  background: #fff;
  position: absolute;
  top: 8.5rem;
  right: 16.5rem;
  padding: 1.5rem 4rem;
}
.white > h5 {
  color: #387aff;
}
/* 输入框样式 */
.white > input {
  outline: none;
  margin: auto;
}
/* 注册按钮样式 */
.white > a.mybtn {
  display: block;
  /* width:75%; */
  margin: 2rem auto 0;
  padding: 0.5rem 0;
  border-radius: 3px;
  color: #fff;
  background: #387aff;
}
/* 设置左下角登录位置 */
.white > .leftB {
  position: absolute;
  bottom: 1.5rem;
  left: 4rem;
}
/* 提示框默认样式 */
.white > div {
  margin: 0.5rem auto;
  text-align: left;
  cursor: default;
  opacity: 0;
}
/* 用户名提示框样式 */
.unameMsg{
  height:1.4857rem;
}
/* 验证失败时提示框样式 */
div.fail {
  padding-left: 1.714rem;
  background: url(http://127.0.0.1:1018/img/login/false.png) no-repeat left center;
  background-size: contain;
  opacity: 1;
}
/* 验证成功时提示框样式 */
div.suc {
  padding-left: 1.714rem;
  background: url(http://127.0.0.1:1018/img/login/true.png) no-repeat left center;
  background-size: contain;
}
</style>
