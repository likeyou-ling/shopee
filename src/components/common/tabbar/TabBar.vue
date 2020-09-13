<template>
    <div class="tabbar">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'Tabbar'
}
</script>
<style lang="less" scoped>
.tabbar {
    width: 100%;
    display: flex;
    position:fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 49px;
    /* box-shadow: -5px 0 3px rgba(0, 0, 0, .2); */
    border-top: 1px solid rgba(0, 0, 0, .1);
    padding: 3px 0;
}
</style>
