<template>
  <view class="container">
    <!-- 页面标题 -->
    <view class="custom-header">
      <view class="back-btn" @click="goBack">
        <image class="back-icon" src="/static/menu-icons/arrow-left.png"></image>
      </view>
      <view class="title">购物车</view>
      <view class="placeholder"></view>
    </view>
    
    <!-- 购物车列表 -->
    <view class="cart-list">
      <view class="cart-item" v-for="(item, index) in cartItems" :key="index">
        <view class="checkbox" @click="toggleSelect(item)">
          <view class="checkbox-inner" :class="{ selected: item.selected }"></view>
        </view>
        <view class="item-info">
          <image class="item-image" :src="item.image" mode="aspectFill"></image>
          <view class="item-details">
            <view class="item-name">{{ item.name }}</view>
            <view class="item-price">
              <text class="price">¥{{ item.price }}</text>
              <text class="unit">/{{ item.unit }}</text>
            </view>
          </view>
        </view>
        <view class="item-quantity">
          <view class="quantity-btn minus" @click.stop="decreaseQuantity(item)">
            <text>-</text>
          </view>
          <view class="quantity-number">{{ item.quantity }}</view>
          <view class="quantity-btn plus" @click.stop="increaseQuantity(item)">
            <text>+</text>
          </view>
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
      <view class="float-button cart active">
        <image class="float-icon" src="/static/menu-icons/shop.png"></image>
      </view>
    </view>
    
    <!-- 结算栏 -->
    <view class="checkout-bar">
      <view class="select-all" @click="toggleSelectAll">
        <view class="checkbox">
          <view class="checkbox-inner" :class="{ selected: allSelected }"></view>
        </view>
        <text>全选</text>
      </view>
      <view class="total-info">
        <view class="total-quantity">共 {{ selectedCount }} 件</view>
        <view class="total-price">
          合计 <text class="price">¥ {{ selectedTotal }}</text>
          <text class="desc">(不含邮费)</text>
        </view>
      </view>
      <view class="checkout-btn" @click="goToCheckout">去结算</view>
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
      cartItems: [
        {
          id: 1,
          name: '月季盆盆粉',
          price: 9.9,
          unit: '3支',
          quantity: 1,
          image: '/static/flower/flower5.jpg',
          selected: true
        },
        {
          id: 2,
          name: '向日葵花束',
          price: 15.8,
          unit: '5支',
          quantity: 1,
          image: '/static/flower/flower2.jpg',
          selected: false
        }
      ]
    }
  },
  computed: {
    selectedCount() {
      return this.cartItems.reduce((total, item) => {
        return total + (item.selected ? item.quantity : 0);
      }, 0);
    },
    selectedTotal() {
      return this.cartItems.reduce((total, item) => {
        return total + (item.selected ? item.price * item.quantity : 0);
      }, 0).toFixed(1);
    },
    allSelected() {
      return this.cartItems.length > 0 && this.cartItems.every(item => item.selected);
    }
  },
  methods: {
    toggleSelect(item) {
      item.selected = !item.selected;
    },
    toggleSelectAll() {
      const newState = !this.allSelected;
      this.cartItems.forEach(item => {
        item.selected = newState;
      });
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.showToast('最少购买1件');
      }
    },
    increaseQuantity(item) {
      item.quantity++;
    },
    showToast(title) {
      uni.showToast({
        title: title,
        icon: 'none',
        duration: 1000,
        position: 'bottom'
      });
    },
    goToCheckout() {
      // 检查选中的商品
      const selectedItems = this.cartItems.filter(item => item.selected);
      
      if (selectedItems.length === 0 || parseFloat(this.selectedTotal) <= 0) {
        uni.showToast({
          title: '请先选择商品',
          icon: 'none'
        });
        return;
      }
      const orderItems = JSON.stringify(selectedItems);
      const totalPrice = this.selectedTotal;
      const totalQuantity = this.selectedCount;
      
      uni.navigateTo({
        url: `/pages/seller/order?items=${encodeURIComponent(orderItems)}&totalPrice=${totalPrice}&totalQuantity=${totalQuantity}`
      });
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

/* 购物车列表 */
.cart-list {
  padding: 20rpx;
}

.cart-item {
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 16rpx;
  padding: 20rpx;
  margin-bottom: 20rpx;
}

/* 复选框 */
.checkbox {
  width: 40rpx;
  height: 40rpx;
  border-radius: 50%;
  border: 2rpx solid #ccc;
  margin-right: 20rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}

.checkbox-inner {
  width: 24rpx;
  height: 24rpx;
  border-radius: 50%;
  background-color: transparent;
}

.checkbox-inner.selected {
  background-color: #a7c4a0;
}

.item-info {
  display: flex;
  align-items: center;
  flex: 1;
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
  font-size: 30rpx;
  color: #333;
  margin-bottom: 10rpx;
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
  display: flex;
  align-items: center;
}

.quantity-btn {
  width: 50rpx;
  height: 50rpx;
  background-color: #f0f0f0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
}

.quantity-btn:active {
  opacity: 0.7;
  transform: scale(0.95);
}

.quantity-number {
  margin: 0 20rpx;
  font-size: 30rpx;
  min-width: 40rpx;
  text-align: center;
}

.quantity-btn.plus {
  background-color: #a7c4a0;
  color: #fff;
}

.quantity-btn.minus {
  background-color: #f0f0f0;
  color: #333;
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

.select-all {
  display: flex;
  align-items: center;
  margin-right: 20rpx;
}

.select-all .checkbox {
  margin-right: 10rpx;
}

.select-all text {
  font-size: 26rpx;
  color: #333;
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

.desc {
  font-size: 20rpx;
  color: #999;
  margin-left: 10rpx;
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
</style> 