<template>
  <div id="app">
    <Swiper class="swiper" v-if="imgs.length > 0" :autoPlay='true' :showIndicator='true' interval="2500" duration="500">
      <Slide v-for="(item,index) in imgs" :key="index">
        <img class="img" :src="item">
      </Slide>
    </Swiper>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      imgs: [
        "http://img1.imgtn.bdimg.com/it/u=3044191397,2911599132&fm=27&gp=0.jpg",
        "http://img1.imgtn.bdimg.com/it/u=3044191397,2911599132&fm=27&gp=0.jpg",
        "http://img5.imgtn.bdimg.com/it/u=1109917053,4211270766&fm=27&gp=0.jpg"
      ],
      swiperObj: null
    };
  }
};
</script>

<style lang="scss">
#app {
  text-align: center;
}
</style>

