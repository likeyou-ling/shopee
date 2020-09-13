<template>
    <div id='home'>
        <nav-bar class='bgc'>
            <p slot='center'>购物街</p>
        </nav-bar>
        <home-children :banners='banners'></home-children>
        <recommend :recommends='recommends'></recommend>
    </div>
</template>
<script>
import NavBar from 'component/common/navbar/NavBar.vue'
import {homeSend} from 'network/send.js'
import HomeChildren from './childcomponents/HomeChildren.vue'
import Recommend from './childcomponents/Recommends.vue'
export default {
    name: 'Home',
    components: {
        NavBar,
        HomeChildren,
        Recommend
    },
    data() {
        return {
            /* 轮播图 */
            banners: [],
            /* recommends */
            recommends: []
        }
    },
    created() {
        this.getHomeData()
    },
    methods: {
        getHomeData() {
            homeSend().then(res => {
                console.log(res)
               /* 赋值banner */ 
               this.banners = res.data.data.banner.list
               this.recommends = res.data.data.recommend.list
            })
        }
    }
}
</script>
<style lang="less" scoped>
.bgc{
    background-color: var(--color-tint)!important;
}
</style>
