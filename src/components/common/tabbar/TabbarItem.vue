<template>
  <div class="tabbaritem" @click='skip'>
    <div class="icon-box">
      <slot v-if="!this.isActive" name="icon"></slot>
      <slot v-if="this.isActive" name="active_icon"></slot>
    </div>
    <div class="info-box" :class="[{active: isActive}]">
      <slot name="info"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Tabbar',
  props: ['path'],
  methods: {
      skip () {
          this.$router.push(this.path)
      }
  },
  computed: {
      isActive () {
          return this.$route.path.indexOf(this.path) !== -1
      }
  }
}
</script>
<style lang="less" scoped>
.tabbaritem {
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.tabbaritem:hover {
    cursor: pointer;
}
.icon-box,
.info-box {
  flex: 1;
}
.icon-box img {
  height: 24px;
  vertical-align: middle;
}
.info-box p {
  margin: 0;
  padding: 0;
  font-size: 12px;
  height: 100%;
  padding-top: 5px;
}
.active {
    color: pink;
}
</style>
