<template>
  <view class="container">
    <!-- 页面标题 -->
    <page-title title="附近花房"></page-title>
    
    <!-- 搜索框 -->
    <view class="search-bar">
      <icon type="search" size="15" color="#07C160" />
      <input type="text" v-model="searchText" placeholder="搜索花房名称或地址" @input="filterHuapeng" />
      <text class="iconfont search-icon" @click="filterHuapeng">搜索</text>
    </view>
    
    <!-- 花房列表 -->
    <view class="huapeng-list">
      <view class="huapeng-item" v-for="(item, index) in filteredHuapeng" :key="index">
        <image :src="item.image" mode="aspectFill"></image>
        <view class="location">
          <text>{{ item.name }}</text>
          <text class="distance">{{ item.distance }}</text>
        </view>
      </view>
      
      <!-- 无结果提示 -->
      <view class="no-result" v-if="filteredHuapeng.length === 0">
        <image src="/static/icon/no-result.png" class="no-result-icon"></image>
        <text class="no-result-text">没有找到相关花房</text>
      </view>
    </view>
    
    <!-- 悬浮按钮 -->
    <view class="float-buttons">
      <view class="float-button kefu" @click="goToServiceChat">
        <image class="float-icon" src="/static/menu-icons/kefu.png"></image>
      </view>
      <view class="float-button cart" @click="goToCart">
        <image class="float-icon" src="/static/menu-icons/shop.png"></image>
      </view>
    </view>
    
    <!-- 底部导航栏 -->
    <view class="tabbar">
      <view class="tab-item active">
        <image class="tab-icon" src="/static/icon/location2.png"></image>
        <text>花房</text>
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
      searchText: '',
      huapengList: [
        {
          name: '杭州市西湖区数字花房',
          image: '/static/huapeng/huapeng1.png',
          distance: '0.5km',
          address: '杭州市西湖区文一西路'
        },
        {
          name: '杭州市余杭区创意花房',
          image: '/static/huapeng/huapeng2.png',
          distance: '1.4km',
          address: '杭州市余杭区文一西路'
        },
        {
          name: '杭州市滨江区绿植花房',
          image: '/static/huapeng/huapeng3.png',
          distance: '1.9km',
          address: '杭州市滨江区滨盛路'
        }
      ],
      filteredHuapeng: []
    }
  },
  created() {
    // 初始化显示所有花房
    this.filteredHuapeng = [...this.huapengList];
  },
  methods: {
    // 根据输入文字筛选花房
    filterHuapeng() {
      if (!this.searchText) {
        this.filteredHuapeng = [...this.huapengList];
        return;
      }
      
      const keyword = this.searchText.toLowerCase();
      this.filteredHuapeng = this.huapengList.filter(item => {
        return item.name.toLowerCase().includes(keyword) || 
               item.address.toLowerCase().includes(keyword);
      });
    },
    goToHome() {
      uni.navigateTo({
        url: '/pages/seller/nav/seller'
      })
    },
    goToAIGC() {
      uni.navigateTo({
        url: '/pages/seller/nav/seller'
      })
    },
    goToUser() {
      uni.navigateTo({
        url: '/pages/seller/nav/user'
      })
    },
    goToCart() {
      uni.navigateTo({
        url: '/pages/seller/cart/cart'
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

/* 花棚列表 */
.huapeng-list {
  padding: 20rpx;
}
.huapeng-item {
  background-color: #fff;
  border-radius: 16rpx;
  margin-bottom: 20rpx;
  overflow: hidden;
}
.huapeng-item image {
  width: 100%;
  height: 340rpx;
  display: block;
}
.location {
  display: flex;
  align-items: center;
  padding: 16rpx;
  font-size: 26rpx;
}
.location-icon {
  width: 28rpx;
  height: 28rpx;
  margin-right: 8rpx;
  display: flex;
  align-items: center;
}
.distance {
  margin-left: auto;
  color: #999;
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

/* 无结果提示 */
.no-result {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100rpx 0;
}

.no-result-icon {
  width: 160rpx;
  height: 160rpx;
  margin-bottom: 20rpx;
  opacity: 0.6;
}

.no-result-text {
  font-size: 30rpx;
  color: #999;
}
</style> 