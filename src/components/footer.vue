<template>
  <footer class="container-fluid bg-white">
    <!-- 底部内容-->
    <div class="my-w100">
      <!-- 第一层-->
      <div class="border-bottom d-flex footerFirst">
        <!-- 第一层左边部分-->
        <ul
          class="footerLeft mr-5 pr-4 d-flex list-unstyled pt-5 pb-3 justify-content-around text-center"
        >
          <li>
            <img src="http://127.0.0.1:1018/img/footer/2c69bf7c-2d29-4fd4-852e-0aa497f36f51.png">
            <p>满80免运费</p>
          </li>
          <li>
            <img src="http://127.0.0.1:1018/img/footer/d28eac8b-b915-49dc-9dbd-80884a07d44f.png">
            <p>100+ 城市次日送达</p>
          </li>
          <li>
            <img src="http://127.0.0.1:1018/img/footer/b21f3e65-f7f4-4693-914c-c070faf96770.png">
            <p>7天无理由退货</p>
          </li>
          <li>
            <img src="http://127.0.0.1:1018/img/footer/1998f0da-a439-4e07-9736-e6a1c39fb0ae.png">
            <p>15天换货保障</p>
          </li>
          <li>
            <img src="http://127.0.0.1:1018/img/footer/420825c1-4763-436d-b3e1-721651ccc70c.png">
            <p>1年免费保修</p>
          </li>
          <li>
            <img src="http://127.0.0.1:1018/img/footer/1c5cfeff-1b35-499e-bc2a-1fd29305be69.png">
            <p>上门快修</p>
          </li>
        </ul>
        <!-- 第一层右边部分-->
        <div class="footerRight text-right pt-4">
          <p class="my-2">周一到周日7:30-24:00</p>
          <p class="mb-2">400-788-3333</p>
          <a href="javascript:;" class="mybtn">在线客服</a>
        </div>
      </div>
      <!-- 第二层-->
      <div class="mt-3 footerSecond">
        <ul class="breadcrumb bg-white footerLeft justify-content-start p-0 py-2 mb-2">
          <li class="breadcrumb-item">
            <a href="javascript:;">了解魅族</a>
          </li>
          <li class="breadcrumb-item">
            <a href="javascript:;">加入我们</a>
          </li>
          <li class="breadcrumb-item">
            <a href="javascript:;">联系我们</a>
          </li>
          <li class="breadcrumb-item">
            <a href="javascript:;">Flyme</a>
          </li>
          <li class="breadcrumb-item">
            <a href="javascript:;">魅族社区</a>
          </li>
          <li class="breadcrumb-item">
            <a href="javascript:;">天猫旗舰店</a>
          </li>
          <li class="breadcrumb-item">
            <a href="javascript:;">问题反馈</a>
          </li>
          <li class="breadcrumb-item">
            <a href="javascript:;">线上销售授权名单公示</a>
          </li>
          <li class="breadcrumb-item">
            <a href="javascript:;">出版物经营许可证</a>
          </li>
          <li class="breadcrumb-item">
            <span>简体中文</span>
          </li>
        </ul>
      </div>
      <!-- 第三层-->
      <div class="footerThird d-flex">
        <!-- 第三层左边部分下层-->
        <ul class="d-flex footerLeft justify-content-between list-unstyled mb-0 pb-4">
          <li class>©2019 Meizu Telecom Equipment Co., Ltd. All rights reserved.</li>
          <li class>
            <a href="javascript:;">粤ICP备13003602号</a>
          </li>
          <li class>
            <a href="javascript:;">合字B2-20170010</a>
          </li>
          <li class>
            <a href="javascript:;">营业执照</a>
          </li>
          <li class>
            <a href="javascript:;">法律声明</a>
          </li>
          <li class="pl-4">粤公网安备 44049102496009 号</li>
          <li class>
            <a href="javascript:;" class="bgIcon1 d-block"></a>
          </li>
          <li class>
            <a href="javascript:;" class="bgIcon2 d-block"></a>
          </li>
          <li class>
            <a href="javascript:;" class="bgIcon3 d-block"></a>
          </li>
        </ul>
        <!-- 第三层右边部分-->
        <ul class="list-unstyled d-flex bg-white justify-content-end footerRight p-0 mb-0 pb-4">
          <li class="px-3 border-right">
            <img src="http://127.0.0.1:1018/img/footer/26b50023-fde7-4f23-ae32-3aa39585f4c4.png">
          </li>
          <li class="px-3 border-right">
            <img src="http://127.0.0.1:1018/img/footer/33474117-9a2d-455d-a8ff-997355238400.jpg">
          </li>
          <li class="px-3 border-right">
            <a href="javascript:;" class="d-block h-100"></a>
          </li>
          <li class="pl-3">
            <a href="javascript:;" class="d-block h-100"></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
/*底部样式*/
/*底部通用*/
footer {
  color: #999;
  font-size: 0.857rem;
}
.footerLeft {
  width: 78%;
}
.footerRight {
  width: 22%;
}
footer .footerLeft li > a {
  color: #999;
}
/*面包屑样式初始化*/
li.breadcrumb-item + li.breadcrumb-item::before {
  content: "|";
  padding: 0 1.1rem;
  color: #999;
}
/*底部小图标样式*/
footer .footerLeft > li img {
  width: 1.1rem;
}
/*底部第一层*/
/*弹性ul样式*/
.footerFirst .footerLeft p {
  margin-top: 0.5rem;
  margin-bottom: 0;
}
.footerFirst .footerLeft img {
  width: 50%;
}
.footerFirst .footerRight > p:nth-child(2) {
  font-size: 1.785rem;
  color: #00c3f5;
}
/*底部第二层*/
.footerSecond .footerLeft li > a:hover {
  color: #31a5e7;
}
.footerSecond .footerLeft li.breadcrumb-item:last-child {
  background: url(http://127.0.0.1:1018/img/footer/language.png) no-repeat 28.2% 0;
  background-size: 16%;
}
.footerSecond .footerLeft li.breadcrumb-item:last-child > span {
  padding: 1rem;
}
/*第三层*/
.footerThird ul > li {
  height: 1.5rem;
  line-height: 1.5rem;
}
/*第三层左部样式*/
.footerLeft a[class^="bgIcon"] {
  width: 1.5rem;
  height: 100%;
  background: no-repeat center;
}
/*小图标*/
.footerLeft li.pl-4 {
  background: url(http://127.0.0.1:1018/img/footer/icon1.png) no-repeat left center;
}
.footerLeft a.bgIcon1 {
  background-image: url(http://127.0.0.1:1018/img/footer/icon2.png);
}
.footerLeft a.bgIcon1:hover {
  background-image: url(http://127.0.0.1:1018/img/footer/icon22.png);
}
.footerLeft a.bgIcon2 {
  background-image: url(http://127.0.0.1:1018/img/footer/icon3.png);
}
.footerLeft a.bgIcon2:hover {
  background-image: url(http://127.0.0.1:1018/img/footer/icon32.png);
}
.footerLeft a.bgIcon3 {
  background-image: url(http://127.0.0.1:1018/img/footer/icon4.png);
}
.footerLeft a.bgIcon3:hover {
  background-image: url(http://127.0.0.1:1018/img/footer/icon42.png);
}
/*第三层右部样式*/
.footerThird ul.footerRight > li {
  box-sizing: content-box;
  background: no-repeat center;
  background-size: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
  position: relative;
}
.footerThird ul.footerRight > li > a {
  width: 1.5rem;
  background: no-repeat center;
  background-size: 1.5rem;
}
/*悬停显示图片样式*/
.footerThird ul.footerRight > li > img {
  position: absolute;
  width: 13rem;
  bottom: 1.5rem;
  display: none;
}
/*四个图标*/
.footerThird .footerRight > li:first-child {
  background-image: url(http://127.0.0.1:1018/img/footer/3b085af8-a47b-453c-b147-a4b352fb3a14.png);
}
.footerThird .footerRight > li:nth-child(2) {
  background-image: url(http://127.0.0.1:1018/img/footer/58e3e041-5543-4414-aaf1-d8e1fd539af6.png);
}

.footerThird .footerRight > li:nth-child(3) > a {
  background-image: url(http://127.0.0.1:1018/img/footer/52cba4a4-b3a6-4522-9883-d3a918e7d4a9.png);
}
.footerThird .footerRight > li:nth-child(4) > a {
  background-image: url(http://127.0.0.1:1018/img/footer/bcccf9d2-e0e5-441b-b4a3-f78c12bc3933.png);
}
/*四个图标鼠标悬停*/
.footerThird .footerRight > li:first-child:hover {
  background-image: url(http://127.0.0.1:1018/img/footer/6721704b-7b6d-445d-a025-e33649e5db74.png);
}
.footerThird .footerRight > li:first-child:hover > img {
  display: block;
}
.footerThird .footerRight > li:nth-child(2):hover {
  background-image: url(http://127.0.0.1:1018/img/footer/cb0d00dc-41f7-4339-a0b3-25ee7dca1d4a.png);
}
.footerThird .footerRight > li:nth-child(2):hover > img {
  display: block;
  left: -2.8rem;
}
.footerThird .footerRight > li:nth-child(3) > a:hover {
  background-image: url(http://127.0.0.1:1018/img/footer/aff10988-6493-49c0-961a-0c91eae603b4.png);
}
.footerThird .footerRight > li:nth-child(4) > a:hover {
  background-image: url(http://127.0.0.1:1018/img/footer/7df8d821-a5c4-4619-9981-04e31db6e3de.png);
}
</style>
