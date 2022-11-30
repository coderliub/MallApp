<template>
	<view class="banner">
		<!-- indicator-dots展示点，autoplay自动轮播，interval隔x秒轮播一次，duration轮播时长 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000"
			indicator-active-color="#ff8198">
			<template v-for="item in banners" :key="item">
				<swiper-item @click="handleItemClick(item)">
					<image class="image" :src="item.image" mode="widthFix"></image>
				</swiper-item>
			</template>
		</swiper>
	</view>
</template>

<script setup>
	const props = defineProps({
		banners: {
			type: Array,
			default: () => []
		}
	})
	const emit = defineEmits(['bannerItemClick'])

	function handleItemClick(item) {
		emit('bannerItemClick', item.link)
	}
</script>

<style lang="scss">
	.banner {
		.image {
			width: 100%;
		}
	}
</style>
