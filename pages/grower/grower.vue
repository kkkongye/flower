<template>
  <view class="container">
    <!-- 页面标题 -->
    <page-title title="花卉种植者"></page-title>
    
    <!-- 搜索框 -->
    <view class="search-bar">
      <icon type="search" size="15" color="#07C160" />
      <input type="text" value="搜索" disabled />
      <text class="iconfont search-icon">搜索</text>
    </view>
    
    <!-- 花棚监控 -->
    <view class="monitor-section" @click="goToMonitor">
      <image src="/static/huapeng/huapeng1.png" mode="aspectFill" class="main-image"></image>
      <view class="location-info">
        <text>杭州市什么东西数字花房</text>
      </view>
    </view>
    
    <!-- 实时视频 -->
    <view class="section">
      <view class="section-title">实时视频 (2)</view>
      <scroll-view scroll-x class="scroll-view">
        <view class="video-list">
          <view class="video-item" v-for="(item, index) in [1, 2]" :key="index">
            <image :src="`/static/huapeng/huapeng${index+1}.png`" mode="aspectFill"></image>
            <view class="play-icon">▶</view>
          </view>
        </view>
      </scroll-view>
    </view>
    
    <!-- 异常报警 -->
    <view class="section">
      <view class="section-title">异常报警 (2)</view>
      <view class="alert-list">
        <view class="alert-item" @click="toggleSoilMoisture">
          <view class="alert-icon soil">
            <image src="/static/menu-icons/soil.png"></image>
          </view>
          <view class="alert-info">
            <view class="alert-title">土壤湿度过低</view>
            <view class="alert-value">当前湿度: {{soilMoisture}}%</view>
          </view>
          <view class="settings-icon">⚙️</view>
        </view>
        <view class="slider-container" v-if="showSoilSlider">
          <view class="slider-title">调节土壤湿度</view>
          <slider 
            class="slider" 
            :value="soilMoisture" 
            @change="soilMoistureChange" 
            show-value 
            min="0" 
            max="100"
            activeColor="#b8d4f5"
          />
          <view class="slider-btn" @click="toggleSoilMoisture">确定</view>
        </view>
        
        <view class="alert-item" @click="toggleTemperature">
          <view class="alert-icon temp">
            <image src="/static/menu-icons/temp.png"></image>
          </view>
          <view class="alert-info">
            <view class="alert-title">室内温度过高</view>
            <view class="alert-value">当前温度: {{temperature}}℃</view>
          </view>
          <view class="settings-icon">⚙️</view>
        </view>
        <view class="slider-container" v-if="showTempSlider">
          <view class="slider-title">调节室内温度</view>
          <slider 
            class="slider" 
            :value="temperature" 
            @change="temperatureChange" 
            show-value 
            min="0" 
            max="50"
            activeColor="#f5b8b8"
          />
          <view class="slider-btn" @click="toggleTemperature">确定</view>
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
import pageTitle from '@/components/page-title/page-title.vue'

export default {
  components: {
    pageTitle
  },
  data() {
    return {
      soilMoisture: 34,
      temperature: 35,
      showSoilSlider: false,
      showTempSlider: false
    }
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
    },
    goToMonitor() {
      uni.navigateTo({
        url: '/pages/grower/monitor'
      })
    },
    toggleSoilMoisture() {
      this.showSoilSlider = !this.showSoilSlider
      if (this.showSoilSlider) {
        this.showTempSlider = false
      }
    },
    toggleTemperature() {
      this.showTempSlider = !this.showTempSlider
      if (this.showTempSlider) {
        this.showSoilSlider = false
      }
    },
    soilMoistureChange(e) {
      this.soilMoisture = e.detail.value
    },
    temperatureChange(e) {
      this.temperature = e.detail.value
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

/* 花棚监控 */
.monitor-section {
  margin: 20rpx;
  border-radius: 16rpx;
  overflow: hidden;
  position: relative;
}
.main-image {
  width: 100%;
  height: 380rpx;
  display: block;
}
.location-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 16rpx;
  font-size: 28rpx;
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
.video-list {
  display: inline-flex;
  padding: 0 10rpx;
}
.video-item {
  width: 300rpx;
  height: 200rpx;
  margin: 0 10rpx;
  border-radius: 16rpx;
  overflow: hidden;
  position: relative;
}
.video-item image {
  width: 100%;
  height: 100%;
}
.play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60rpx;
  height: 60rpx;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30rpx;
}

/* 异常报警 */
.alert-list {
  padding: 0 20rpx;
}
.alert-item {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 16rpx;
  padding: 20rpx;
  margin-bottom: 20rpx;
}
.alert-icon {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20rpx;
}
.alert-icon.soil {
  background-color: #b8d4f5;
}
.alert-icon.temp {
  background-color: #f5b8b8;
}
.alert-icon image {
  width: 40rpx;
  height: 40rpx;
}
.alert-info {
  flex: 1;
}
.alert-title {
  font-size: 28rpx;
  font-weight: bold;
  margin-bottom: 8rpx;
}
.alert-value {
  font-size: 24rpx;
  color: #999;
}
.settings-icon {
  font-size: 36rpx;
  color: #999;
}

/* 滑动条样式 */
.slider-container {
  background-color: #fff;
  border-radius: 16rpx;
  padding: 20rpx;
  margin: -10rpx 0 20rpx;
}
.slider-title {
  font-size: 26rpx;
  color: #666;
  margin-bottom: 20rpx;
}
.slider {
  margin: 0 10rpx;
}
.slider-btn {
  margin-top: 20rpx;
  background-color: #6eb56e;
  color: white;
  text-align: center;
  padding: 10rpx 0;
  border-radius: 8rpx;
  font-size: 28rpx;
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