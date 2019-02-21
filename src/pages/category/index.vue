<template>
  <div class="category">
     <search></search>
     <div class="cate">
     <view class="cate-left">左边</view>
     <view class="cate-right">右边</view>
     </div>
  </div>
</template>
<script>
import search from '@/components/Search'
export default {
  components: {
    search
  }
}
</script>
<style lang="scss" scoped>
  .cate{
    background-color: pink;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 98rpx;
    display: flex;
    &-left{
      background-color: #ccc;
      width: 200rpx;
      height: 100%;
    }
    &-right{
      flex: 1;
      height: 100%;
      background-color: #999;
    }
  }
</style>


