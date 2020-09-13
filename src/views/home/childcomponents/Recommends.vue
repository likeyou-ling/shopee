<template>
    <div class="recommend">
        <div v-for='(item, index) in recommends' :key='index' class="recommend-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <p>{{item.title}}</p>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Recommends',
    props: ['recommends']
}
</script>
<style lang="less" scoped>
.recommend {
    display: flex;
    text-align: center;
    width: 100%;
    padding: 15px 0 20px;
    border-bottom: 7px solid #eee;
}
.recommend-item {
    flex: 1;
    padding: 0 10px;
}
.recommend-item a{
    display: block;
}
.recommend-item img {
    width: 100%;
    height: 100%;
}
@media screen and (max-width: 600px) {
    .recommend p {
        font-size: 12px;
    }
}
</style>