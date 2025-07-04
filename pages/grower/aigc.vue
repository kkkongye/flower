<template>
  <view class="container">
    <!-- 页面标题 -->
    <page-title title="种植建议"></page-title>
    
    <!-- 搜索框 -->
    <view class="search-bar">
      <icon type="search" size="15" color="#07C160" />
      <input type="text" value="种植建议" disabled />
      <text class="iconfont search-icon">搜索</text>
    </view>
    
    <!-- 环境建议 -->
    <view class="section">
      <view class="section-title">环境建议</view>
      <scroll-view scroll-x class="scroll-view">
        <view class="advice-list">
          <view class="advice-item" v-for="(item, index) in [1, 2, 3]" :key="index">
            <image :src="`/static/huapeng/huapeng${index+1}.png`" mode="aspectFill"></image>
            <view class="advice-overlay">
              <text>温湿度调节</text>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
    
    <!-- 种植建议 -->
    <view class="section">
      <view class="section-title">种植建议</view>
      <scroll-view scroll-x class="scroll-view">
        <view class="advice-list">
          <view class="advice-item" v-for="(item, index) in [2, 3, 1]" :key="index">
            <image :src="`/static/huapeng/huapeng${index+1}.png`" mode="aspectFill"></image>
            <view class="advice-overlay">
              <text>养殖周期调整</text>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
    
    <!-- 智能助手 -->
    <view class="section">
      <view class="section-title">智能助手</view>
      <view class="assistant-list">
        <view class="assistant-item">
          <view class="assistant-title">
            病虫害防治
            <text class="more">>></text>
          </view>
          <view class="assistant-desc">专业解决方案</view>
          <image src="/static/huapeng/huapeng1.png" mode="aspectFill"></image>
        </view>
        <view class="assistant-item">
          <view class="assistant-title">
            生长周期管理
            <text class="more">>></text>
          </view>
          <view class="assistant-desc">智能管理系统</view>
          <image src="/static/huapeng/huapeng2.png" mode="aspectFill"></image>
        </view>
      </view>
    </view>
    
    <!-- 底部导航栏 -->
    <view class="tabbar">
      <view class="tab-item" @click="goToHuapeng">
        <image class="tab-icon" src="/static/icon/location.png"></image>
        <text>花棚</text>
      </view>
      <view class="tab-item ai-tab active">
        <view class="ai-circle">
          <image class="tab-icon" src="/static/icon/AIGC2.png"></image>
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
import pageTitle from '@/components/page-title/page-title.vue'

export default {
  components: {
    pageTitle
  },
  methods: {
    goToHuapeng() {
      uni.navigateTo({
        url: '/pages/grower/grower'
      })
    },
    goToUser() {
      uni.navigateTo({
        url: '/pages/grower/user'
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
  padding-top: 100rpx; /* 为固定标题栏预留空间 */
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
.advice-list {
  display: inline-flex;
  padding: 0 10rpx;
}
.advice-item {
  width: 240rpx;
  height: 180rpx;
  margin: 0 10rpx;
  border-radius: 16rpx;
  overflow: hidden;
  position: relative;
}
.advice-item image {
  width: 100%;
  height: 100%;
}
.advice-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 10rpx;
  font-size: 24rpx;
  text-align: center;
}

/* 智能助手 */
.assistant-list {
  display: flex;
  padding: 0 20rpx;
}
.assistant-item {
  flex: 1;
  background-color: #fff;
  border-radius: 16rpx;
  margin: 0 10rpx;
  padding: 20rpx;
  position: relative;
}
.assistant-title {
  font-size: 28rpx;
  font-weight: bold;
}
.more {
  color: #999;
  font-size: 24rpx;
  font-weight: normal;
}
.assistant-desc {
  font-size: 24rpx;
  color: #999;
  margin: 6rpx 0 10rpx;
}
.assistant-item image {
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