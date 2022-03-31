<!--
 * @Author       : YH000354
 * @Date         : 2022-03-30 18:34:59
 * @LastEditors  : YH000354
 * @LastEditTime : 2022-03-30 18:35:04
 * @FilePath     : \myblogzh\src\components\About.vue
-->
<template>
  <h1>{{ msg }}</h1>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'About',
  data() {
    return {
      msg: 'About Page',
    }
  },
  setup() {},
})
</script>
