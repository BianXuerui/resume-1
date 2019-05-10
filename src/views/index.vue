<template>
  <div>
    <header>
      <!-- 头部导航-->
      <my-header></my-header>
      <!-- 轮播图-->
      <div class="carousel" data-ride="carousel" id="content">
        <!-- 第一部分, 轮播图片-->
        <div class="carousel-inner">
          <a href="javascript:;" class="carousel-item active"></a>
          <a href="javascript:;" class="carousel-item"></a>
          <a href="javascript:;" class="carousel-item"></a>
          <a href="javascript:;" class="carousel-item"></a>
          <a href="javascript:;" class="carousel-item"></a>
          <a href="javascript:;" class="carousel-item"></a>
          <a href="javascript:;" class="carousel-item"></a>
        </div>
        <!-- 第二部分, 左右箭头-->
        <a href="#content" class="carousel-control-prev" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a href="#content" class="carousel-control-next" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
        <!-- 第三部分, 轮播指示器-->
        <ul class="carousel-indicators">
          <li data-slide-to="0" data-target="#content" class="active"></li>
          <li data-slide-to="1" data-target="#content"></li>
          <li data-slide-to="2" data-target="#content"></li>
          <li data-slide-to="3" data-target="#content"></li>
          <li data-slide-to="4" data-target="#content"></li>
          <li data-slide-to="5" data-target="#content"></li>
          <li data-slide-to="6" data-target="#content"></li>
        </ul>
      </div>
    </header>
    <!--轮播图下方四图-->
    <section class="bg-white pb-4 pt-5">
      <ul class="my-w100 d-flex list-unstyled">
        <li class="w-25 text-center">
          <a href="javascript:;" class="w-100 d-block">
            <img src="http://127.0.0.1:1018/img/index/83911647-b79b-4954-a1ed-433d37160257.jpg">
            <p class="titleFont">魅族16s旗舰手机</p>
            <p>预约赢新机</p>
          </a>
        </li>
        <li class="w-25 text-center">
          <a href="javascript:;" class="w-100 d-block">
            <img src="http://127.0.0.1:1018/img/index/a0dfe03a-573f-456c-809c-bffc39dd6d69.png">
            <p class="titleFont">魅族 16th 系列</p>
            <p>低至2298起</p>
          </a>
        </li>
        <li class="w-25 text-center">
          <a href="javascript:;" class="w-100 d-block">
            <img src="http://127.0.0.1:1018/img/index/69f7e0df-173b-4a10-9206-f9b21b3b6c23.jpg">
            <p class="titleFont">魅族 Note9</p>
            <p>立即购买</p>
          </a>
        </li>
        <li class="w-25 text-center">
          <a href="javascript:;" class="w-100 d-block">
            <img src="http://127.0.0.1:1018/img/index/0ce68181-e2fe-4772-881e-dfeb2c429fb0.jpg">
            <p class="titleFont">以旧换新</p>
            <p>免费寄件 专业检测</p>
          </a>
        </li>
      </ul>
    </section>
    <!--魅族手机-层标题-->
    <div class="floorTitle">
      <h2 class="text-center mt-5 mb-3">魅族手机</h2>
      <a href="javascript:;" class="phoneFloor"></a>
    </div>
    <!--魅族手机-层主体-->
    <section class="my-w100 floorBody">
      <!-- 大图行-->
      <div class="row">
        <div class="col-lg-6 col-md-12 mb-lg-0" v-for="(elem,i) of big" :key="i">
          <a href="javascript:;" class="text-center bg-white">
            <span class="tagRed">直降</span>
            <h3 class="paddingT-4" v-text="elem.pname"></h3>
            <p class="h5" v-text="elem.slogan"></p>
            <p class="price mb-0" v-text="`￥${elem.price}`"></p>
            <img :src="`http://127.0.0.1:1018/${elem.pic}`" class="w-75 mx-auto">
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0" v-for="(elem,i) of small" :key="i+2">
          <a href="javascript:;" class="text-center bg-white">
            <span class="tagBlue">领券</span>
            <img :src="`http://127.0.0.1:1018/${elem.pic}`" class="w-75 mx-auto paddingT-2d1">
            <h5 class="pt-4" v-text="elem.pname"></h5>
            <p class="mb-0 font999" v-text="elem.slogan"></p>
            <p class="price mb-0 pb-3" v-text="`￥${elem.price}`"></p>
          </a>
        </div>
      </div>
    </section>
    <!--魅族声学-层标题-->
    <div class="floorTitle">
      <h2 class="text-center mt-5 mb-3">魅族声学</h2>
      <a href="javascript:;" class="earphoneFloor"></a>
    </div>
    <!--魅族声学-层主体-->
    <section class="my-w100 floorBody">
      <!-- 第一行-->
      <div class="row">
        <!-- 大图格子-->
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="text-white text-center big-img-1">
            <h4 class="font-weight-bold">魅族蓝牙音频接收器</h4>
            <p class="mb-0">轻巧设计 独立音频芯片 一键控制 6小时续航</p>
            <p class="price mb-0 pb-3 font-weight-bold">￥89</p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="text-center bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/Cgbj0VrcX6yABHxPAARZwWUAjc4748.png"
              class="w-75 mx-auto paddingT-2d1"
            >
            <h5 class="pt-4 font-weight-normal">魅族 Halo 激光蓝牙耳机</h5>
            <p class="mb-0 font999">夜跑神器 随性张扬</p>
            <p class="price mb-0 pb-3">
              ￥499
              <del>￥999</del>
            </p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="text-center bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/Cgbj0FpeqUqAYAbBAAJRQlEIMmc702.png"
              class="w-75 mx-auto paddingT-2d1"
            >
            <h5 class="pt-4 font-weight-normal">魅族 Flow Bass 三单元耳机</h5>
            <p class="price mb-0 pb-3">
              ￥399
              <del>￥599</del>
            </p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="text-center bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/1459849377-64075.png"
              class="w-75 mx-auto paddingT-2d1"
            >
            <h5 class="pt-4 font-weight-normal">魅族 EP51 蓝牙运动耳机</h5>
            <p class="price mb-0 pb-3">
              ￥129
              <del>￥229</del>
            </p>
          </a>
        </div>
      </div>
      <!-- 第二行-->
      <div class="row">
        <!-- 大图格子-->
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="text-white text-center big-img-2">
            <h4 class="font-weight-bold">魅族 LIVE 四单元动铁耳机</h4>
            <p class="mb-0">6期免息</p>
            <p class="price mb-0 pb-3 font-weight-bold">
              ￥1099
              <del>￥1299</del>
            </p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="text-center bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/Cgbj0Vl22XGAC6YIAAGautlHsjo741.png"
              class="w-75 mx-auto paddingT-2d1"
            >
            <h5 class="pt-4 font-weight-normal">魅族 Flow 三单元耳机</h5>
            <p class="price mb-0 pb-3">
              ￥399
              <del>￥599</del>
            </p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="text-center bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/Cgbj0Fmb55mABV4HAAKspJD9ivQ842.png"
              class="w-75 mx-auto paddingT-2d1"
            >
            <h5 class="pt-4 font-weight-normal">魅族 EP52 蓝牙耳机</h5>
            <p class="mb-0 font999">轻盈悦耳 动无拘束</p>
            <p class="price mb-0 pb-3">
              ￥199
              <del>￥299</del>
            </p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="text-center bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/Cix_s1gcVpeAOmoaAAGh-ubroNg891.png"
              class="w-75 mx-auto paddingT-2d1"
            >
            <h5 class="pt-4 font-weight-normal">魅族 EP2X 耳机</h5>
            <p class="price mb-0 pb-3">
              ￥69
              <del>￥129</del>
            </p>
          </a>
        </div>
      </div>
      <!-- 第三行-->
      <div class="row">
        <!-- 大图格子-->
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="text-white text-center big-img-3">
            <h4 class="font-weight-bold">POP 真无线蓝牙耳机</h4>
            <p class="mb-0">双无线 零极限</p>
            <p class="price mb-0 pb-3 font-weight-bold price_yellow">￥499</p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="text-center bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/Cgbj0VmRZCiAKwA3AADYrtiPJlQ156.png"
              class="w-75 mx-auto paddingT-2d1"
            >
            <h5 class="pt-4 font-weight-normal">ME20入耳式耳机</h5>
            <p class="mb-0 font999">享受 不绝于耳</p>
            <p class="price mb-0 pb-3">
              ￥99
              <del>￥199</del>
            </p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="text-center bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/Cgbj0VrBl16Af2alAAWkq7hK2yI025.png"
              class="w-75 mx-auto paddingT-2d1"
            >
            <h5 class="pt-4 font-weight-normal">魅族MC-5N耳机升级线</h5>
            <p class="mb-0 font999">MMCX插头通用线 Live耳机升级线</p>
            <p class="price mb-0 pb-3">￥399</p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="text-center bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/Cgbj0Ft-WkOAAhCKAAFqcNe6c3M482.png"
              class="w-75 mx-auto paddingT-2d1"
            >
            <h5 class="pt-4 font-weight-normal">魅族 EP-31 耳机</h5>
            <p class="price mb-0 pb-3">
              ￥99
              <del>￥199</del>
            </p>
          </a>
        </div>
      </div>
    </section>
    <!--智能配件-层标题-->
    <div class="floorTitle">
      <h2 class="text-center mt-5 mb-3">智能配件</h2>
      <a href="javascript:;" class="fittingsFloor"></a>
    </div>
    <!--智能配件-层主体-->
    <section class="my-w100 floorBody">
      <!-- 第一行-->
      <div class="row">
        <!-- 大图格子-->
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="text-white text-center big-img-4">
            <h4 class="font-weight-bold">魅族 X8 高透保护膜</h4>
            <p class="mb-0">高透光率 助双眼捕捉每一颗像素的色彩</p>
            <p class="price mb-0 pb-3 font-weight-bold price_yellow">￥19</p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="text-center bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/Cgbj0VwRr8KAC2JKAAl05Yq0esM119.png"
              class="w-75 mx-auto paddingT-2d1"
            >
            <h5 class="pt-4 font-weight-normal">魅族 Note8 高透保护膜</h5>
            <p class="mb-0 font999">高透光率 助双眼捕捉每一刻像素的色彩</p>
            <p class="price mb-0 pb-3">￥19</p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="text-center bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/Cgbj0VwRr8OAK0BlAApiHfXlhQA575.png"
              class="w-75 mx-auto paddingT-2d1"
            >
            <h5 class="pt-4 font-weight-normal">魅族 V8 高配版高透保护膜</h5>
            <p class="mb-0 font999">高透光率 助双眼捕捉每一刻像素的色彩</p>
            <p class="price mb-0 pb-3">￥19</p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="text-center bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/Cgbj0VwkSZKATjTlAAajD8PGNhs208.png"
              class="w-75 mx-auto paddingT-2d1"
            >
            <h5 class="pt-4 font-weight-normal">魅族 16th 高透保护膜</h5>
            <p class="mb-0 font999">高透光率 支持魅族16th屏幕指纹解锁</p>
            <p class="price mb-0 pb-3">￥19</p>
          </a>
        </div>
      </div>
      <!-- 第二行-->
      <div class="row">
        <!-- 大图格子-->
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="text-white text-center big-img-5">
            <h4 class="font-weight-bold">快充电源适配器</h4>
            <p class="mb-0">快速充电 安全无忧</p>
            <p class="price mb-0 pb-3 font-weight-bold">
              ￥69
              <del>￥89</del>
            </p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="text-center bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/1458617159-29477.png"
              class="w-75 mx-auto paddingT-2d1"
            >
            <h5 class="pt-4 font-weight-normal">魅族 Micro USB数据线</h5>
            <p class="mb-0 font999">广泛兼容 经久耐用</p>
            <p class="price mb-0 pb-3">￥29</p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="text-center bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/Cgbj0FqYqxqAcZ-nAAGaLqkN71s729.png"
              class="w-75 mx-auto paddingT-2d1"
            >
            <h5 class="pt-4 font-weight-normal">魅族 Type-C 2.0数据线</h5>
            <p class="mb-0 font999">5A大电流充电 高速传输</p>
            <p class="price mb-0 pb-3">
              ￥49
              <del>￥59</del>
            </p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="text-center bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/1467363452-36956.png"
              class="w-75 mx-auto paddingT-2d1"
            >
            <h5 class="pt-4 font-weight-normal">魅族 Micro USB金属数据线</h5>
            <p class="mb-0 font999">耐用 才好用</p>
            <p class="price mb-0 pb-3">￥29</p>
          </a>
        </div>
      </div>
      <!-- 第三行-->
      <div class="row">
        <!-- 大图格子-->
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="text-white text-center big-img-6">
            <h4 class="font-weight-bold">魅族无线充电器</h4>
            <p class="mb-0">10W快速充电 无线即放即充</p>
            <p class="price mb-0 pb-3 font-weight-bold price_yellow">
              ￥79
              <del>￥99</del>
            </p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="text-center bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/CnQOjVef_HaAaD-bAAHXId4TWtA165.png"
              class="w-75 mx-auto paddingT-2d1"
            >
            <h5 class="pt-4 font-weight-normal">魅族 Type-C 金属数据线</h5>
            <p class="mb-0 font999">支持2A快速充电 耐用又放心</p>
            <p class="price mb-0 pb-3">￥39</p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="text-center bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/Cgbj0Vv8upiAbtRBAAcE-otAJt8537.png"
              class="w-75 mx-auto paddingT-2d1"
            >
            <h5 class="pt-4 font-weight-normal">魅族 X8 亲肤保护壳</h5>
            <p class="mb-0 font999">轻盈亲近 薄若无形</p>
            <p class="price mb-0 pb-3">￥29</p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="text-center bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/Cgbj0Vv8um2AVBoyAAdHMP5_gzM044.png"
              class="w-75 mx-auto paddingT-2d1"
            >
            <h5 class="pt-4 font-weight-normal">魅族 Note8 亲肤保护壳</h5>
            <p class="mb-0 font999">轻盈亲近 薄若无形</p>
            <p class="price mb-0 pb-3">￥29</p>
          </a>
        </div>
      </div>
    </section>
    <!--生活周边-层标题-->
    <div class="floorTitle">
      <h2 class="text-center mt-5 mb-3">生活周边</h2>
      <a href="javascript:;" class="commodityFloor"></a>
    </div>
    <!--生活周边-层主体-->
    <section class="my-w100 floorBody">
      <!-- 第一行-->
      <div class="row">
        <!-- 大图格子-->
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="text-white text-center big-img-7">
            <h4 class="font-weight-bold">魅蓝胸包</h4>
            <p class="mb-0">时尚个性 动无拘束</p>
            <p class="price mb-0 pb-3 font-weight-bold price_green">
              ￥89
              <del>￥119</del>
            </p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="text-center bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/Cgbj0Vqwv3SAKEs9AAeZO9uMlbg447.png"
              class="w-75 mx-auto paddingT-2d1"
            >
            <h5 class="pt-4 font-weight-normal">Everyday 乐游系列 酷MA萌定制版</h5>
            <p class="mb-0 font999">萌友为伴 为出行添点乐趣</p>
            <p class="price mb-0 pb-3">￥599</p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="text-center bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/Cgbj0FkmeZaAYy1oAAGW2D1yGJ8034.png"
              class="w-75 mx-auto paddingT-2d1"
            >
            <h5 class="pt-4 font-weight-normal">魅族缤纷 Mini 自拍杆</h5>
            <p class="mb-0 font999">便捷轻巧</p>
            <p class="price mb-0 pb-3">￥49</p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="text-center bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/Cix_s1gYZWCAc1jqAAGoLQ8h81w741.png"
              class="w-75 mx-auto paddingT-2d1"
            >
            <h5 class="pt-4 font-weight-normal">魅族盒子 一键找回遥控器</h5>
            <p class="mb-0 font999">海量内容 同向美妙</p>
            <p class="price mb-0 pb-3">
              ￥199
              <del>￥399</del>
            </p>
          </a>
        </div>
      </div>
      <!-- 第二行-->
      <div class="row">
        <!-- 大图格子-->
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="text-white text-center big-img-8">
            <h4 class="font-weight-bold">魅蓝 休闲旅行双肩包</h4>
            <p class="mb-0">曲面一体式 多功能隔层 极简与线条之美</p>
            <p class="price mb-0 pb-3 font-weight-bold price_blueGray">￥199</p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="text-center bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/Cgbj0Vmnd4mANqFvAAYQNPMfK1w252.png"
              class="w-75 mx-auto paddingT-2d1"
            >
            <h5 class="pt-4 font-weight-normal">魅蓝数码收纳包</h5>
            <p class="mb-0 font999">随身收纳 安全安心</p>
            <p class="price mb-0 pb-3">￥59</p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="text-center bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/Cgbj0VlZqvaAGb0QAAUD7V55-H8213.png"
              class="w-75 mx-auto paddingT-2d1"
            >
            <h5 class="pt-4 font-weight-normal">魅蓝旅行包</h5>
            <p class="mb-0 font999">轻盈负重 细节开花</p>
            <p class="price mb-0 pb-3">￥269</p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="text-center bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/Cix_s1iW3W2AQAzZAAJUz1tTYF4022.png"
              class="w-75 mx-auto paddingT-2d1"
            >
            <h5 class="pt-4 font-weight-normal">魅族蓝牙自拍杆</h5>
            <p class="mb-0 font999">还给你自由的双手</p>
            <p class="price mb-0 pb-3">￥99</p>
          </a>
        </div>
      </div>
    </section>
    <!--社区热帖-层标题-->
    <div class="floorTitle">
      <h2 class="text-center mt-5 mb-3">社区热帖</h2>
    </div>
    <!--社区热帖-层主体-->
    <section class="my-w100 floorBody">
      <!-- 第一行-->
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/dc6c4a26-479e-40ea-bde2-3c0ed2024d1c.jpg"
              class="w-100"
            >
            <p class="user">
              <img src="http://127.0.0.1:1018/img/index/w100h100.jpg" class="portrait">
              <span class="username">hooyeah</span>
            </p>
            <p class="comment">魅族 Note9 邀请函 JK 服妹子出镜,谁才是最美游戏姬?</p>
            <p class="category mt-3">魅族 Note9</p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/a6ced8bc-c933-43eb-b086-0dad644aa08f.jpg"
              class="w-100"
            >
            <p class="user">
              <img src="http://127.0.0.1:1018/img/index/w100h100 (1).jpg" class="portrait">
              <span class="username">xrx3p</span>
            </p>
            <p class="comment">摄影离不开适当的后期, 好在如今你可以在魅族手机上轻松完成操作。</p>
            <p class="category mt-3">摄影技巧</p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/1bac33ce-9307-4e7a-85d2-3d38beff2fd5.jpg"
              class="w-100"
            >
            <p class="user">
              <img src="http://127.0.0.1:1018/img/index/w100h100 (2).jpg" class="portrait">
              <span class="username">小墨灰</span>
            </p>
            <p class="comment">工作和学习的沟通中总离不开邮件, 而Flyme邮箱的出色体验为我们带来的不只是生产力。</p>
            <p class="category pt-1">功能解析</p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/11ff6461-0bf0-4718-ac8c-b513d44e55b2.jpg"
              class="w-100"
            >
            <p class="user">
              <img src="http://127.0.0.1:1018/img/index/w100h100 (3).jpg" class="portrait">
              <span class="username">Keicy520</span>
            </p>
            <p class="comment">妙用Flyme分身, 做工作和生活的&nbsp;&nbsp;&nbsp; 「两面派」。</p>
            <p class="category mt-3">魅族 Note9</p>
          </a>
        </div>
      </div>
      <!-- 第二行-->
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/103175b7-33ea-4974-abd4-dabe7c15fa6f.jpg"
              class="w-100"
            >
            <p class="user">
              <img src="http://127.0.0.1:1018/img/index/w100h100 (4).jpg" class="portrait">
              <span class="username">步惊云</span>
            </p>
            <p class="comment">这款匠心精神打造的十五周年旗舰机，再不下手就要后悔啦~</p>
            <p class="category mt-3">魅族 15</p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/7d4f1678-b9a2-4ebf-99b2-bac0a333b288.jpg"
              class="w-100"
            >
            <p class="user">
              <img src="http://127.0.0.1:1018/img/index/w100h100 (5).jpg" class="portrait">
              <span class="username">郑金龙</span>
            </p>
            <p class="comment">千元最强性能手机登场，高通骁龙 710 次旗舰级处理器加持，玩王者荣耀 Vulkan 模式请认准魅族 X8。</p>
            <p class="category pt-1">魅族 X8</p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/1c303ede-134e-4e4c-ba54-0cf4adf05dc6.jpg"
              class="w-100"
            >
            <p class="user">
              <img src="http://127.0.0.1:1018/img/index/w100h100 (6).jpg" class="portrait">
              <span class="username">屌丝扮海绵</span>
            </p>
            <p class="comment">“窗含西岭千秋雪” 魅族 16th 用旗舰双摄带你领略诗句中的美景。</p>
            <p class="category mt-3">魅族 16th</p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/5574c92b-cdfd-440e-b964-615acde85648.jpg"
              class="w-100"
            >
            <p class="user">
              <img src="http://127.0.0.1:1018/img/index/w100h100 (7).jpg" class="portrait">
              <span class="username">醉刘的摄影狮</span>
            </p>
            <p class="comment">准旗舰游戏拍照手机魅族 X8，不止有实力，还有最美刘海屏！</p>
            <p class="category mt-3">魅族 X8</p>
          </a>
        </div>
      </div>
    </section>
    <!--Flyme-层标题-->
    <div class="floorTitle">
      <h2 class="text-center mt-5 mb-3">Flyme</h2>
    </div>
    <!--Flyme-层主体-->
    <section class="my-w100 floorBody flyme">
      <!-- 第一行-->
      <div class="row">
        <div class="col-lg-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/e96845c4-e2e5-411c-bfbb-23adfc9253a0.png"
              class="w-100"
            >
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/ff08fb55-b18d-4ac4-8f9f-6e59a085a615.jpg"
              class="w-100"
            >
            <p class="h5 text-center p-3">管理手机妙招</p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/d9d72a55-f2af-4746-9b17-6845e8494063.jpg"
              class="w-100"
            >
            <p class="h5 text-center p-3">全局夜间模式</p>
          </a>
        </div>
      </div>
      <!-- 第二行-->
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/0a4fe1f2-c68d-4cc0-ae0d-b02c180f1ad1.jpg"
              class="w-100"
            >
            <p class="h5 text-center p-3">性能更出众</p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/522c05cd-8947-4251-ba88-fd781c2c0d9d.jpg"
              class="w-100"
            >
            <p class="h5 text-center p-3">解锁真的快</p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/3e11cc8e-2547-468d-8b32-18f80cefa1c7.jpg"
              class="w-100"
            >
            <p class="h5 text-center p-3">全新魅族社区</p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="javascript:;" class="bg-white">
            <img
              src="http://127.0.0.1:1018/img/index/fc7dc8cb-471b-4304-aba7-e17c55b0026b.jpg"
              class="w-100"
            >
            <p class="h5 text-center p-3">驾驶辅助</p>
          </a>
        </div>
      </div>
    </section>
    <!--精彩视频-层标题-->
    <div class="floorTitle">
      <h2 class="text-center mt-5 mb-3">精彩视频</h2>
    </div>
    <!--精彩视频-层主体-->
    <section class="my-w100 floorBody flyme">
      <!-- 第一行-->
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="img/video/note9-products.mp4" class="bg-white">
            <div class="myVideo">
              <img
                src="http://127.0.0.1:1018/img/index/c03cf33a-0dbf-438f-8b5f-6d5fb929f700.jpg"
                class="w-100 h-100"
              >
              <img src="http://127.0.0.1:1018/img/index/icon-video-player_36c4d32.png" class="play">
            </div>
            <p class="h5 text-center p-3">吃鸡不卡，拍她更美：魅族 Note9</p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="img/video/Note8.mp4" class="bg-white">
            <div class="myVideo">
              <img
                src="http://127.0.0.1:1018/img/index/66a6a875-bc3e-4ee7-aacd-b5401c0524b0.jpg"
                class="w-100 h-100"
              >
              <img src="http://127.0.0.1:1018/img/index/icon-video-player_36c4d32.png" class="play">
            </div>
            <p class="h5 text-center p-3">国民拍照手机：魅族 Note8</p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="img/video/pc-16X_1.mp4" class="bg-white">
            <div class="myVideo">
              <img
                src="http://127.0.0.1:1018/img/index/e3abac8f-dd5e-4c21-83a9-7dc71a3c5684.jpg"
                class="w-100 h-100"
              >
              <img src="http://127.0.0.1:1018/img/index/icon-video-player_36c4d32.png" class="play">
            </div>
            <p class="h5 text-center p-3">轻奢旗舰：魅族 16 X</p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="img/video/pc-X8_1.mp4" class="bg-white">
            <div class="myVideo">
              <img
                src="http://127.0.0.1:1018/img/index/04662fc0-faa5-44e1-8711-6df03d4f7ce2.jpg"
                class="w-100 h-100"
              >
              <img src="http://127.0.0.1:1018/img/index/icon-video-player_36c4d32.png" class="play">
            </div>
            <p class="h5 text-center p-3">准旗舰游戏拍照手机：魅族 X8</p>
          </a>
        </div>
      </div>
      <!-- 第二行-->
      <div class="row mb-5">
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="img/video/Flyme7_896X512_2.mp4" class="bg-white">
            <div class="myVideo">
              <img
                src="http://127.0.0.1:1018/img/index/45e511b0-51ff-46a9-93ed-83b2ec522d24.jpg"
                class="w-100 h-100"
              >
              <img src="http://127.0.0.1:1018/img/index/icon-video-player_36c4d32.png" class="play">
            </div>
            <p class="h5 text-center p-3">Flyme 7</p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="img/video/FamilySafe_1.mp4" class="bg-white">
            <div class="myVideo">
              <img
                src="http://127.0.0.1:1018/img/index/3b75dc9f-7af7-4104-94fa-a384252ef78c.jpg"
                class="w-100 h-100"
              >
              <img src="http://127.0.0.1:1018/img/index/icon-video-player_36c4d32.png" class="play">
            </div>
            <p class="h5 text-center p-3">安全家庭</p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="img/video/CityofSky_2.mp4" class="bg-white">
            <div class="myVideo">
              <img
                src="http://127.0.0.1:1018/img/index/05560a91-cabe-48c5-9bd9-c8dd52a2ecb7.jpg"
                class="w-100 h-100"
              >
              <img src="http://127.0.0.1:1018/img/index/icon-video-player_36c4d32.png" class="play">
            </div>
            <p class="h5 text-center p-3">魅族互娱 MGC 探险嘉年华</p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0">
          <a href="img/video/Game1024.mp4" class="bg-white">
            <div class="myVideo">
              <img
                src="http://127.0.0.1:1018/img/index/86e36692-1cdb-4906-a5df-7d8bcafe9ebe.jpg"
                class="w-100 h-100"
              >
              <img src="http://127.0.0.1:1018/img/index/icon-video-player_36c4d32.png" class="play">
            </div>
            <p class="h5 text-center p-3">魅族 X8 游戏性能测试</p>
          </a>
        </div>
      </div>
    </section>
    <!--网页底部-->
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from "@/components/header";
import myFooter from "@/components/footer";
export default {
  data() {
    return {
      big: [],
      small: []
    };
  },
  created() {
    this.axios.get("http://127.0.0.1:1018/product/getlist").then(res => {
      var list = res.data.data;
      list.forEach((elem, i) => {
        if (i < 2) this.big.push(elem);
        else this.small.push(elem);
      });
    });
    document.onkeyup = function(e) {
      if (e.keyCode == 98) {
        document.onkeyup = function(e) {
          if (e.keyCode == 96) {
            document.onkeyup = function(e) {
              if (e.keyCode == 100) {
                document.onkeyup = function(e) {
                  if (e.keyCode == 104) {
                    location.href = "http://www.codeboy.com/pro/yx2048/";
                  }
                };
              }
            };
          }
        };
      }
    };
  },
  components: { myHeader, myFooter }
};
</script>

<style scoped>
/* 设置头部导航栏a标签字体颜色 */
header /deep/ .navbar-nav > .nav-item > .nav-link {
  color: #fff;
}

header /deep/ .container-fluid:hover .navbar-nav > .nav-item > .nav-link {
  color: #333;
}

header > .container-fluid {
  position: absolute;
  z-index: 101;
  /* 设置引入头部的背景为透明 */
  background: transparent;
}
header > .container-fluid:hover {
  background: #fff;
  transition-duration: 0.35s;
}
/*轮播图样式*/
.carousel-item {
  text-align: center;
  overflow: hidden;
}
.carousel-item {
  width: 100%;
  height: 48.1rem;
  background: no-repeat center 0;
}
.carousel-item:first-child {
  background-image: url(http://127.1:1018/img/header/0ebaac42-c73f-4c23-8931-d6fa582d506c.jpg);
}
.carousel-item:nth-child(2) {
  background-image: url(http://127.1:1018/img/header/d9719410-f33a-45a5-9452-912aaa235353.jpg);
}
.carousel-item:nth-child(3) {
  background-image: url(http://127.1:1018/img/header/08e3ea71-d225-4c80-bcef-9af70bd8a72e.jpg);
}
.carousel-item:nth-child(4) {
  background-image: url(http://127.1:1018/img/header/60f8c8b1-4e38-4dcf-85f4-6088f6f3b5ca.jpg);
}
.carousel-item:nth-child(5) {
  background-image: url(http://127.1:1018/img/header/eed7e6a8-9553-4053-b77f-5e09d51988b8.jpg);
}
.carousel-item:nth-child(6) {
  background-image: url(http://127.1:1018/img/header/6319e923-b33e-4c13-b9b1-0a2f95930df6.jpg);
}
.carousel-item:nth-child(7) {
  background-image: url(http://127.1:1018/img/header/afff3cb7-3b9f-4f20-a287-3196d4f7ddeb.jpg);
}
/*轮播图箭头样式初始化*/
.carousel-control-prev,
.carousel-control-next {
  height: 20%;
  width: 3%;
  top: 40%;
  border-radius: 0.2rem;
  background: rgba(0, 0, 0, 0.2);
  margin: 0 0.2rem;
}
/*轮播指示器样式初始化*/
.carousel-indicators li {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: #fff;
  margin-left: 0.48rem;
  margin-right: 0.48rem;
}
.carousel-indicators .active {
  width: 0.8rem;
  height: 0.8rem;
  margin-top: -0.15rem;
  background: transparent;
  border: 1px solid #fff;
}
/*图片样式*/
section > ul > li > a > img {
  height: 9.3rem;
}
section > ul > li > a > p:nth-child(2) {
  color: #333;
  margin-bottom: 0;
}
section > ul > li > a > p:nth-child(3) {
  color: #999;
  margin-bottom: 0;
}
section > ul > li > a:hover {
  opacity: 0.9;
}
/*楼层标题样式*/
.floorTitle > h2 {
  color: #555;
}
.floorTitle > a {
  display: block;
  height: 32.15rem;
  background: no-repeat center;
}
.floorTitle > a:hover {
  opacity: 0.9;
}
/*魅族手机层标题背景图片*/
.floorTitle > .phoneFloor {
  background-image: url(http://127.1:1018/img/index/Cgbj0FxmbimAfNChAAOMaG6s828938.jpg);
}
/*魅族耳机层标题背景图片*/
.floorTitle > .earphoneFloor {
  background-image: url(http://127.1:1018/img/index/89d0ea78-27bd-4e9d-8a50-db02395d7ee4.jpg);
}
/*智能配件层标题背景图片*/
.floorTitle > .fittingsFloor {
  background-image: url(http://127.1:1018/img/index/c67264b3-38d7-4b57-af1c-5f061c70db0e.jpg);
}
/*生活周边层标题背景图片*/
.floorTitle > .commodityFloor {
  background-image: url(http://127.1:1018/img/index/2fd834ce-9b52-4c49-9e3f-9401dd308fe0.jpg);
}
/*楼层主体样式*/
.tagRed {
  top: 2rem;
  left: 2rem;
  position: absolute;
  background-image: linear-gradient(120deg, #ff3149, #ff64a6);
}
.tagYellow {
  top: 2rem;
  left: 2rem;
  position: absolute;
  background-image: linear-gradient(120deg, #ff910e, #ffd037);
}
.tagBlue {
  top: 2rem;
  left: 2rem;
  position: absolute;
  background-image: linear-gradient(120deg, #2e74f6, #56bdf9);
}
.productBig {
  height: 43.5rem;
}
.floorBody .row a {
  position: relative;
  display: block;
  color: #333;
  height: 100%;
}
/*响应式固定一行四格格子下a标签高度*/
@media screen and (min-width: 992px) {
  .floorBody .row > .col-lg-3 > a {
    height: 26.78rem;
  }
}

.floorBody .row a > span {
  display: inline-block;
  padding: 1.26rem 0.95rem;
  border-radius: 50%;
  font-size: 1.2rem;
  color: #fff;
}
.floorBody .row a > span.tagYellow {
  padding-left: 0.34rem;
  padding-right: 0.34rem;
}
.paddingT-4 {
  padding-top: 4rem;
}
.paddingT-2d1 {
  padding-top: 2.1rem;
}
/*格子hover样式*/
.floorBody .row a:hover {
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
  opacity: 0.9;
}
/*现价样式*/
.floorBody .price {
  color: #c00;
  font-size: 1.57rem;
}
/*原价样式*/
.floorBody del {
  color: #666;
  font-size: 1rem;
}
/*黄色价格样式*/
.price_yellow {
  color: #fdb843 !important;
}
/*绿色价格样式*/
.price_green {
  color: #45c128 !important;
}
/*蓝灰色价格样式*/
.price_blueGray {
  color: #a1ccfe !important;
}
.floorBody .row > [class^="col-"] {
  margin-top: 0.7rem;
}
/*楼层大图格子样式*/
a[class*="big-img"] {
  background: no-repeat center;
  background-size: cover;
  padding-top: 19.52rem;
}
a[class*="big-img"] > .price {
  color: #00fefb;
}
a[class*="big-img"] > .price > del {
  color: #fff;
}
/*楼层大图分开设置*/
/*魅族声学3图*/
a.big-img-1 {
  background-image: url(http://127.1:1018/img/index/4a466aec-1717-48b5-a0bd-7b921ad2a338.jpg);
}
a.big-img-2 {
  background-image: url(http://127.1:1018/img/index/ea900393-0119-4f34-87c1-0770a22a84a1.jpg);
}
a.big-img-3 {
  background-image: url(http://127.1:1018/img/index/e786c416-5129-495a-b7fb-d2ca90da6e74.jpg);
}
/*智能配件3图*/
a.big-img-4 {
  background-image: url(http://127.1:1018/img/index/01782af6-5c38-4f95-b2aa-0e0e680ad054.png);
}
a.big-img-5 {
  background-image: url(http://127.1:1018/img/index/5370aa79-9b77-4b43-b37b-1dace18d4efa.jpg);
}
a.big-img-6 {
  background-image: url(http://127.1:1018/img/index/c616d3eb-874d-4ff8-944c-af9ac3e65c68.jpg);
}
/*生活周边2图*/
a.big-img-7 {
  background-image: url(http://127.1:1018/img/index/011c8745-9eb9-47b7-b6b1-97c98f7dcdf0.jpg);
}
a.big-img-8 {
  background-image: url(http://127.1:1018/img/index/fdf15a13-8aa1-45eb-8713-44e20b8f18ed.jpg);
}
/*社区热帖层*/
.user,
.comment,
.category {
  margin-bottom: 0;
  padding: 0.8rem 1rem;
}
.floorBody .portrait {
  width: 2.7rem;
  height: 2.7rem;
  border-radius: 50%;
  margin-right: 1.2rem;
}
.floorBody .username {
  color: #515151;
}
.floorBody .comment {
  font: 1.14rem Helvetica;
}
.floorBody .category {
  color: #999;
}
/*Flyme层*/
.floorBody.flyme .row a {
  overflow: hidden;
}
/*响应式固定flyme层a标签高度*/
@media screen and (min-width: 992px) {
  .floorBody.flyme .row a {
    height: 17.5rem;
  }
}
/*精彩视频*/
.myVideo {
  height: 78%;
  position: relative;
}
.play {
  position: absolute;
  right: 5%;
  bottom: 10%;
  width: 10%;
  opacity: 0.3;
}
.play:hover {
  transition: 0.8s linear;
  transform: rotate(360deg) scale(1.2);
  opacity: 0.8;
}
</style>
