<template>
  <div class="home">
    <search></search>
    <swiper
      indicator-dots
      autoplay
      circular
      indicator-color="rgba(255, 255, 255, .3)"
      indicator-active-color="#fff"
      class="swiper-img"
    >
      <block v-for="(item,index) in imgUrl" :key="index">
        <swiper-item>
          <image :src="item.image_src" class="slide-image" />
        </swiper-item>
      </block>
    </swiper>
    <!-- 分类结构 -->
    <div class="menu">
      <div class="menu-img" v-for="(item,index) in menus" :key="index">
        <img :src="item.image_src" alt="">
      </div>
    </div>
    <!-- 楼层结构 -->
    <div class="floor">
    <div class="floorItem" v-for="(itemFirst,index2) in floorData" :key="index2">
      <div class="floortitle">
        <image :src="itemFirst.floor_title.image_src" mode="aspectFit"></image>
      </div>
      <div class="product-list">
        <div class="listLeft">
          <image :src="itemFirst.product_list[0].image_src" alt="" mode="aspectFit"></image>
        </div>
        <div  class="listRight">
          <image v-for="(item,subIndex) in itemFirst.product_list" 
          :key="subIndex"
          v-show="subIndex != 0"
          :src="item.image_src"  mode="scaleToFill"></image>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import request from '@/utils/request'
import search from '@/components/Search'
export default {
  data () {
    return {
      imgUrl: [],
      menus:[],
      floorData:[]
    }
  },
  components: {
    search
  },
  mounted () {
    let that = this
    // wx.request({
    //   url: 'https://itjustfun.cn/api/public/v1/home/swiperdata', 
    //   success (res) {
    //     // console.log(res.data)
    //     that.imgUrl = res.data.data
    //   }
    // });
    // // 分类数据
    // wx.request({
    //   url: 'https://itjustfun.cn/api/public/v1/home/catitems',
    //   success: (res)=> {
    //     console.log(res.data);
    //     this.menus = res.data.data
    //   }
    // })
    // 轮播图
    request("https://www.zhengzhicheng.cn/api/public/v1/home/swiperdata").then(res => {
      this.imgUrl = res.data.message
    });
    // 分类数据
    request("https://www.zhengzhicheng.cn/api/public/v1/home/catitems").then(res => {
      this.menus = res.data.message
    });
    // 楼层数据
    request("https://www.zhengzhicheng.cn/api/public/v1/home/floordata").then(res => {
      // console.log(res.data.data);
      this.floorData = res.data.message
      console.log(this.floorData);
    })
  }
}
</script>
<style lang="scss">
.swiper-img {
  height: 340rpx;
}
.slide-image {
  width: 100%;
  height: 100%;
}
.menu{
  display: flex;
  justify-content: space-around;
  padding: 24rpx;
}
.menu-img img{
  width: 128rpx;
  height: 128rpx;
}
.floor {
  image{
      width: 100%;
      height: 100%;
  }
  .floorItem{
    padding: 0 16rpx;
  }
  .floortitle{
    background-color: #f4f4f4;
    margin: 5rpx 0;
    image{
      width: 100%;
      height: 88rpx;
    }
  }
  .product-list{
    display: flex;
    width: 100%;
    .listLeft{
      width: 30%;
      height: 366rpx;
      margin-right: 10rpx;
    }
    .listRight{
      flex: 1;
      height: 366rpx;
      image{
        float: left;
        width: 240rpx;
        height: 178rpx;
      }
      image:nth-child(odd){
        margin-left: 10rpx;
      }
    }
}
}

</style>

