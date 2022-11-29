import { defineStore } from 'pinia'
import { getHomeMutidata } from '@/service/home'

export const useHomeStore = defineStore('home', {
	state: () => {
		return { bananers: [] }
	},
	actions: {
		// 获取首页轮播图和推荐栏的数据(异步的action)
		async fetchHomeMultidata() {
			const res = await getHomeMutidata()

		}
	}
})
