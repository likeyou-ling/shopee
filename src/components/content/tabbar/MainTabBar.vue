<template>
    <tab-bar>
      <tab-bar-item path='/home'>
        <img src="~assets/imgs/tabbar/home.svg" alt="" slot="icon">
        <img src="~assets/imgs/tabbar/home_active.svg" alt="" slot="active_icon">
        <p slot="info">首页</p>
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <img src="~assets/imgs/tabbar/category.svg" alt="" slot="icon">
        <img src="~assets/imgs/tabbar/category_active.svg" alt="" slot="active_icon">
        <p slot="info">商品分类</p>
      </tab-bar-item>
      <tab-bar-item path='/profile'>
        <img src="~assets/imgs/tabbar/profile.svg" alt="" slot="icon">
        <img src="~assets/imgs/tabbar/profile_active.svg" alt="" slot="active_icon">
        <p slot="info">商品概述</p>
      </tab-bar-item>
      <tab-bar-item path='/shopcar'>
        <img src="~assets/imgs/tabbar/shopcart.svg" alt="" slot="icon">
        <img src="~assets/imgs/tabbar/shopcart_active.svg" alt="" slot="active_icon">
        <p slot="info">购物车</p>
      </tab-bar-item>
    </tab-bar>
</template>
<script>
import TabBar from 'component/common/tabbar/TabBar.vue'
import TabBarItem from 'component/common/tabbar/TabbarItem.vue'
export default {
    name: 'MainTabBar',
    components: {
        TabBar,
        TabBarItem
    }
}
</script>
<style lang="less" scoped>

</style>