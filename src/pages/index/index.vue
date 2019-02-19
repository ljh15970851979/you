<template>
  <div class="home">
    <div class="search">
      <div class="search-input">
        <icon class="search-icon" type="search" size="32rpx"></icon>搜索
      </div>
    </div>
    <swiper
      indicator-dots
      autoplay
    >
      <block v-for="(item,index) in imgUrl" :key="index">
        <swiper-item>
          <image :src="item" class="slide-image" />
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>
<script>
export default {
  data() {
    return{
      imgUrl:[
        "https://img.alicdn.com/tfs/TB1N7tuGY2pK1RjSZFsXXaNlXXa-520-280.jpg",
        "https://aecpm.alicdn.com/simba/img/TB183NQapLM8KJjSZFBSutJHVXa.jpg",
        "https://aecpm.alicdn.com/simba/img/TB1JNHwKFXXXXafXVXXSutbFXXX.jpg"
      ]
    }
  }
}
</script>
<style>
.search {
  background-color: #ff2d4a;
  padding: 20rpx 16rpx;
}
.search-input {
  background-color: #fff;
  height: 60rpx;
  color: #bbb;
  border-radius: 5rpx;
  font-size: 30rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-icon {
  margin-right: 16rpx;
}
.slide-image{
  width: 100%;
}
</style>

