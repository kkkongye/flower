<template>
  <view class="container">
    <!-- 搜索框 -->
    <view class="search-bar">
      <icon type="search" size="15" color="#07C160" />
      <input type="text" value="花房" disabled />
      <text class="iconfont search-icon">搜索</text>
    </view>
    
    <!-- 花棚列表 -->
    <view class="huapeng-list">
      <view class="huapeng-item">
        <image src="/static/huapeng/huapeng1.png" mode="aspectFill"></image>
        <view class="location">
          <text>杭州市什么西路数字花房</text>
          <text class="distance">0.5km</text>
        </view>
      </view>
      
      <view class="huapeng-item">
        <image src="/static/huapeng/huapeng2.png" mode="aspectFill"></image>
        <view class="location">
          <text>杭州市什么西路数字花房</text>
          <text class="distance">1.4km</text>
        </view>
      </view>
      
      <view class="huapeng-item">
        <image src="/static/huapeng/huapeng3.png" mode="aspectFill"></image>
        <view class="location">
          <text>杭州市什么西路数字花房</text>
          <text class="distance">1.9km</text>
        </view>
      </view>
    </view>
    
    <!-- 底部导航栏 -->
    <view class="tabbar">
      <view class="tab-item active">
        <image class="tab-icon" src="/static/icon/location2.png"></image>
        <text>花棚</text>
      </view>
      <view class="tab-item ai-tab" @click="goToAIGC">
        <view class="ai-circle">
          <image class="tab-icon" src="/static/icon/AIGC.png"></image>
        </view>
        <text>AIGC推荐</text>
      </view>
      <view class="tab-item" @click="goToUser">
        <image class="tab-icon" src="/static/icon/user.png"></image>
        <text>我的</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    goToHome() {
      uni.navigateTo({
        url: '/pages/seller/seller'
      })
    },
    goToAIGC() {
      uni.navigateTo({
        url: '/pages/seller/seller'
      })
    },
    goToUser() {
      uni.navigateTo({
        url: '/pages/seller/user'
      })
    }
  }
}
</script>

<style>
/* 引入图标字体 */
@font-face {
  font-family: "iconfont";
  src: url('https://at.alicdn.com/t/c/font_3965964_i9oe15z84hp.woff2?t=1680144966254') format('woff2');
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 36rpx;
}

.container {
  min-height: 100vh;
  background-color: #f8f8f8;
  padding-bottom: 120rpx;
}

/* 搜索框 */
.search-bar {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 36rpx;
  margin: 20rpx;
  padding: 10rpx 20rpx;
}
.search-bar input {
  flex: 1;
  height: 60rpx;
  margin: 0 10rpx;
}
.search-icon {
  color: #999;
}

/* 花棚列表 */
.huapeng-list {
  padding: 20rpx;
}
.huapeng-item {
  background-color: #fff;
  border-radius: 16rpx;
  margin-bottom: 20rpx;
  overflow: hidden;
}
.huapeng-item image {
  width: 100%;
  height: 340rpx;
  display: block;
}
.location {
  display: flex;
  align-items: center;
  padding: 16rpx;
  font-size: 26rpx;
}
.location-icon {
  width: 28rpx;
  height: 28rpx;
  margin-right: 8rpx;
  display: flex;
  align-items: center;
}
.distance {
  margin-left: auto;
  color: #999;
}

/* 底部导航栏 */
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120rpx;
  background-color: #fff;
  display: flex;
  align-items: center;
  border-top: 1rpx solid #eee;
}
.tab-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24rpx;
  color: #666;
}
.tab-item.active {
  color: #6eb56e;
}
.tab-item text {
  line-height: 1.2;
}
.tab-icon {
  width: 48rpx;
  height: 48rpx;
  margin-bottom: 4rpx;
}
.ai-tab {
  position: relative;
  top: -20rpx;
}
.ai-circle {
  width: 80rpx;
  height: 80rpx;
  background-color: #a7c4a0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ai-circle .tab-icon {
  width: 48rpx;
  height: 48rpx;
  margin: 0;
}
</style> 