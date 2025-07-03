<template>
  <view class="container">
    <!-- 搜索框 -->
    <view class="search-bar">
      <text class="iconfont">&#xe65c;</text>
      <input type="text" placeholder="搜索" disabled />
      <text class="iconfont search-icon">&#xe61a;</text>
    </view>
    
    <!-- 上次订购 -->
    <view class="section">
      <view class="section-title">上次订购</view>
      <scroll-view scroll-x class="scroll-view">
        <view class="flower-list">
          <view class="flower-item" v-for="(item, index) in [1, 2, 3]" :key="index">
            <image :src="`/static/flower/flower${index+1}.jpg`" mode="aspectFill"></image>
          </view>
        </view>
      </scroll-view>
    </view>
    
    <!-- 上次生成推荐 -->
    <view class="section">
      <view class="section-title">上次生成推荐</view>
      <scroll-view scroll-x class="scroll-view">
        <view class="flower-list">
          <view class="flower-item" v-for="(item, index) in [4, 5, 6]" :key="index">
            <image :src="`/static/flower/flower${index+1}.jpg`" mode="aspectFill"></image>
          </view>
        </view>
      </scroll-view>
    </view>
    
    <!-- 今日推荐 -->
    <view class="section">
      <view class="section-title">今日推荐</view>
      <view class="recommend-list">
        <view class="recommend-item">
          <view class="recommend-title">
            礼物指南
            <text class="more">>></text>
          </view>
          <view class="recommend-desc">真心落为心中挚爱</view>
          <image src="/static/flower/flower1.jpg" mode="aspectFill"></image>
        </view>
        <view class="recommend-item">
          <view class="recommend-title">
            节日特供
            <text class="more">>></text>
          </view>
          <view class="recommend-desc">好礼相伴好时节</view>
          <image src="/static/flower/flower2.jpg" mode="aspectFill"></image>
        </view>
      </view>
    </view>
    
    <!-- 底部导航栏 -->
    <view class="tabbar">
      <view class="tab-item" @click="goToHuapeng">
        <text class="iconfont">&#xe67e;</text>
        <text>花棚</text>
      </view>
      <view class="tab-item ai-tab active">
        <view class="ai-circle">
          <text class="iconfont">&#xe65b;</text>
        </view>
        <text>AIGC推荐</text>
      </view>
      <view class="tab-item" @click="goToUser">
        <text class="iconfont">&#xe8a0;</text>
        <text>我的</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    goToHuapeng() {
      uni.navigateTo({
        url: '/pages/seller/huapeng'
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

/* 通用部分样式 */
.section {
  margin: 30rpx 0;
}
.section-title {
  font-size: 32rpx;
  font-weight: bold;
  padding: 0 20rpx;
  margin-bottom: 20rpx;
}
.scroll-view {
  white-space: nowrap;
}
.flower-list {
  display: inline-flex;
  padding: 0 10rpx;
}
.flower-item {
  width: 200rpx;
  height: 200rpx;
  margin: 0 10rpx;
  border-radius: 16rpx;
  overflow: hidden;
}
.flower-item image {
  width: 100%;
  height: 100%;
}

/* 今日推荐 */
.recommend-list {
  display: flex;
  padding: 0 20rpx;
}
.recommend-item {
  flex: 1;
  background-color: #fff;
  border-radius: 16rpx;
  margin: 0 10rpx;
  padding: 20rpx;
  position: relative;
}
.recommend-title {
  font-size: 28rpx;
  font-weight: bold;
}
.more {
  color: #999;
  font-size: 24rpx;
  font-weight: normal;
}
.recommend-desc {
  font-size: 24rpx;
  color: #999;
  margin: 6rpx 0 10rpx;
}
.recommend-item image {
  width: 100%;
  height: 200rpx;
  border-radius: 12rpx;
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
  color: #4e8ef7;
}
.tab-item text {
  line-height: 1.2;
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
.ai-circle .iconfont {
  color: #fff;
  font-size: 40rpx;
}
</style> 