<template>
  <div class="category">
     <search></search>
     <div class="cate">
     <scroll-view scroll-y class="cate-left">
       <block v-for="(item,index) in cates" :key="index">
         <view class="cate-left-item" :class="{active : index == tabIndex}" @tap="handleactive(index)">{{item.cat_name}}</view>
       </block>
     </scroll-view>
     <scroll-view scroll-y class="cate-right">
       <block v-for="(subItem,subIndex) in rightData.children" :key="subIndex">
       <view class="floor">
         <view class="floor-head">{{subItem.cat_name}}</view>
         <view class="floor-body">
           <block v-for="(lastItem,lastIndex) in subItem.children" :key="lastIndex">
            <view class="floor-body-item">
              <image :src="lastItem.cat_icon"></image>
              <view>{{lastItem.cat_name}}</view>
            </view>
           </block>
         </view>
       </view>
       </block>
     </scroll-view>
     </div>
  </div>
</template>
<script>
import search from '@/components/Search'
import request from '@/utils/request'
export default {
  data () {
    return {
      cates:[],
      tabIndex:0,
      rightData:[]
    }
  },
  components: {
    search
  },
  mounted () {
    request("https://www.zhengzhicheng.cn/api/public/v1/categories").then(res => {
      console.log(res);
      let {message} = res.data
      this.cates = message
      this.rightData = message[0]
    })
  },
  methods: {
    handleactive(index){
      this.tabIndex = index;
      this.rightData = this.cates[index]
    }
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
      background-color: #f4f4f4;
      width: 200rpx;
      height: 100%;
      &-item{
        line-height: 100rpx;
        text-align: center;
        font-size: 28rpx;
        &.active{
          background-color: #fff;
          color: red;
          position: relative;
          &::before{
            content: "";
            background-color: red;
            position: absolute;
            left: 0;
            width: 7rpx;
            top: 15rpx;
            bottom: 15rpx;
          }
        }
      }
    }
    &-right{
      flex: 1;
      height: 100%;
      background-color: #fff;
            .floor{
        &-head{
          text-align: center;
          font-size:28rpx;
          padding: 20rpx 0;
          &::before,&::after{
            content:'/';
            color:#ccc;
          }
        }
        &-body{
          display: flex;
          flex-wrap: wrap;
          &-item{
            width: 33.33%;
            text-align: center;
            padding: 10rpx 0;
            image{
              width: 120rpx;
              height:90rpx;
            }
            view{
              font-size:24rpx;
            }
          }
        }
      }
    }
  }
</style>


