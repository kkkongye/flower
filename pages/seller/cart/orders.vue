<template>
  <view class="container">
    <!-- 页面标题 -->
    <view class="custom-header">
      <view class="back-btn" @click="goBack">
        <image class="back-icon" src="/static/menu-icons/arrow-left.png"></image>
      </view>
      <view class="title">订单列表</view>
      <view class="placeholder"></view>
    </view>
    
    <!-- 状态选项卡 -->
    <view class="status-tabs">
      <view class="tab-item" :class="{ active: activeTab === 0 }" @click="setActiveTab(0)">
        全部
      </view>
      <view class="tab-item" :class="{ active: activeTab === 1 }" @click="setActiveTab(1)">
        待发货
      </view>
      <view class="tab-item" :class="{ active: activeTab === 2 }" @click="setActiveTab(2)">
        待收货
      </view>
      <view class="tab-item" :class="{ active: activeTab === 3 }" @click="setActiveTab(3)">
        售后
      </view>
    </view>
    
    <!-- 订单列表 -->
    <view class="order-list">
      <view class="order-item" v-for="(order, index) in filteredOrders" :key="index">
        <view class="order-product">
          <image class="product-image" :src="order.product.image" mode="aspectFill"></image>
          <view class="product-info">
            <view class="product-name">{{ order.product.name }}</view>
            <view class="product-status">{{ order.status }}</view>
          </view>
        </view>
        <view class="order-divider"></view>
        <view class="order-footer">
          <view class="order-delivery">
            {{ order.deliveryInfo }}
          </view>
          <view class="order-price">
            ¥{{ order.product.price }}
          </view>
        </view>
      </view>
      
      <!-- 无订单提示 -->
      <view class="no-orders" v-if="filteredOrders.length === 0">
        <text>暂无订单</text>
      </view>
    </view>
    
    <!-- 悬浮按钮 -->
    <view class="float-buttons">
      <view class="float-button kefu">
        <image class="float-icon" src="/static/menu-icons/kefu.png"></image>
      </view>
      <view class="float-button cart" @click="goToCart">
        <image class="float-icon" src="/static/menu-icons/shop.png"></image>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      orders: [
        {
          id: '001',
          product: {
            name: '月季盆盆粉',
            image: '/static/flower/flower5.jpg',
            price: 9.9
          },
          status: '已付款，待发货',
          statusType: 'pending', // 待发货
          deliveryInfo: '预售：14天内发货',
          createdAt: '2023-06-10'
        },
        {
          id: '002',
          product: {
            name: '向日葵花束',
            image: '/static/flower/flower2.jpg',
            price: 15.8
          },
          status: '已发货，待收货',
          statusType: 'shipping', // 待收货
          deliveryInfo: '预计3天内送达',
          createdAt: '2023-06-08'
        },
        {
          id: '003',
          product: {
            name: '玫瑰花礼盒',
            image: '/static/flower/flower3.jpg',
            price: 25.5
          },
          status: '退款处理中',
          statusType: 'aftersale', // 售后
          deliveryInfo: '退款原因：花朵不新鲜',
          createdAt: '2023-06-05'
        }
      ]
    }
  },
  computed: {
    filteredOrders() {
      if (this.activeTab === 0) {
        // 全部订单
        return this.orders;
      } else if (this.activeTab === 1) {
        // 待发货
        return this.orders.filter(order => order.statusType === 'pending');
      } else if (this.activeTab === 2) {
        // 待收货
        return this.orders.filter(order => order.statusType === 'shipping');
      } else if (this.activeTab === 3) {
        // 售后
        return this.orders.filter(order => order.statusType === 'aftersale');
      }
      return [];
    }
  },
  methods: {
    setActiveTab(index) {
      this.activeTab = index;
    },
    goBack() {
      uni.navigateBack();
    },
    goToCart() {
      uni.navigateTo({
        url: '/pages/seller/cart/cart'
      });
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  background-color: #f8f8f8;
  padding-bottom: 140rpx;
  padding-top: 100rpx; /* 为固定标题栏预留空间 */
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

/* 状态选项卡 */
.status-tabs {
  display: flex;
  background-color: rgba(255, 255, 255, 0.9);
  margin: 20rpx;
  border-radius: 16rpx;
  overflow: hidden;
}

.tab-item {
  flex: 1;
  text-align: center;
  padding: 20rpx 0;
  font-size: 28rpx;
  color: #666;
  position: relative;
}

.tab-item.active {
  color: #6eb56e;
  font-weight: bold;
}

.tab-item.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40rpx;
  height: 4rpx;
  background-color: #6eb56e;
}

/* 订单列表 */
.order-list {
  padding: 0 20rpx;
}

.order-item {
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 16rpx;
  padding: 20rpx;
  margin-bottom: 20rpx;
}

.order-product {
  display: flex;
  align-items: center;
}

.product-image {
  width: 120rpx;
  height: 120rpx;
  border-radius: 10rpx;
}

.product-info {
  flex: 1;
  margin-left: 20rpx;
}

.product-name {
  font-size: 28rpx;
  color: #333;
  margin-bottom: 10rpx;
}

.product-status {
  font-size: 24rpx;
  color: #6eb56e;
}

.order-divider {
  height: 1rpx;
  background-color: #f0f0f0;
  margin: 20rpx 0;
}

.order-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 26rpx;
}

.order-delivery {
  color: #666;
}

.order-price {
  font-size: 32rpx;
  font-weight: bold;
  color: #333;
}

/* 无订单提示 */
.no-orders {
  text-align: center;
  padding: 100rpx 0;
  color: #999;
  font-size: 28rpx;
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