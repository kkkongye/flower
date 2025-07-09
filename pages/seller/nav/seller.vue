<template>
  <view class="container">
    <!-- 页面标题 -->
    <page-title title="花卉零售者"></page-title>
    
    <!-- 搜索框 -->
    <view class="search-bar">
      <icon type="search" size="15" color="#07C160" />
      <input type="text" value="玫瑰" disabled />
      <text class="iconfont search-icon">搜索</text>
    </view>
    
    <!-- 智能搭配花材按钮 -->
    <view class="ai-match-btn" @click="goToFlowerMatch">
      <image class="ai-match-icon" src="/static/icon/AIGC.png"></image>
      <text>智能搭配花材</text>
      <text class="ai-match-desc">秒配个性花束</text>
    </view>
    
    <!-- 上次订购 -->
    <view class="section">
      <view class="section-title-wrapper" @click="goToAllProducts">
        <view class="section-title">
          上次订购
          <text class="right-arrow">></text>
        </view>
      </view>
      <scroll-view scroll-x class="scroll-view">
        <view class="flower-list">
          <view class="flower-item" @click="goToDetail('1')">
            <image src="/static/flower/flower6.jpg" mode="aspectFill"></image>
          </view>
          <view class="flower-item" @click="goToDetail('2')">
            <image src="/static/flower/flower.jpg" mode="aspectFill"></image>
          </view>
          <view class="flower-item" @click="goToDetail('3')">
            <image src="/static/flower/flower1.jpg" mode="aspectFill"></image>
          </view>
        </view>
      </scroll-view>
    </view>
    
    <!-- 上次生成推荐 -->
    <view class="section">
      <view class="section-title-wrapper" @click="goToAllProducts">
        <view class="section-title">
          上次生成推荐
          <text class="right-arrow">></text>
        </view>
      </view>
      <scroll-view scroll-x class="scroll-view">
        <view class="flower-list">
          <view class="flower-item" @click="goToDetail('4')">
            <image src="/static/flower/flower4.jpg" mode="aspectFill"></image>
          </view>
          <view class="flower-item" @click="goToDetail('5')">
            <image src="/static/flower/flower3.jpg" mode="aspectFill"></image>
          </view>
          <view class="flower-item" @click="goToDetail('6')">
            <image src="/static/flower/flower5.jpg" mode="aspectFill"></image>
          </view>
        </view>
      </scroll-view>
    </view>

    <!-- 全部 -->
    <view class="section">
      <view class="section-title-wrapper" @click="goToAllProducts">
        <view class="section-title">
          全部
          <text class="right-arrow">></text>
        </view>
      </view>
      <scroll-view scroll-x class="scroll-view">
        <view class="flower-list">
          <view class="flower-item" @click="goToDetail('7')">
            <image src="/static/flower/flower1.jpg" mode="aspectFill"></image>
          </view>
          <view class="flower-item" @click="goToDetail('8')">
            <image src="/static/flower/flower2.jpg" mode="aspectFill"></image>
          </view>
          <view class="flower-item" @click="goToDetail('9')">
            <image src="/static/flower/flower3.jpg" mode="aspectFill"></image>
          </view>
          <view class="flower-item" @click="goToDetail('10')">
            <image src="/static/flower/flower4.jpg" mode="aspectFill"></image>
          </view>
          <view class="flower-item" @click="goToDetail('11')">
            <image src="/static/flower/flower5.jpg" mode="aspectFill"></image>
          </view>
          <view class="flower-item" @click="goToDetail('12')">
            <image src="/static/flower/flower6.jpg" mode="aspectFill"></image>
          </view>
        </view>
      </scroll-view>
    </view>
    
    
    <!-- 今日推荐 -->
    <view class="section">
      <view class="section-title">今日推荐</view>
      <view class="recommend-list">
        <view class="recommend-item" @click="goToDetail('13')">
          <view class="recommend-title">
            礼物指南
            <text class="more">>></text>
          </view>
          <view class="recommend-desc">真心落为心中挚爱</view>
          <image src="/static/flower/flower6.jpg" mode="aspectFill"></image>
        </view>
        <view class="recommend-item" @click="goToDetail('14')">
          <view class="recommend-title">
            节日特供
            <text class="more">>></text>
          </view>
          <view class="recommend-desc">好礼相伴好时节</view>
          <image src="/static/flower/flower4.jpg" mode="aspectFill"></image>
        </view>
      </view>
    </view>
    
    <!-- 悬浮按钮 -->
    <view class="float-buttons">
      <view class="float-button kefu" @click="goToServiceChat">
        <image class="float-icon" src="/static/menu-icons/kefu.png"></image>
      </view>
      <view class="float-button cart" @click="goToCart">
        <image class="float-icon" src="/static/menu-icons/shop.png"></image>
      </view>
    </view>
    
    <!-- 底部导航栏 -->
    <view class="tabbar">
      <view class="tab-item" @click="goToHuapeng">
        <image class="tab-icon" src="/static/icon/location.png"></image>
        <text>花房</text>
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
  data() {
    return {}
  },
  methods: {
    goToFlowerMatch() {
      uni.navigateTo({
        url: '/pages/seller/flower-match'
      })
    },
    goToHuapeng() {
      uni.navigateTo({
        url: '/pages/seller/nav/huapeng'
      })
    },
    goToUser() {
      uni.navigateTo({
        url: '/pages/seller/nav/user'
      })
    },
    goToCart() {
      uni.navigateTo({
        url: '/pages/seller/cart/cart'
      })
    },
    goToAllProducts() {
      console.log('点击了全部商品');
      setTimeout(() => {
        uni.navigateTo({
          url: '/pages/seller/all-products',
          success: function() {
            console.log('导航成功');
          },
          fail: function(error) {
            console.error('导航失败:', error);
          }
        });
      }, 100);
    },
    goToDetail(id) {
      uni.navigateTo({
        url: '/pages/seller/flower-detail?id=' + id
      });
    },
    goToServiceChat() {
      uni.navigateTo({
        url: '/pages/seller/service-chat'
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

/* 智能搭配花材按钮 */
.ai-match-btn {
  display: flex;
  align-items: center;
  background-color: #f0f8f1;
  border: 1px solid #d8e8d9;
  margin: 20rpx;
  padding: 20rpx;
  border-radius: 16rpx;
  position: relative;
}

.ai-match-icon {
  width: 48rpx;
  height: 48rpx;
  margin-right: 20rpx;
}

.ai-match-btn text {
  font-size: 30rpx;
  color: #6eb56e;
  font-weight: bold;
}

.ai-match-desc {
  position: absolute;
  right: 20rpx;
  font-size: 24rpx !important;
  color: #a7c4a0 !important;
  font-weight: normal !important;
}

/* 通用部分样式 */
.section {
  margin: 30rpx 0;
}
.section-title-wrapper {
  padding: 10rpx;
  margin: 0 10rpx 10rpx;
  border-radius: 8rpx;
  background-color: rgba(255,255,255,0.5);
}
.section-title {
  font-size: 32rpx;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.right-arrow {
  color: #999;
  font-size: 26rpx;
  margin-left: 10rpx;
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
  margin-bottom: 20rpx;
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
  height: 180rpx;
  border-radius: 12rpx;
}

/* 悬浮按钮 */
.float-buttons {
  position: fixed;
  bottom: 140rpx;
  right: 20rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.float-button {
  width: 80rpx;
  height: 80rpx;
  background-color: #fff;
  border-radius: 50%;
  margin-bottom: 20rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2rpx 10rpx rgba(0,0,0,0.1);
}
.float-icon {
  width: 48rpx;
  height: 48rpx;
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

/* 添加点击效果 */
.section-title:active {
  opacity: 0.7;
}

/* 添加点击效果 */
.section-title-wrapper:active {
  opacity: 0.7;
  background-color: rgba(255,255,255,0.8);
}

.section:last-child {
  margin-bottom: 0;
}
</style> 