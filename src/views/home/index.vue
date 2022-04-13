<!--
 * @Author       : YH000354
 * @Date         : 2022-04-01 18:18:07
 * @LastEditors  : YH000354
 * @LastEditTime : 2022-04-13 09:43:48
 * @FilePath     : \hopenotdeadBlog\src\views\home\index.vue
-->
<template>
  <div class="home_page">
    <div class="titlebac" ref="title">
      <span class="test">HopeNotDead</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
</script>

<script lang="ts">
export default {
  name: '',
  methods: {
    /** @name 添加滚动事件*/
    addScrollEvent() {
      window.addEventListener('scroll', () => {
        let background: any = this.$refs.title
        const scrollY = window.scrollY
        if (scrollY !== 0) {
          background.style.backgroundPosition = `calc(50% + ${scrollY}px) calc(50% + ${scrollY}px)`
        } else {
          background.style.backgroundPosition = ''
        }
      })
    },
  },
  mounted() {
    this.addScrollEvent()
  },
}
</script>

<style lang="less" scoped>
.home_page::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
.titlebac::-webkit-scrollbar {
  // display: none;
  width: 0 !important;
  height: 0;
}
.home_page {
  height: 100%;
  width: 100%;
  .titlebac {
    background: url('../../assets/image/titlebac.jpg') 50% 50% no-repeat;
    background-size: cover;
    height: 200vh;
    font: 900 15rem '';
    line-height: 100vh;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    text-align: center;
    overflow: hidden;
    // overflow-y: hidden;
  }
  ::before {
    content: '';
    background-size: cover;
    background-image: inherit;
    background-position: 50% 50%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -99;
  }
}
</style>
