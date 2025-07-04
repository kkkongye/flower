<template>
  <view class="container">
    <!-- 页面标题 -->
    <page-title title="个人中心"></page-title>
    
    <!-- 个人信息 -->
    <view class="user-info">
      <image class="avatar" src="/static/init/用户.png"></image>
      <view class="user-detail">
        <view class="username">用户名称</view>
        <view class="user-id">ID: 12345678</view>
      </view>
      <view class="edit-btn">编辑</view>
    </view>
    
    <!-- 功能列表 -->
    <view class="function-list">
      <view class="function-group">
        <view class="function-item">
          <view class="icon-wrapper">
            <image class="menu-icon" src="/static/menu-icons/greenhouse.png"></image>
          </view>
          <text class="function-name">花房管理</text>
          <image class="arrow-icon" src="/static/menu-icons/arrow-right.png"></image>
        </view>
        <view class="function-item">
          <view class="icon-wrapper">
            <image class="menu-icon" src="/static/menu-icons/record.png"></image>
          </view>
          <text class="function-name">生产记录</text>
          <image class="arrow-icon" src="/static/menu-icons/arrow-right.png"></image>
        </view>
      </view>
      
      <view class="function-group">
        <view class="function-item">
          <view class="icon-wrapper">
            <image class="menu-icon" src="/static/menu-icons/about.png"></image>
          </view>
          <text class="function-name">帮助中心</text>
          <image class="arrow-icon" src="/static/menu-icons/arrow-right.png"></image>
        </view>
        <view class="function-item">
          <view class="icon-wrapper">
            <image class="menu-icon" src="/static/menu-icons/about.png"></image>
          </view>
          <text class="function-name">关于我们</text>
          <image class="arrow-icon" src="/static/menu-icons/arrow-right.png"></image>
        </view>
        <view class="function-item">
          <view class="icon-wrapper">
            <image class="menu-icon" src="/static/menu-icons/about.png"></image>
          </view>
          <text class="function-name">设置</text>
          <image class="arrow-icon" src="/static/menu-icons/arrow-right.png"></image>
        </view>
      </view>
    </view>

          
    <view class="function-group" @click="goToIndex">
        <view class="function-item">
          <view class="icon-wrapper">
            <image class="menu-icon" src="/static/menu-icons/role.png"></image>
          </view>
          <text class="function-name">切换角色</text>
          <image class="arrow-icon" src="/static/menu-icons/arrow-right.png"></image>
        </view>
    </view>
    
    <!-- 底部导航栏 -->
    <view class="tabbar">
      <view class="tab-item" @click="goToHuapeng">
        <image class="tab-icon" src="/static/icon/location.png"></image>
        <text>花棚</text>
      </view>
      <view class="tab-item ai-tab" @click="goToAIGC">
        <view class="ai-circle">
          <image class="tab-icon" src="/static/icon/AIGC.png"></image>
        </view>
        <text>AIGC推荐</text>
      </view>
      <view class="tab-item active">
        <image class="tab-icon" src="/static/icon/user2.png"></image>
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
    goToIndex() {
      uni.navigateTo({
        url: '/pages/index/index'
      })
    },
    goToAIGC() {
      uni.navigateTo({
        url: '/pages/grower/aigc'
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

/* 头部标题栏 */
.header {
  height: 88rpx;
  background-color: #fff;
  display: flex;
  align-items: center;
  position: relative;
}

.back-icon {
  font-family: "iconfont" !important;
  font-size: 36rpx;
  position: absolute;
  left: 30rpx;
}

.header-title {
  flex: 1;
  text-align: center;
  font-size: 32rpx;
  font-weight: bold;
}

/* 个人信息 */
.user-info {
  display: flex;
  align-items: center;
  padding: 40rpx 30rpx;
  background-color: #fff;
}
.avatar {
  width: 120rpx;
  height: 120rpx;
  border-radius: 50%;
  background-color: #eee;
}
.user-detail {
  flex: 1;
  margin-left: 30rpx;
}
.username {
  font-size: 34rpx;
  font-weight: bold;
  margin-bottom: 10rpx;
}
.user-id {
  font-size: 26rpx;
  color: #999;
}
.edit-btn {
  padding: 10rpx 30rpx;
  background-color: #f5f5f5;
  border-radius: 30rpx;
  font-size: 26rpx;
}

/* 功能列表 */
.function-list {
  margin-top: 20rpx;
}
.function-group {
  background-color: #fff;
  border-radius: 12rpx;
  margin: 20rpx;
  overflow: hidden;
}
.function-item {
  display: flex;
  align-items: center;
  padding: 30rpx;
  border-bottom: 1rpx solid #f5f5f5;
}
.function-item:last-child {
  border-bottom: none;
}

.icon-wrapper {
  width: 40rpx;
  height: 40rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20rpx;
}

.menu-icon {
  width: 40rpx;
  height: 40rpx;
}

.function-name {
  flex: 1;
  font-size: 28rpx;
}

.arrow-icon {
  width: 30rpx;
  height: 30rpx;
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