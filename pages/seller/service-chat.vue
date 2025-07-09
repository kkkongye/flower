<template>
    <view class="chat-container">
      <!-- 页面标题 -->
      <page-title title="在线客服" :showBack="true"></page-title>
      
      <!-- 头部提示区域 -->
      <view class="header-tip">
        <text class="tip-text">智能客服秒响应 咨询疑惑全扫清</text>
      </view>
      
      <!-- 聊天内容区域 -->
      <scroll-view class="chat-content" scroll-y :scroll-top="scrollTop" :scroll-with-animation="true">
        <!-- 快捷问题选项 -->
        <view class="quick-questions">
          <text class="quick-title">您可以这样问我：</text>
          <view class="question-tags">
            <view class="tag" @click="askQuestion('绿球养护方法')">绿球养护方法</view>
            <view class="tag" @click="askQuestion('下单后多久能收到鲜花？')">下单后多久能收到鲜花？</view>
            <view class="tag" @click="askQuestion('康乃馨花语')">康乃馨花语</view>
          </view>
        </view>
        
        <!-- 聊天消息列表 -->
        <view class="messages">
          <view v-for="(msg, index) in messages" :key="index" :class="['message-item', msg.type === 'user' ? 'message-user' : 'message-ai']">
            <view class="message-content" :class="msg.type === 'user' ? 'user-content' : 'ai-content'">
              <rich-text :nodes="msg.content"></rich-text>
            </view>
          </view>
        </view>
        
        <!-- 停止生成按钮 -->
        <view v-if="isGenerating" class="stop-generate">
          <button class="stop-btn">■ 停止生成</button>
        </view>
      </scroll-view>
      
      <!-- 底部输入区域 -->
      <view class="input-area">
        <view class="input-box">
          <input 
            class="message-input" 
            v-model="inputMessage" 
            placeholder="您可以问我任何问题" 
            confirm-type="send"
            @confirm="sendMessage"
          />
        </view>
        <view class="send-btn" @click="sendMessage">
          <text>发送</text>
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
        inputMessage: '',
        scrollTop: 0,
        isGenerating: false,
        messages: [],
        // 预设回复内容
        responses: {
          '绿球养护方法': `
            <div style="font-weight: bold">绿球鲜切花拿到手应该如何养护？</div>
            <div>
              收到绿球鲜切花后，养护要点如下：<br>
              1. 处理花材：去除受损部分，在水中将花茎剪成 45 度斜口，长度 2-3 厘米。<br>
              2. 深水浸泡：将花茎放入深水中浸泡 2-4 小时。<br>
              3. 插瓶摆放：花瓶加 1/3-1/2 的水，可添加保鲜剂等。将花插好，放明亮且无直射阳光处，远离热源和风口。<br>
              4. 定期保养：每天检查水质并换水，剪 0.5-1 厘米花茎；每天 1-2 次给花朵喷水。
            </div>
          `,
          '下单后多久能收到鲜花？': '您好，我们的鲜花配送时效为：同城订单一般在下单后4小时内送达，跨城订单一般在24-48小时内送达，具体以订单页面显示的预计送达时间为准。',
          '康乃馨花语': '康乃馨的花语是"母爱、温馨、真情"，粉色康乃馨代表母爱，红色康乃馨表达感谢，白色康乃馨寓意纯洁的爱与祝福，非常适合母亲节或表达感恩之情的场合。'
        }
      }
    },
    methods: {
      // 发送消息
      sendMessage() {
        if (!this.inputMessage.trim()) return;
        
        // 添加用户消息
        this.messages.push({
          type: 'user',
          content: this.inputMessage
        });
        
        const question = this.inputMessage;
        this.inputMessage = '';
        
        // 滚动到底部
        this.$nextTick(() => {
          this.scrollToBottom();
        });
        
        // 模拟AI回复
        setTimeout(() => {
          this.aiResponse(question);
        }, 500);
      },
      
      // AI回复消息
      aiResponse(question) {
        this.isGenerating = true;
        
        // 查找预设回复，如果没有则使用默认回复
        let response = '';
        for (const key in this.responses) {
          if (question.includes(key) || key.includes(question)) {
            response = this.responses[key];
            break;
          }
        }
        
        if (!response) {
          response = '您好，我是智能客服小花。很抱歉我暂时无法回答这个问题，您可以尝试其他问题或联系人工客服：400-123-4567。';
        }
        
        // 添加AI回复
        this.messages.push({
          type: 'ai',
          content: response
        });
        
        this.isGenerating = false;
        
        // 滚动到底部
        this.$nextTick(() => {
          this.scrollToBottom();
        });
      },
      
      // 点击提示问题
      askQuestion(question) {
        this.inputMessage = question;
        this.sendMessage();
      },
      
      // 滚动到底部
      scrollToBottom() {
        const query = uni.createSelectorQuery().in(this);
        query.select('.messages').boundingClientRect(data => {
          if (data) {
            this.scrollTop = data.height;
          }
        }).exec();
      },
      
      // 页面导航
      goHome() {
        uni.navigateTo({
          url: '/pages/seller/nav/seller'
        });
      },
      goToAIGC() {
        uni.navigateTo({
          url: '/pages/seller/nav/seller'
        });
      },
      goToUser() {
        uni.navigateTo({
          url: '/pages/seller/nav/seller'
        });
      }
    }
  }
  </script>
  
  <style>
  .chat-container {
    min-height: 100vh;
    background-color: #f8faf6;
    background-image: url('/static/bg/flower-pattern.png');
    background-size: 100%;
    background-repeat: repeat;
    background-opacity: 0.3;
    display: flex;
    flex-direction: column;
    padding-top: 100rpx; /* 为固定标题栏预留空间 */
    padding-bottom: 120rpx; /* 为底部导航栏预留空间 */
  }
  
  /* 头部提示 */
  .header-tip {
    background-color: #ffffff;
    padding: 20rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1rpx solid #eeeeee;
  }
  
  .tip-text {
    font-size: 26rpx;
    color: #333333;
  }
  
  /* 聊天内容区域 */
  .chat-content {
    flex: 1;
    padding: 20rpx;
    overflow-y: auto;
  }
  
  .service-card {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 16rpx;
    padding: 40rpx 0;
    display: flex;
    justify-content: center;
    margin-bottom: 30rpx;
  }
  
  .headset-large {
    width: 120rpx;
    height: 120rpx;
  }
  
  /* 快捷问题 */
  .quick-questions {
    margin: 20rpx 0 40rpx;
  }
  
  .quick-title {
    font-size: 28rpx;
    color: #666666;
    margin-bottom: 20rpx;
  }
  
  .question-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 20rpx;
  }
  
  .tag {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 12rpx 20rpx;
    border-radius: 36rpx;
    font-size: 26rpx;
    color: #333333;
  }
  
  /* 聊天消息 */
  .messages {
    display: flex;
    flex-direction: column;
  }
  
  .message-item {
    margin-bottom: 30rpx;
    display: flex;
  }
  
  .message-ai {
    justify-content: flex-start;
  }
  
  .message-user {
    justify-content: flex-end;
    padding-right: 30rpx; /* 将用户消息向左移一些，避免被遮盖 */
  }
  
  .message-content {
    max-width: 75%; /* 减小宽度以避免被遮盖 */
    padding: 20rpx;
    border-radius: 16rpx;
    font-size: 28rpx;
    word-break: break-word;
    line-height: 1.5;
  }
  
  .ai-content {
    background-color: #f5f5f5;
    color: #333333;
  }
  
  .user-content {
    background-color: #4e8f4e; /* 绿色，与您项目风格匹配 */
    color: #ffffff;
  }
  
  /* 停止生成按钮 */
  .stop-generate {
    display: flex;
    justify-content: center;
    margin: 20rpx 0;
  }
  
  .stop-btn {
    background-color: #f0f0f0;
    color: #666666;
    font-size: 24rpx;
    padding: 8rpx 30rpx;
    border-radius: 36rpx;
  }
  
  /* 输入区域 */
  .input-area {
    padding: 20rpx;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    border-top: 1rpx solid #eeeeee;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
  
  .input-box {
    flex: 1;
    background-color: #f5f5f5;
    border-radius: 36rpx;
    padding: 10rpx 20rpx;
    margin-right: 20rpx;
  }
  
  .message-input {
    width: 100%;
    height: 70rpx;
    font-size: 28rpx;
  }
  
  .send-btn {
    width: 100rpx;
    height: 70rpx;
    background-color: #4e8f4e; /* 绿色，与您项目风格匹配 */
    border-radius: 10rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 30rpx;
  }
  
  /* 底部导航栏样式，可复用您现有的tabbar样式 */
  .tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 120rpx;
    background-color: #ffffff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1rpx solid #eeeeee;
  }
  
  .tab-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 24rpx;
    color: #999999;
  }
  
  .tab-item.active {
    color: #4a7f4b;
  }
  
  .tab-icon {
    width: 48rpx;
    height: 48rpx;
    margin-bottom: 6rpx;
  }
  
  .ai-circle {
    width: 80rpx;
    height: 80rpx;
    background-color: #4a7f4b;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 6rpx;
  }
  </style>