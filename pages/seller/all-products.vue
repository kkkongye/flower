<template>
  <view class="container">
    <!-- 页面标题 -->
    <page-title title="全部商品" :showBack="true" backUrl="/pages/seller/seller"></page-title>
    
    <!-- 搜索框 -->
    <view class="search-bar">
      <icon type="search" size="15" color="#07C160" />
      <input type="text" placeholder="月季" />
      <text class="search-btn">搜索</text>
    </view>
    
    <!-- 分类标签 -->
    <view class="category-tabs">
      <scroll-view scroll-x class="tabs-scroll">
        <view 
          v-for="(tab, index) in tabs" 
          :key="index" 
          class="tab-item" 
          :class="{ active: currentTab === index }"
          @click="switchTab(index)"
        >
          {{ tab }}
        </view>
      </scroll-view>
    </view>
    
    <!-- 左侧分类菜单 -->
    <view class="content-container">
      <view class="left-menu">
        <view 
          v-for="(category, index) in categories" 
          :key="index" 
          class="menu-item" 
          :class="{ active: currentCategory === index }"
          @click="switchCategory(index)"
        >
          {{ category }}
        </view>
      </view>
      
      <!-- 右侧商品列表 -->
      <view class="product-list">
        <!-- 商品项 -->
        <view 
          v-for="(product, index) in filteredProducts" 
          :key="index"
          class="product-item"
          @click="goToDetail(product)"
        >
          <view class="product-image">
            <image :src="product.image" mode="aspectFill"></image>
          </view>
          <view class="product-info">
            <view class="product-name">{{ product.name }}</view>
            <view class="product-tag">{{ product.tag }}</view>
            <view v-if="product.showService" class="product-customer-service">
              <image class="service-icon" src="/static/menu-icons/kefu.png"></image>
            </view>
            <view class="product-cart">
              <image class="cart-icon" src="/static/menu-icons/shop.png"></image>
            </view>
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
      <view class="float-button cart" @click="goToCart">
        <image class="float-icon" src="/static/menu-icons/shop.png"></image>
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
      currentTab: 0,
      currentCategory: 0,
      tabs: ['全部', '综合', '销量', '新品'],
      categories: ['爬藤', '树状', '灌木', '地被', '微型'],
      products: [
        {
          id: '1',
          name: '月季红龙沙宝石',
          tag: '月季·爬藤',
          image: '/static/flower/flower2.jpg',
          category: 0,
          showService: false
        },
        {
          id: '2',
          name: '月季粉龙沙宝石',
          tag: '月季·爬藤',
          image: '/static/flower/flower3.jpg',
          category: 0,
          showService: false
        },
        {
          id: '3',
          name: '月季黄金庆典',
          tag: '月季·爬藤',
          image: '/static/flower/flower6.jpg',
          category: 0,
          showService: false
        },
        {
          id: '4',
          name: '月季蓝色阴雨',
          tag: '月季·爬藤',
          image: '/static/flower/flower4.jpg',
          category: 0,
          showService: false
        },
        {
          id: '5',
          name: '月季真宙',
          tag: '月季·爬藤',
          image: '/static/flower/flower5.jpg',
          category: 0,
          showService: false
        },
        {
          id: '6',
          name: '月季蓝色风暴',
          tag: '月季·爬藤',
          image: '/static/flower/flower1.jpg',
          category: 0,
          showService: false
        },
        {
          id: '7',
          name: '月季盈盈粉',
          tag: '月季·爬藤',
          image: '/static/flower/flower3.jpg',
          category: 0,
          showService: false
        },
        {
          id: '8',
          name: '玉树',
          tag: '玉树·树状',
          image: '/static/flower/flower4.jpg',
          category: 1,
          showService: false
        },
        {
          id: '9',
          name: '茶花',
          tag: '茶花·灌木',
          image: '/static/flower/flower5.jpg',
          category: 2,
          showService: false
        },
        {
          id: '10',
          name: '绿萝',
          tag: '绿萝·地被',
          image: '/static/flower/flower6.jpg',
          category: 3,
          showService: false
        },
        {
          id: '11',
          name: '多肉',
          tag: '多肉·微型',
          image: '/static/flower/flower2.jpg',
          category: 4,
          showService: false
        }
      ]
    }
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product => {
        return this.currentCategory === product.category;
      });
    }
  },
  methods: {
    goToCart() {
      uni.navigateTo({
        url: '/pages/seller/cart'
      })
    },
    switchTab(index) {
      this.currentTab = index;
    },
    switchCategory(index) {
      this.currentCategory = index;
    },
    goToDetail(product) {
      uni.navigateTo({
        url: '/pages/seller/flower-detail?id=' + product.id
      });
    },
    goToServiceChat() {
      uni.navigateTo({
        url: '/pages/seller/service-chat'
      })
    },
    goToHome() {
      uni.navigateTo({
        url: '/pages/seller/seller'
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
.search-btn {
  color: #07C160;
  font-size: 28rpx;
}

/* 分类标签 */
.category-tabs {
  background-color: #fff;
  padding: 0 20rpx;
}
.tabs-scroll {
  white-space: nowrap;
  height: 80rpx;
}
.tab-item {
  display: inline-block;
  padding: 0 30rpx;
  line-height: 80rpx;
  font-size: 28rpx;
  color: #333;
}
.tab-item.active {
  color: #07C160;
  font-weight: bold;
  position: relative;
}

/* 内容区域 */
.content-container {
  display: flex;
  height: calc(100vh - 260rpx);
}

/* 左侧菜单 */
.left-menu {
  width: 160rpx;
  background-color: #f0f0f0;
  height: 100%;
}
.menu-item {
  height: 100rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26rpx;
  color: #666;
}
.menu-item.active {
  background-color: #fff;
  color: #07C160;
  font-weight: bold;
  position: relative;
}
.menu-item.active::before {
  content: "";
  position: absolute;
  left: 0;
  top: 30rpx;
  bottom: 30rpx;
  width: 6rpx;
  background-color: #07C160;
}

/* 商品列表 */
.product-list {
  flex: 1;
  overflow-y: auto;
  padding: 20rpx;
}
.product-item {
  background-color: #fff;
  border-radius: 12rpx;
  margin-bottom: 20rpx;
  overflow: hidden;
}
.product-image {
  height: 180rpx;
}
.product-image image {
  width: 100%;
  height: 100%;
}
.product-info {
  padding: 15rpx;
  position: relative;
}
.product-name {
  font-size: 28rpx;
  font-weight: bold;
  margin-bottom: 10rpx;
}
.product-tag {
  font-size: 24rpx;
  color: #999;
}
.product-cart, .product-customer-service {
  position: absolute;
  right: 15rpx;
  bottom: 15rpx;
}
.product-customer-service {
  right: 80rpx;
}
.cart-icon, .service-icon {
  width: 40rpx;
  height: 40rpx;
}

/* 悬浮按钮 */
.float-buttons {
  position: fixed;
  bottom: 40rpx;
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