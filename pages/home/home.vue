<template>
	<view class="home">
		<!-- 轮播图组件 -->
		<!-- <home-banner :banners="banners" @bannerItemClick="handleItemClick"></home-banner> -->
		<!-- 推荐栏组件 -->
		<home-recommend :recommends="recommends" @itemClick="handleItemClick"></home-recommend>
		<!-- 热门栏组件 -->
		<home-popular></home-popular>
		<!-- 分类组件 -->
		<tab-control :titles="['流行', '新款', '精选']" @tabItemClick="handleTabItemClick"></tab-control>
	</view>
</template>

<script setup>
	import { onLoad } from '@dcloudio/uni-app'
	import { useHomeStore } from '@/store/home.js'
	import { storeToRefs } from 'pinia'
	import HomeBanner from './cpns/home-banner.vue'
	import HomeRecommend from './cpns/home-recommend.vue'
	import HomePopular from './cpns/home-popular.vue'
	import TabControl from '@/components/tab-control.vue'

	const homeStore = useHomeStore()
	const { banners, recommends } = storeToRefs(homeStore)
	onLoad(async () => {
		// 触发一个异步的action,获取首页轮播图和推荐栏的数据
		homeStore.fetchHomeMultidata()
	})

	function handleItemClick(link) {
		uni.navigateTo({
			url: '/pages/webview/webview?link=' + link
		})
	}

	// 监听到tab的点击事件
	function handleTabItemClick(index) {

	}
</script>

<style lang="scss">

</style>
