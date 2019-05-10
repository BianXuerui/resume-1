<template>
  <div>
    <header class="container-fluid bg-white">
      <div class="my-w100">
        <router-link to="/" class="logo">
          <img src="http://127.0.0.1:1018/img/header/logo.png">
        </router-link>
        <el-steps :active="active" finish-status="success" space="11.42rem">
          <el-step title="购物车"></el-step>
          <el-step title="确认订单"></el-step>
          <el-step title="在线支付"></el-step>
          <el-step title="完成"></el-step>
        </el-steps>
        <div class="headerRight">
          <a href="javascript:;" v-if="uid">我的订单</a>
          <div
            href="javascript:;"
            class="float-right mall bg-white"
            v-if="uid"
            @mouseover="mouseIn"
            @mouseout="mouseOut"
          >
            <a href="javascript:;">
              {{uname}}的商城
              <i
                class="el-icon--right"
                :class="isHover?'el-icon-arrow-up':'el-icon-arrow-down'"
              ></i>
            </a>
            <ul class="list-unstyled mb-0">
              <li class="mt-2">地址管理</li>
              <li class>我的收藏</li>
              <li class>我的回购金</li>
              <li class>问题反馈</li>
              <li class="pb-0" @click="quit">退出</li>
            </ul>
          </div>
          <a @click="toLogin" href="javascript:;" v-if="!uid" class="mr-5">登录</a>
          <router-link to="/reg" v-if="!uid" class="mr-4">注册</router-link>
        </div>
      </div>
    </header>
    <main class="pt-3 pb-5">
      <div class="my-w100">
        <!-- 未登录 -->
        <div class="notLogin" v-if="!uid">
          <p class="title">您还没有登录!</p>
          <p>登录后可显示您账号中已加入的商品哦~</p>
          <el-button type="primary" @click="toLogin">去登录</el-button>
        </div>
        <!-- 登录但购物车为空 -->
        <div class="cartEmpty" v-else-if="!list.length">
          <p class="title">购物车内还没有商品，赶紧去选购吧~</p>
          <el-button type="primary" plain @click="toIndex">返回商城首页</el-button>
        </div>
        <!-- 登录且购物车有商品 -->
        <div class="cartNotNull" v-else>
          <table class="w-100 text-center align-middle">
            <thead>
              <tr>
                <td class="w-40 pl-4 text-left">
                  <!-- <el-checkbox v-model="checkedAll" @change="switchCheckedAll" class="mb-0">全选</el-checkbox> -->
                  <label>
                    <input type="checkbox" v-model="checkedAll" @change="switchCheckedAll">全选
                  </label>
                </td>
                <td class="cart_title">单价(元)</td>
                <td class="cart_title">数量</td>
                <td class="cart_title">小计(元)</td>
                <td class="cart_title edit" v-text="isEdit?'完成':'编辑'" @click="switchEdit"></td>
              </tr>
            </thead>
            <tbody class="cartBody">
              <tr class="gapTop">
                <td colspan="5"></td>
              </tr>
              <tr v-for="(elem,i) of list" :key="i">
                <td class="d-flex pl-4">
                  <!-- <el-checkbox v-model="elem.chb" @change="switchChecked"></el-checkbox> -->
                  <label>
                    <input type="checkbox" v-model="elem.chb" @change="switchChecked">
                  </label>
                  <img :src="`http://127.0.0.1:1018/${elem.img_url}`" class="cartItemPic mt-3">
                  <div class="text-left pl-4 my-4">
                    <p v-text="elem.pname" class="cartItemName mt-3 mb-2"></p>
                    <p v-text="elem.spec" class="cartItemSpec"></p>
                  </div>
                </td>
                <td>
                  <span v-text="`￥${elem.price.toFixed(2)}`" class="cartItemPrice"></span>
                </td>
                <td>
                  <el-input-number size="mini" v-model="elem.count" :min="1"></el-input-number>
                </td>
                <td v-text="`￥${(elem.price * elem.count).toFixed(2)}`" class="subtotal"></td>
                <td>
                  <i class="el-icon-minus" v-if="!isEdit"></i>
                  <i
                    class="el-icon-close removeItem"
                    v-else
                    @click="removeItem($event)"
                    :data-iid="elem.iid"
                  ></i>
                </td>
              </tr>
              <tr class="gapBottom">
                <td colspan="5"></td>
              </tr>
            </tbody>
          </table>
          <div class="settleBar d-flex justify-content-between">
            <div class="text-left pl-4">
              <!-- <el-checkbox v-model="checkedAll" @change="switchCheckedAll" class="mb-0">全选</el-checkbox> -->
              <label>
                <input type="checkbox" v-model="checkedAll" @change="switchCheckedAll">全选
              </label>
              <span class="rmSelected mr-4">删除选中的商品</span>
              <span>
                共
                <span v-text="list.length"></span> 件商品， 已选择
                <span v-text="list.length" class="blue"></span> 件
              </span>
            </div>
            <div class="text-right pr-4" colspan="4">
              <span>
                合计(不含运费)：
                <span class="total pr-3" v-text="`￥0.00`"></span>
                <el-button :type="canSettle?'danger':'info'" :disabled="!canSettle">去结算</el-button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
    <my-footer></my-footer>
  </div>
</template>

<script>
import myFooter from "@/components/footer.vue";
export default {
  data() {
    return {
      uid: "",
      uname: "",
      active: 0,
      isHover: false,
      checkedAll: false,
      isEdit: false,
      canSettle: false,
      list: []
    };
  },
  methods: {
    mouseIn() {
      this.isHover = true;
    },
    mouseOut() {
      this.isHover = false;
    },
    toIndex() {
      this.$router.push("/");
    },
    toLogin() {
      this.$router.push("/login");
      sessionStorage.setItem("fromCart", true);
    },
    quit() {
      this.axios.get("http://127.0.0.1:1018/user/quit").then(res => {
        history.go(0);
      });
    },
    // switchChecked(){
    //   this.list.forEach(elem=>{
    //     if(!elem.chb){
    //       this.checkedAll = false;
    //       return;
    //     }
    //     this.checkedAll = true;
    //   })
    // },
    switchCheckedAll() {
      this.list.forEach(elem => {
        elem.chb = this.checkedAll;
      });
    },
    switchChecked(e) {
      for (var elem of this.list) {
        if (!elem.chb) {
          this.checkedAll = false;
          return;
        }
      }
      this.checkedAll = true;
    },
    switchEdit() {
      this.isEdit = !this.isEdit;
    },
    // getCart() {
    //   this.axios.get("http://127.0.0.1:1018/product/getCart").then(res => {
    //     var result = res.data;
    //     if (result.code == 1) {
    //       this.uid = result.uid;
    //       console.log(this.uid);
    //       this.uname = result.uname;
    //       this.list = result.data;
    //     }
    //   });
    // },
    getUid() {
      this.axios.get("http://127.0.0.1:1018/user/getUid").then(res => {
        this.uid = res.data.uid;
      });
    },
    getCart() {
      this.axios.get("http://127.0.0.1:1018/product/getCart").then(res => {
        var result = res.data;
        this.uname = result.uname;
        this.list = result.data;
        this.list.forEach(elem => {
          elem.chb = false;
        });
      });
    },
    removeItem(e) {
      this.$confirm("您确定要删除该商品吗?", "删除", {
        confirmButtonText: "删除",
        cancelButtonText: "取消",
        // type: 'warning',
        center: true
      })
        .then(() => {
          this.axios
            .get(
              "http://127.0.0.1:1018/product/removeItem?iid=" +
                e.target.dataset.iid
            )
            .then(res => {
              if (res.data == 1) {
                this.$message({
                  type: "success",
                  message: "删除成功!"
                });
                this.getCart();
              }
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  created() {
    this.getUid();
    this.getCart();
  },
  computed: {},
  components: { myFooter }
};
</script>


<style scoped>
header > div {
  position: relative;
}
/* 初始化a标签样式 */
a {
  color: #666;
}
/* 顶部logo栏样式 */
header > div {
  padding-top: 1.7857rem;
}
a.logo {
  float: left;
  width: 8.9285rem;
  margin-right: 12rem;
}
a.logo > img {
  width: 100%;
}
/* 设置步骤条样式 */
.el-steps /deep/ .el-step__title {
  font-size: 0.8571rem;
  line-height: 2rem;
}
/* 设置头部右侧及订单样式 */
.headerRight {
  position: absolute;
  top: 2rem;
  right: 0;
  font-size: 0.8571rem;
}
.headerRight > div {
  cursor: pointer;
  color: #666;
}
.headerRight > a:hover {
  color: #00c3f5;
}
.headerRight ul > li {
  padding: 0.75rem 0;
}
.headerRight ul > li:hover {
  background-color: #eee;
}
/* 设置右部右侧商城样式 */
.mall {
  padding: 1rem;
  margin-top: -1.071rem;
  margin-left: 1rem;
  border: 1px solid #fff;
  border-radius: 3px;
  position: relative;
  z-index: 1;
}
.mall:hover {
  border-color: #999;
  transition: all 0.5s;
}
.mall:hover > a {
  color: #00c3f5;
}
.mall ul {
  height: 0;
  overflow: hidden;
}
.mall:hover ul {
  height: 13.5357rem;
  transition: height 0.25s linear;
}
/* 设置主体样式 */
main {
  background-color: #f4f6fa;
}
main > div.my-w100 {
  background-color: #fff;
}
main p.title {
  font-size: 1.2857rem;
  font-weight: bolder;
}
/* 购物车三种状态 */
/* 1. 未登录 */
.notLogin {
  padding: 11.5rem 0;
  color: #666;
  width: 40%;
  margin: auto;
  padding-left: 12rem;
  background: url(http://127.1:1018/img/cart/notFound-804fc26175.png) no-repeat
    left;
}
/* 2. 登录但购物车为空 */
.cartEmpty {
  padding: 11.5rem 0;
  width: 40%;
  margin: auto;
  padding-left: 12rem;
  background: url(http://127.1:1018/img/cart/productNotFound-f7e66579e9.png)
    no-repeat left;
}
/* 3. 登录且购物车中有商品 */
/* 表头title行 */
table > thead > tr {
  height: 50px;
}
thead > tr {
  box-shadow: #eee 0 0 1px 1px;
  margin-bottom: 0.5rem;
}
thead td + td {
  width: 12%;
}
.cart_title {
  color: rgba(51, 51, 51, 0.4);
  font-size: calc(12rem / 14);
}
.cart_title.edit {
  color: #00c3f5;
  cursor: pointer;
}
/* 表格主体 */
/* 表头与主体之间间隙 */
.cartBody .gapTop > td {
  height: 3rem;
  background-color: #fafafc;
}
.cartBody .gapBottom > td {
  height: 1rem;
  background: #f4f6fa;
}
/* 修改element默认checkbox样式 */
.cartBody /deep/ .el-checkbox .el-checkbox__input {
  top: 42%;
}
.cartBody {
  font-size: calc(16rem / 14);
}
/* 修改商品细节样式 */
.cartItemPic {
  width: 100px;
  height: 100px;
}
.cartItemSpec {
  font-size: 1rem;
}
.cartItemSpec {
  color: #8c8c8c;
}
.cartItemPrice {
  color: #666;
}
/* 修改element默认计数器样式 */
.cartBody /deep/ .el-input-number--mini {
  width: 100px;
}
/* 小计样式 */
.subtotal {
  color: #e02b41;
}
.removeItem {
  animation: heartBeat 0.5s;
  cursor: pointer;
  border-radius: 50%;
  padding: 0.2rem;
  color: #bdbdbd;
}
.removeItem:hover {
  background-color: #ddd;
}
/* 结算行样式 */
.settleBar {
  background-color: #fff;
  /* position:fixed;
  bottom:0;
  left:0; */
}
.settleBar > div {
  height: 5rem;
  line-height: 5rem;
  font-size: 1rem;
}
.settleBar > div:first-child > span {
  color: #8c8c8c;
}
.rmSelected {
  cursor: pointer;
}
.settleBar .blue {
  color: #00c3f5;
}
.settleBar .total {
  color: #e02b41;
  font-size: calc(20rem / 14);
  font-weight: bolder;
  position: relative;
  top: 3px;
}
</style>