<template>
  <view class="container">
    <view class="header">
      <view class="back-btn" @click="goBack">
        <text class="iconfont">&#xe6a2;</text>
      </view>
      <view class="title">我的地址</view>
      <view class="placeholder"></view>
    </view>
    
    <!-- 地图区域 -->
    <view class="map-container">
      <image src="/static/map.png" mode="widthFix" class="map-image"></image>
      <view class="map-marker">
        <view class="location-name">什么东西花店</view>
        <view class="marker-pin"></view>
      </view>
    </view>
    
    <!-- 选择地址按钮 -->
    <view class="select-address">
      选择具体地址 >
    </view>
    
    <!-- 地址详情 -->
    <view class="address-info">
      <view class="info-item">
        <view class="label">门牌号</view>
        <view class="value">详细地址，例1单元1楼101室</view>
      </view>
      <view class="info-item">
        <view class="label">联系人</view>
        <view class="value">请填写收货人的姓名</view>
      </view>
      <view class="info-item">
        <view class="label">手机号</view>
        <view class="value">请填写收货手机号码</view>
      </view>
    </view>
    
    <!-- 保存按钮 -->
    <view class="save-btn">
      保存地址
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    goBack() {
      uni.navigateBack()
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
  padding-bottom: 40rpx;
}

.header {
  display: flex;
  align-items: center;
  padding: 20rpx;
  background-color: #fff;
  position: relative;
}

.back-btn {
  padding: 10rpx;
}

.title {
  flex: 1;
  font-size: 36rpx;
  font-weight: bold;
  text-align: center;
}

.placeholder {
  width: 40rpx;
}

/* 地图区域 */
.map-container {
  position: relative;
  width: 100%;
  height: 500rpx;
  overflow: hidden;
}
.map-image {
  width: 100%;
}
.map-marker {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.location-name {
  background-color: #fff;
  padding: 8rpx 20rpx;
  border-radius: 8rpx;
  font-size: 28rpx;
  margin-bottom: 10rpx;
  box-shadow: 0 2rpx 6rpx rgba(0,0,0,0.1);
}
.marker-pin {
  width: 40rpx;
  height: 40rpx;
  background-color: #f56c6c;
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  position: relative;
}
.marker-pin:after {
  content: '';
  width: 20rpx;
  height: 20rpx;
  background-color: #fff;
  position: absolute;
  border-radius: 50%;
  top: 10rpx;
  left: 10rpx;
}

/* 选择地址按钮 */
.select-address {
  margin: 20rpx;
  padding: 20rpx;
  background-color: #fff;
  border-radius: 12rpx;
  text-align: center;
  color: #333;
  font-size: 30rpx;
}

/* 地址详情 */
.address-info {
  margin: 20rpx;
  background-color: #fff;
  border-radius: 12rpx;
  overflow: hidden;
}
.info-item {
  display: flex;
  padding: 20rpx;
  border-bottom: 1rpx solid #f0f0f0;
}
.info-item:last-child {
  border-bottom: none;
}
.label {
  width: 140rpx;
  color: #333;
  font-size: 28rpx;
}
.value {
  flex: 1;
  color: #999;
  font-size: 28rpx;
}

/* 保存按钮 */
.save-btn {
  margin: 40rpx 20rpx;
  background-color: #fff;
  color: #333;
  text-align: center;
  padding: 24rpx 0;
  border-radius: 12rpx;
  font-size: 32rpx;
  font-weight: bold;
}
</style> 