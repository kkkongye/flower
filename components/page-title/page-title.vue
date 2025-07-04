<template>
  <view class="page-title">
    <view v-if="showBack" class="back-btn" @click="goBack">
      <text class="back-icon">←</text>
    </view>
    <text class="title-text">{{ title }}</text>
  </view>
</template>

<script>
export default {
  name: 'page-title',
  props: {
    title: {
      type: String,
      default: ''
    },
    showBack: {
      type: Boolean,
      default: false
    },
    backUrl: {
      type: String,
      default: ''
    }
  },
  methods: {
    goBack() {
      if (this.backUrl) {
        uni.navigateTo({
          url: this.backUrl
        })
      } else {
        uni.navigateBack({
          delta: 1
        })
      }
    }
  }
}
</script>

<style>
.page-title {
  height: 88rpx;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  border-bottom: 1rpx solid #f5f5f5;
}

.title-text {
  font-size: 32rpx;
  font-weight: bold;
  color: #333;
}

.back-btn {
  position: absolute;
  left: 30rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60rpx;
  width: 60rpx;
}

.back-icon {
  font-size: 40rpx;
  color: #333;
}
</style> 