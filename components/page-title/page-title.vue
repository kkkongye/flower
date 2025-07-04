<template>
  <view class="page-title">
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
</style> 