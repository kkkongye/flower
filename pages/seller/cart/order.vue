<template>
  <view class="container">
    <!-- 页面标题 -->
    <view class="custom-header">
      <view class="back-btn" @click="goToCart">
        <image class="back-icon" src="/static/menu-icons/arrow-left.png"></image>
      </view>
      <view class="title">订单详情</view>
      <view class="placeholder"></view>
    </view>
    
    <!-- 地址信息 -->
    <view class="address-card">
      <view class="address-title">请确认地址</view>
      <view class="address-content">
        <view class="address-user">
          <text>什么东西</text>
          <text>12345678910</text>
        </view>
        <view class="address-detail">
          这是什么乱七八糟不知道什么东西街道不认识这是哪里至是这里吗不太认识那就这吧
        </view>
        <view class="address-arrow">></view>
      </view>
    </view>
    
    <!-- 商品信息 -->
    <view class="order-items">
      <view class="order-item" v-for="(item, index) in orderItems" :key="index">
        <image class="item-image" :src="item.image" mode="aspectFill"></image>
        <view class="item-details">
          <view class="item-name">{{ item.name }}</view>
          <view class="item-price-row">
            <view class="item-price">
              <text class="price">¥{{ item.price }}</text>
              <text class="unit">/{{ item.unit }}</text>
            </view>
            <view class="item-quantity">x{{ item.quantity }}</view>
          </view>
        </view>
      </view>
      
      <!-- 价格信息 -->
      <view class="price-info">
        <view class="price-row">
          <text>商品合计</text>
          <text>{{ totalPrice }}</text>
        </view>
        <view class="price-row">
          <text>邮费</text>
          <text>包邮</text>
        </view>
      </view>
    </view>
    
    <!-- 悬浮按钮 -->
    <view class="float-buttons">
      <view class="float-button home" @click="goToHome">
        <image class="float-icon" src="/static/icon/AIGC.png"></image>
      </view>
      <view class="float-button kefu" @click="goToServiceChat">
        <image class="float-icon" src="/static/menu-icons/kefu.png"></image>
      </view>
      <view class="float-button cart" @click="goToCart">
        <image class="float-icon" src="/static/menu-icons/shop.png"></image>
      </view>
    </view>
    
    <!-- 结算栏 -->
    <view class="checkout-bar">
      <view class="total-info">
        <view class="total-quantity">共 {{ totalQuantity }} 件</view>
        <view class="total-price">
          合计 <text class="price">¥ {{ totalPrice }}</text>
        </view>
      </view>
      <view class="checkout-btn" :class="{ disabled: totalPrice <= 0 }" @click="pay">立即支付</view>
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
      orderItems: []
    }
  },
  onLoad(options) {
    if (options.items) {
      try {
        this.orderItems = JSON.parse(decodeURIComponent(options.items));
      } catch (e) {
        console.error('解析商品数据失败', e);
      }
    } else {
      this.orderItems = [
        {
          id: 1,
          name: '月季盆盆粉',
          price: 9.9,
          unit: '3支',
          quantity: 1,
          image: '/static/flower/flower5.jpg'
        }
      ];
    }
  },
  computed: {
    totalQuantity() {
      return this.orderItems.reduce((total, item) => total + item.quantity, 0);
    },
    totalPrice() {
      return this.orderItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(1);
    },
    canPay() {
      return parseFloat(this.totalPrice) > 0;
    }
  },
  methods: {
    pay() {
      if (parseFloat(this.totalPrice) <= 0) {
        uni.showToast({
          title: '订单金额不能为0',
          icon: 'none'
        });
        return;
      }
      
      uni.showToast({
        title: '支付功能开发中',
        icon: 'none'
      });
    },
    goToCart() {
      uni.navigateTo({
        url: '/pages/seller/cart/cart'
      })
    },
    goBack() {
      uni.navigateBack();
    },
    goToHome() {
      uni.navigateTo({
        url: '/pages/seller/nav/seller'
      })
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
.container {
  min-height: 100vh;
  background-color: #f8f8f8;
  padding-bottom: 140rpx;
  padding-top: 100rpx; /* 为顶部标题留出空间 */
  position: relative;
  background-image: url('/static/bg-pattern.png');
  background-size: cover;
  background-repeat: no-repeat;
}

/* 地址卡片 */
.address-card {
  margin: 20rpx;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 16rpx;
  padding: 20rpx;
  position: relative;
}

.address-title {
  font-size: 28rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 16rpx;
}

.address-content {
  position: relative;
  padding-right: 40rpx;
}

.address-user {
  display: flex;
  justify-content: space-between;
  font-size: 26rpx;
  margin-bottom: 10rpx;
}

.address-detail {
  font-size: 26rpx;
  color: #666;
  line-height: 1.4;
}

.address-arrow {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 36rpx;
  color: #aaa;
}

/* 订单商品 */
.order-items {
  margin: 20rpx;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 16rpx;
  padding: 20rpx;
}

.order-item {
  display: flex;
  padding-bottom: 20rpx;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 20rpx;
}

.item-image {
  width: 120rpx;
  height: 120rpx;
  border-radius: 10rpx;
}

.item-details {
  margin-left: 20rpx;
  flex: 1;
}

.item-name {
  font-size: 28rpx;
  color: #333;
  margin-bottom: 10rpx;
}

.item-price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item-price {
  display: flex;
  align-items: baseline;
}

.price {
  font-size: 32rpx;
  color: #333;
  font-weight: bold;
}

.unit {
  font-size: 24rpx;
  color: #999;
  margin-left: 5rpx;
}

.item-quantity {
  font-size: 26rpx;
  color: #999;
}

/* 价格信息 */
.price-info {
  padding-top: 10rpx;
}

.price-row {
  display: flex;
  justify-content: space-between;
  font-size: 26rpx;
  color: #666;
  margin-bottom: 10rpx;
}

/* 结算栏 */
.checkout-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100rpx;
  background-color: rgba(255, 255, 255, 0.95);
  display: flex;
  align-items: center;
  padding: 0 20rpx;
}

.total-info {
  flex: 1;
}

.total-quantity {
  font-size: 26rpx;
  color: #666;
  margin-bottom: 4rpx;
}

.total-price {
  font-size: 28rpx;
  color: #333;
  display: flex;
  align-items: baseline;
}

.checkout-btn {
  width: 200rpx;
  height: 70rpx;
  background-color: #a7c4a0;
  color: #fff;
  border-radius: 35rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30rpx;
}

.checkout-btn.disabled {
  background-color: #ccc;
  color: #fff;
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

/* 自定义头部样式 */
.custom-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 88rpx;
  background-color: rgba(255, 255, 255, 0.95);
  display: flex;
  align-items: center;
  padding: 0 20rpx;
  z-index: 100;
  box-shadow: 0 2rpx 6rpx rgba(0,0,0,0.05);
}

.back-btn {
  width: 60rpx;
  height: 60rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}

.back-icon {
  width: 40rpx;
  height: 40rpx;
}

.title {
  flex: 1;
  font-size: 32rpx;
  font-weight: bold;
  color: #333;
  text-align: center;
}

.placeholder {
  width: 60rpx;
}
</style> 