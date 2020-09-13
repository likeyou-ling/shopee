<template>
  <div class='swipe'>
    <swipe class='my-swipe'>
      <swipe-item v-for='(item, index) in banners' :key='index'>
          <a :href="item.link">
              <img :src="item.image" alt="">
          </a>
      </swipe-item>
    </swipe>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from 'vue-swipe'
export default {
  name: 'HomeChildren',
  components: {
    Swipe,
    SwipeItem
  },
  props: [
      'banners'
  ]
}
</script>
<style lang='less' scoped>
@media screen and (max-width: 760px) {
    html {
        font-size: 16px;
    }
    .my-swipe {
    height: 12rem;
}
    .my-swipe img {
    width: 100%;
    height: 100%;
}
}
@media screen and (min-width: 1080px) {
    .my-swipe {
    height: 300px;
}
    .my-swipe img {
    width: 100%;
    height: 100%;
}
}
</style>
