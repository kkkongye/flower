<template>
  <view class="container">
    <!-- 页面标题 -->
    <page-title title="花棚监控" :showBack="true"></page-title>
    
    <!-- 位置信息 -->
    <view class="location-card">
      <view class="location-icon">📍</view>
      <view class="location-text">杭州市什么东西数字花房</view>
    </view>
    
    <!-- 花棚图片网格 -->
    <view class="image-grid">
      <image class="grid-image main" src="/static/huapeng/huapeng1.png" mode="aspectFill"></image>
      <image class="grid-image" src="/static/huapeng/huapeng2.png" mode="aspectFill"></image>
      <image class="grid-image" src="/static/huapeng/huapeng1.png" mode="aspectFill"></image>
      <image class="grid-image" src="/static/huapeng/huapeng2.png" mode="aspectFill"></image>
    </view>
    
    <view class="last-checked">上次查看 7:32</view>
    
    <!-- 数据分析图表 -->
    <view class="chart-card">
      <view class="chart-title">数据分析</view>
      <view class="chart-container">
        <!-- 这里是模拟的图表，实际项目中可以使用echarts等图表库 -->
        <view class="chart-line blue"></view>
        <view class="chart-line yellow"></view>
        <view class="chart-line green"></view>
      </view>
    </view>
    
    <!-- 监测数据 -->
    <view class="data-grid">
      <view class="data-card">
        <view class="data-title">土壤温度</view>
        <view class="data-value red">15.5%</view>
        <view class="data-icon">🌱</view>
      </view>
      
      <view class="data-card">
        <view class="data-title">土壤温度</view>
        <view class="data-value green">30℃</view>
        <view class="data-icon">🌡️</view>
      </view>
      
      <view class="data-card">
        <view class="data-title">光照强度</view>
        <view class="data-value yellow">446 Lux</view>
        <view class="data-icon">☀️</view>
      </view>
      
      <view class="data-card">
        <view class="data-title">环境湿度</view>
        <view class="data-value green">74%</view>
        <view class="data-icon">💧</view>
      </view>
      
      <view class="data-card">
        <view class="data-title">环境温度</view>
        <view class="data-value green">30℃</view>
        <view class="data-icon">🌡️</view>
      </view>
      
      <view class="data-card">
        <view class="data-title">二氧化碳浓度</view>
        <view class="data-value yellow">493 ppm</view>
        <view class="data-icon">☁️</view>
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
import pageTitle from '@/components/page-title/page-title.vue'

export default {
  components: {
    pageTitle
  },
  methods: {
    goToAIGC() {
      uni.navigateTo({
        url: '/pages/grower/aigc'
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
.container {
  min-height: 100vh;
  background-color: #f8f8f8;
  background-image: url('/static/bg-pattern.png');
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 120rpx;
  padding-top: 100rpx;
}

/* 位置信息卡片 */
.location-card {
  margin: 20rpx;
  background-color: #fff;
  border-radius: 16rpx;
  padding: 20rpx;
  display: flex;
  align-items: center;
}

.location-icon {
  font-size: 40rpx;
  margin-right: 10rpx;
}

.location-text {
  font-size: 28rpx;
  color: #333;
}

/* 图片网格 */
.image-grid {
  margin: 20rpx;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 200rpx);
  gap: 10rpx;
  border-radius: 16rpx;
  overflow: hidden;
}

.grid-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.grid-image.main {
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  height: 300rpx;
}

.last-checked {
  text-align: right;
  padding: 0 20rpx;
  color: #999;
  font-size: 24rpx;
  margin-bottom: 20rpx;
}

/* 图表卡片 */
.chart-card {
  margin: 20rpx;
  background-color: #fff;
  border-radius: 16rpx;
  padding: 20rpx;
}

.chart-title {
  font-size: 26rpx;
  color: #666;
  margin-bottom: 20rpx;
}

.chart-container {
  height: 200rpx;
  position: relative;
  display: flex;
  align-items: center;
}

.chart-line {
  height: 4rpx;
  position: absolute;
  left: 0;
  right: 0;
}

.chart-line.blue {
  background: linear-gradient(90deg, transparent, #4285f4, transparent);
  top: 70rpx;
  transform: rotate(-5deg);
}

.chart-line.yellow {
  background: linear-gradient(90deg, transparent, #fbbc04, #fbbc04, transparent);
  top: 100rpx;
  transform: rotate(10deg);
}

.chart-line.green {
  background: linear-gradient(90deg, #34a853, transparent, #34a853);
  top: 130rpx;
  transform: rotate(-8deg);
}

/* 数据网格 */
.data-grid {
  margin: 20rpx;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 20rpx;
}

.data-card {
  background-color: #fff;
  border-radius: 16rpx;
  padding: 20rpx;
  position: relative;
  height: 120rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.data-title {
  font-size: 24rpx;
  color: #666;
  margin-bottom: 10rpx;
}

.data-value {
  font-size: 32rpx;
  font-weight: bold;
}

.data-value.red {
  color: #ea4335;
}

.data-value.green {
  color: #34a853;
}

.data-value.yellow {
  color: #fbbc04;
}

.data-icon {
  position: absolute;
  right: 20rpx;
  top: 50%;
  transform: translateY(-50%);
  font-size: 40rpx;
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