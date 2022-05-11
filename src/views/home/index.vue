<!--
 * @Author       : YH000354
 * @Date         : 2022-04-01 18:18:07
 * @LastEditors  : YH000354
 * @LastEditTime : 2022-05-11 15:19:48
 * @FilePath     : \hopenotdeadBlog\src\views\home\index.vue
-->
<template>
  <div class="home_page">
    <i class="iconfont icon-arrow-down-bold"></i>
    <!-- background -->
    <div class="titlebac" ref="title">
      <span class="test">HopeNotDead</span>
    </div>
    <div class="intro_outer">
      <!-- intro -->
      <div class="intro_bac">
        <div class="intro">Hope's Not Dead</div>
      </div>
      <!-- button -->
      <div class="button">
        <div class="card" @click="goto('/knowledge')">
          <div class="content default">
            <span>Knowledge</span>
          </div>
          <div class="content hoverword">About what I've learned</div>
        </div>
        <div class="card">
          <div class="content default">life</div>
          <div class="content hoverword">About my experience</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VanillaTilt from 'vanilla-tilt'
</script>

<script lang="ts">
export default {
  name: 'home',
  methods: {
    /** @name 添加滚动事件*/
    addScrollEvent() {
      let background: any = this.$refs.title
      let sologan: any = document.querySelector('.intro')
      let scrollFunction = (background: any, sologan: any) => {
        const scrollY = window.scrollY
        if (scrollY !== 0) {
          background.style.backgroundPosition = `calc(50% + ${scrollY}px) calc(50% + ${scrollY}px)`
        } else {
          background.style.backgroundPosition = ''
        }
        if (scrollY >= 300) {
          sologan.style.backgroundPositionX = '0%'
        } else {
          sologan.style.backgroundPositionX = '100%'
        }
      }
      let addScrollFunction = scrollFunction.bind(this, background, sologan)
      window.addEventListener('scroll', addScrollFunction)
    },
    addVanillatilt() {
      let card: any = document.querySelectorAll('.card')
      VanillaTilt.init(card, {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.5,
      })
    },
    goto(path: string) {
      console.log('11')
      this.$router.push({
        path: path,
      })
    },
  },
  mounted() {
    this.addScrollEvent()
    this.addVanillatilt()
  },
  destroyed() {
    let card: any = document.querySelectorAll('.card')
    card.vanillaTilt.destroy()
    console.log('删除')
  },
}
</script>

<style lang="less" scoped>
@keyframes loopUpDown {
  0% {
    top: 0;
  }
  50% {
    top: 15px;
  }
  100% {
    top: 0;
  }
}

.icon-arrow-down-bold {
  position: absolute;
  color: rgba(255, 255, 255, 0.5);
  top: 10px;
  font-size: 30px;
  left: 50%;
  transform: translateX(-50%);
  // animation: pulse 0.7s ease-out infinite;
  animation: loopUpDown 0.7s linear infinite;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
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
  & ::after {
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
  .intro_outer {
    top: 100vh;
    width: 100%;
    height: 100vh;
    position: absolute;
    display: flex;
    flex-flow: column;
    align-items: center;
    .intro_bac {
      margin-top: 100px;
      height: 100px;
      width: 900px;
      background-color: #000;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      overflow: hidden;

      .intro {
        font-family: Helvetica;
        font-size: 45px;
        color: #fff;
        background-image: linear-gradient(
          75deg,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 1) 33.33%,
          rgba(255, 255, 255, 0) 66.67%,
          rgba(255, 255, 255, 0) 100%
        );
        background-size: 300% 100%;
        background-position-x: 100%;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        transition: 1.5s background-position-x ease-in-out;
        &:hover {
          background-position-x: 0%;
        }
      }
    }
    .button {
      margin-top: 20px;
      height: 70%;
      width: 40%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .card {
        position: relative;
        overflow: hidden;
        background-color: #fff;
        border-radius: 15px;
        width: 280px;
        min-width: 280px;
        height: 400px;
        margin-right: 40px;
        background-color: rgba(255, 255, 255, 0.1);
        box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
        border-top: 1px solid rgba(255, 255, 255, 0.5);
        border-left: 1px solid rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(5px);

        .default {
          font-size: 30px;
          font-family: Helvetica, sans-serif;
          color: #fff;
          top: 0px;
          opacity: 1;
        }
        .hoverword {
          font-size: 25px;
          font-family: Helvetica, sans-serif;
          color: #fff;
          opacity: 0;
          top: 100%;
        }
        .content {
          cursor: pointer;
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.4s ease-in-out;
        }
        &:hover .hoverword {
          top: 0px;
          opacity: 1;
        }
        &:hover .default {
          opacity: 0;
          top: -100%;
        }
      }
    }
  }
}
</style>
