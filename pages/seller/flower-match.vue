<template>
  <view class="container">
    <!-- 页面标题 -->
    <page-title title="智能搭配花材" :showBack="true"></page-title>
    
    <!-- 顶部标题栏 -->
    <view class="header-banner">
      智能搭配花材 <text class="small-icon">🌷</text> 秒配个性花束
    </view>
    
    <!-- 花材导入区域 -->
    <view class="section">
      <view class="section-title">花材导入</view>
      <view class="flower-grid">
        <view class="flower-item" @click="selectFlower(1)">
          <image src="/static/flower/flower1.jpg" mode="aspectFill"></image>
        </view>
        <view class="flower-item" @click="selectFlower(2)">
          <image src="/static/flower/flower2.jpg" mode="aspectFill"></image>
        </view>
        <view class="flower-item" @click="selectFlower(3)">
          <image src="/static/flower/flower3.jpg" mode="aspectFill"></image>
        </view>
        <view class="flower-item" @click="selectFlower(4)">
          <image src="/static/flower/flower4.jpg" mode="aspectFill"></image>
        </view>
        <view class="flower-item" @click="selectFlower(5)">
          <image src="/static/flower/flower5.jpg" mode="aspectFill"></image>
        </view>
        <view class="flower-item" @click="selectFlower(6)">
          <image src="/static/flower/flower6.jpg" mode="aspectFill"></image>
        </view>
        <view class="flower-item add" @click="addFlower">
          <text class="add-icon">+</text>
        </view>
        <view class="flower-item add" @click="addFlower">
          <text class="add-icon">+</text>
        </view>
      </view>
    </view>
    
    <!-- 关键词辅助 -->
    <view class="section">
      <view class="section-title">关键词辅助</view>
      <view class="keyword-input">
        <input type="text" v-model="keyword" placeholder="请输入关键词" />
        <text class="keyword-hint">如：手捧，简约，明艳</text>
        <text class="word-count">{{keyword.length}}/100</text>
      </view>
      <view class="tag-list">
        <view class="tag" @click="selectTag('心情')">心情</view>
        <view class="tag" @click="selectTag('运势')">运势</view>
        <view class="tag" @click="selectTag('星座')">星座</view>
      </view>
    </view>
    
    <!-- 已生成结果 -->
    <view class="section">
      <view class="section-title">已为您智能生成以下花束：</view>
      <view class="result-grid">
        <view class="result-item" @click="viewResult(1)">
          <image src="/static/flower/bouquet1.jpg" mode="aspectFill"></image>
        </view>
        <view class="result-item" @click="viewResult(2)">
          <image src="/static/flower/bouquet2.jpg" mode="aspectFill"></image>
        </view>
        <view class="result-item" @click="viewResult(3)">
          <image src="/static/flower/bouquet3.jpg" mode="aspectFill"></image>
        </view>
        <view class="result-item" @click="viewResult(4)">
          <image src="/static/flower/bouquet4.jpg" mode="aspectFill"></image>
        </view>
      </view>
    </view>
    
    <!-- 底部导航栏 -->
    <view class="tabbar">
      <view class="tab-item" @click="goToCart">
        <image class="tab-icon" src="/static/menu-icons/shop.png"></image>
        <text>购物车</text>
      </view>
      <view class="tab-item ai-tab active">
        <view class="ai-circle">
          <image class="tab-icon" src="/static/icon/AIGC2.png"></image>
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
      keyword: '',
      selectedTags: []
    }
  },
  methods: {
    selectFlower(id) {
    },
    addFlower() {
      uni.chooseImage({
        count: 1,
        success: function(res) {
        }
      })
    },
    selectTag(tag) {
      if (this.selectedTags.includes(tag)) {
        this.selectedTags = this.selectedTags.filter(item => item !== tag)
      } else {
        this.selectedTags.push(tag)
      }
      console.log('选择标签', this.selectedTags)
    },
    viewResult(id) {
      uni.navigateTo({
        url: `/pages/seller/flower-detail?id=${id}&type=bouquet`
      })
    },
    goToCart() {
      uni.navigateTo({
        url: '/pages/seller/cart/cart'
      })
    },
    goToUser() {
      uni.navigateTo({
        url: '/pages/seller/nav/user'
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
  padding-top: 100rpx;
  background-image: url('/static/bg-pattern.png');
  background-size: cover;
  background-repeat: no-repeat;
}

/* 顶部标题栏 */
.header-banner {
  background-color: #a7c4a0;
  color: white;
  padding: 20rpx;
  text-align: center;
  font-size: 32rpx;
  margin-bottom: 20rpx;
}

.small-icon {
  font-size: 24rpx;
  margin: 0 10rpx;
}

/* 区域样式 */
.section {
  margin: 30rpx 20rpx;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 16rpx;
  padding: 20rpx;
}

.section-title {
  font-size: 28rpx;
  font-weight: bold;
  color: #6eb56e;
  margin-bottom: 20rpx;
}

/* 花材网格 */
.flower-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20rpx;
}

.flower-item {
  height: 160rpx;
  border-radius: 12rpx;
  overflow: hidden;
  background-color: #f0f0f0;
}

.flower-item image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.flower-item.add {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f8f1;
  border: 1px dashed #a7c4a0;
}

.add-icon {
  font-size: 50rpx;
  color: #a7c4a0;
}

/* 关键词输入区域 */
.keyword-input {
  background-color: #fff;
  border-radius: 12rpx;
  padding: 20rpx;
  position: relative;
}

.keyword-input input {
  height: 80rpx;
  width: 100%;
}

.keyword-hint {
  font-size: 24rpx;
  color: #999;
  margin-top: 10rpx;
}

.word-count {
  position: absolute;
  right: 20rpx;
  bottom: 20rpx;
  font-size: 24rpx;
  color: #999;
}

/* 标签列表 */
.tag-list {
  display: flex;
  margin-top: 20rpx;
}

.tag {
  background-color: #f0f8f1;
  border: 1px solid #d8e8d9;
  padding: 10rpx 30rpx;
  border-radius: 50rpx;
  margin-right: 20rpx;
  font-size: 28rpx;
  color: #6eb56e;
}

.tag.active {
  background-color: #6eb56e;
  color: white;
}

/* 结果网格 */
.result-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20rpx;
}

.result-item {
  height: 300rpx;
  border-radius: 12rpx;
  overflow: hidden;
  background-color: #f0f0f0;
}

.result-item image {
  width: 100%;
  height: 100%;
  object-fit: cover;
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