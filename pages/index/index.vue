<template>
	<view class="container">
		<view class="header">
			<view class="title-area">
				<view class="title">请选择当前的角色</view>
				<view class="subtitle">可以在 我的-页面切换</view>
			</view>
			<image class="avatar" src="/static/init/用户.png"></image>
		</view>
		<view class="role-container">
			<view class="role-card" @click="goGrower">
				<image class="role-img" src="/static/init/种植者.jpg"></image>
				<view class="role-info">
					<view class="role-title">花卉种植者</view>
					<view class="role-desc">种植、生产花卉产品</view>
					<view class="role-link">智能种植监测</view>
				</view>
			</view>
			<view class="role-card" @click="goSeller">
				<image class="role-img" src="/static/init/售卖者.jpg"></image>
				<view class="role-info">
					<view class="role-title">花卉售卖者</view>
					<view class="role-desc">采购、售卖花卉产品</view>
					<view class="role-link">智能花束生成</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			goGrower() {
				uni.navigateTo({ url: '/pages/grower/grower' });
			},
			goSeller() {
				uni.navigateTo({ url: '/pages/seller/seller' });
			}
		}
	}
</script>

<style>
	.container {
		padding: 40rpx 20rpx;
		background: #f8faf6;
		height: 95vh;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		overflow: hidden;
	}
	
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 30rpx;
	}
	
	.title-area {
		flex: 1;
	}

	.title {
		font-size: 36rpx;
		font-weight: bold;
		margin-bottom: 10rpx;
	}

	.subtitle {
		color: #b0b0b0;
		font-size: 24rpx;
	}

	.avatar {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		background: #eee;
		margin-left: 20rpx;
	}
	
	.role-container {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.role-card {
		display: flex;
		align-items: center;
		background: #fff;
		border-radius: 20rpx;
		margin-bottom: 80rpx;
		padding: 20rpx;
		box-shadow: 0 2rpx 8rpx #e8e8e8;
		width: 85%;
		max-width: 600rpx;
	}

	.role-img {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		margin-right: 20rpx;
	}

	.role-info {
		flex: 1;
	}

	.role-title {
		font-size: 32rpx;
		font-weight: bold;
		margin-bottom: 8rpx;
	}

	.role-desc {
		color: #b0b0b0;
		font-size: 24rpx;
		margin-bottom: 8rpx;
	}

	.role-link {
		color: #4e8ef7;
		font-size: 24rpx;
	}
</style>
