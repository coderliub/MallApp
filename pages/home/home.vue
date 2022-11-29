<template>
	<view class="">
		<swiper>
			<swiper-item></swiper-item>
		</swiper>
	</view>
</template>

<script setup>
	import { onLoad } from '@dcloudio/uni-app'
	import { getHomeMutidata } from '@/service/home.js'

	onLoad(async () => {
		// 获取首页轮播图和推荐栏的数据
		// const res = await getHomeMutidata()
		// const mutidata = res.data.banner.list
		// console.log(mutidata)
	})
</script>

<style lang='scss'>

</style>
