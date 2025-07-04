<template>
  <view class="container">
    <!-- 页面标题 -->
    <page-title title="商品详情" :showBack="true"></page-title>
    
    <!-- 商品图片 -->
    <view class="flower-images">
      <swiper class="swiper" indicator-dots autoplay circular>
        <swiper-item v-for="(img, index) in flowerData.images" :key="index">
          <image :src="img" mode="aspectFill" class="flower-image"></image>
        </swiper-item>
      </swiper>
    </view>
    
    <!-- 商品信息 -->
    <view class="flower-info">
      <view class="flower-name">{{ flowerData.name }}</view>
      <view class="flower-tags">
        <text class="tag">{{ flowerData.category }}</text>
        <text class="tag">{{ flowerData.type }}</text>
      </view>
      <view class="flower-price">
        <text class="price">¥{{ flowerData.price }}</text>
        <text class="original-price">¥{{ flowerData.originalPrice }}</text>
        <text class="sales">已售 {{ flowerData.sales }}+</text>
      </view>
    </view>
    
    <!-- 商品详情 -->
    <view class="flower-detail">
      <view class="section-title">商品详情</view>
      <view class="detail-content">
        <view class="detail-item">
          <text class="item-label">品种：</text>
          <text class="item-value">{{ flowerData.variety }}</text>
        </view>
        <view class="detail-item">
          <text class="item-label">适宜环境：</text>
          <text class="item-value">{{ flowerData.environment }}</text>
        </view>
        <view class="detail-item">
          <text class="item-label">养护难度：</text>
          <text class="item-value">{{ flowerData.difficulty }}</text>
        </view>
        <view class="detail-item">
          <text class="item-label">花期：</text>
          <text class="item-value">{{ flowerData.floweringPeriod }}</text>
        </view>
      </view>
    </view>
    
    <!-- 商品描述 -->
    <view class="flower-desc">
      <view class="section-title">商品描述</view>
      <view class="desc-content">
        {{ flowerData.description }}
      </view>
    </view>
    
    <!-- 规格选择 -->
    <view class="flower-specs">
      <view class="section-title">规格选择</view>
      <view class="specs-options">
        <view 
          v-for="(spec, index) in flowerData.specs" 
          :key="index" 
          class="spec-item"
          :class="{ active: selectedSpec === index }"
          @click="selectSpec(index)"
        >
          {{ spec }}
        </view>
      </view>
    </view>
    
    <!-- 购买数量 -->
    <view class="flower-quantity">
      <view class="section-title">购买数量</view>
      <view class="quantity-selector">
        <view class="quantity-btn" @click="decreaseQuantity">-</view>
        <text class="quantity-value">{{ quantity }}</text>
        <view class="quantity-btn" @click="increaseQuantity">+</view>
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
    
    <!-- 底部操作栏 -->
    <view class="bottom-actions">
      <view class="action-icons">
        <view class="action-icon">
          <image src="/static/menu-icons/kefu.png"></image>
          <text>客服</text>
        </view>
        <view class="action-icon">
          <image src="/static/menu-icons/star.png"></image>
          <text>收藏</text>
        </view>
        <view class="action-icon" @click="goToCart">
          <image src="/static/menu-icons/shop.png"></image>
          <text>购物车</text>
        </view>
      </view>
      <view class="action-buttons">
        <view class="add-cart-btn" @click="addToCart">加入购物车</view>
        <view class="buy-now-btn" @click="buyNow">立即购买</view>
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
      flowerId: null,
      quantity: 1,
      selectedSpec: 0,
      flowerData: {
        id: '1',
        name: '月季红龙沙宝石',
        category: '月季',
        type: '爬藤',
        price: 39.9,
        originalPrice: 59.9,
        sales: 1362,
        variety: '红龙沙宝石',
        environment: '阳光充足，通风良好',
        difficulty: '中等',
        floweringPeriod: '4-10月',
        description: '红龙沙宝石是一种非常漂亮的爬藤月季，花朵呈深红色，花型饱满，花期长，抗病能力强，适合新手种植。它的花朵大而艳丽，花香浓郁，是庭院种植的理想选择。',
        specs: ['小苗', '中苗', '大苗'],
        images: [
          '/static/flower/flower2.jpg',
          '/static/flower/flower3.jpg',
          '/static/flower/flower6.jpg'
        ]
      }
    }
  },
  onLoad(options) {
    // 获取传递过来的商品ID
    if (options.id) {
      this.flowerId = options.id;
      // 实际项目中，这里会根据ID从服务器获取花卉数据
      // this.fetchFlowerData(this.flowerId);
    }
  },
  methods: {
    selectSpec(index) {
      this.selectedSpec = index;
    },
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    addToCart() {
      uni.showToast({
        title: '已加入购物车',
        icon: 'success'
      });
    },
    buyNow() {
      uni.navigateTo({
        url: '/pages/seller/order?id=' + this.flowerId + '&quantity=' + this.quantity
      });
    },
    goToCart() {
      uni.navigateTo({
        url: '/pages/seller/cart'
      });
    },
    goToHome() {
      uni.navigateTo({
        url: '/pages/seller/seller'
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
  padding-bottom: 120rpx;
  padding-top: 100rpx; /* 为固定标题栏预留空间 */
}

/* 商品图片 */
.flower-images {
  width: 100%;
  height: 750rpx;
}
.swiper {
  width: 100%;
  height: 100%;
}
.flower-image {
  width: 100%;
  height: 100%;
}

/* 商品信息 */
.flower-info {
  background-color: #fff;
  padding: 30rpx;
  margin-bottom: 20rpx;
}
.flower-name {
  font-size: 36rpx;
  font-weight: bold;
  margin-bottom: 15rpx;
}
.flower-tags {
  display: flex;
  margin-bottom: 20rpx;
}
.tag {
  background-color: #f0f9eb;
  color: #67c23a;
  padding: 6rpx 16rpx;
  border-radius: 6rpx;
  font-size: 24rpx;
  margin-right: 20rpx;
}
.flower-price {
  display: flex;
  align-items: center;
}
.price {
  font-size: 40rpx;
  color: #ff6b6b;
  font-weight: bold;
}
.original-price {
  font-size: 28rpx;
  color: #999;
  text-decoration: line-through;
  margin: 0 20rpx;
}
.sales {
  font-size: 24rpx;
  color: #999;
}

/* 详情和描述 */
.flower-detail, .flower-desc, .flower-specs, .flower-quantity {
  background-color: #fff;
  padding: 30rpx;
  margin-bottom: 20rpx;
}
.section-title {
  font-size: 32rpx;
  font-weight: bold;
  margin-bottom: 20rpx;
  position: relative;
  padding-left: 20rpx;
}
.section-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10rpx;
  height: 30rpx;
  width: 8rpx;
  background-color: #67c23a;
}
.detail-content {
  color: #666;
  font-size: 28rpx;
}
.detail-item {
  margin-bottom: 15rpx;
  display: flex;
}
.item-label {
  width: 180rpx;
  color: #999;
}
.item-value {
  flex: 1;
}
.desc-content {
  font-size: 28rpx;
  line-height: 1.8;
  color: #666;
}

/* 规格选择 */
.specs-options {
  display: flex;
  flex-wrap: wrap;
}
.spec-item {
  padding: 15rpx 30rpx;
  border: 1px solid #ddd;
  border-radius: 8rpx;
  margin-right: 20rpx;
  margin-bottom: 20rpx;
  font-size: 28rpx;
}
.spec-item.active {
  border-color: #67c23a;
  background-color: #f0f9eb;
  color: #67c23a;
}

/* 购买数量 */
.quantity-selector {
  display: flex;
  align-items: center;
}
.quantity-btn {
  width: 60rpx;
  height: 60rpx;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36rpx;
}
.quantity-value {
  width: 100rpx;
  height: 60rpx;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28rpx;
}

/* 底部操作栏 */
.bottom-actions {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  display: flex;
  padding: 20rpx;
  border-top: 1rpx solid #eee;
}
.action-icons {
  display: flex;
  align-items: center;
}
.action-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40rpx;
}
.action-icon image {
  width: 50rpx;
  height: 50rpx;
  margin-bottom: 6rpx;
}
.action-icon text {
  font-size: 20rpx;
  color: #999;
}
.action-buttons {
  flex: 1;
  display: flex;
}
.add-cart-btn, .buy-now-btn {
  flex: 1;
  height: 80rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 28rpx;
  border-radius: 40rpx;
}
.add-cart-btn {
  background-color: #ff9f00;
  margin-right: 20rpx;
}
.buy-now-btn {
  background-color: #ff6b6b;
}

/* 悬浮按钮 */
.float-buttons {
  position: fixed;
  bottom: 140rpx;
  right: 20rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999;
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