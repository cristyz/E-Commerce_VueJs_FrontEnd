<template>
  <div
    id="banner"
    class="d-flex justify-content-center flex-column align-items-center"
  >
    <img id="imgBanner" :class="{ opacityBanner: opacityEffect }" />
    <img id="imgBanner2" />
    <h1 v-if="$store.state.userName !== null" class="px-4 text-center mb-5">
      Welcome <span style="color: orange">{{ $store.state.userName }}</span>
    </h1>

    <h1 class="px-4 text-center">Your E-commerce Online</h1>
    <button class="btn mb-2 mt-5 text-white" style="width: 300px">
      Start Now!
    </button>
    <span class="fs-3 my-2">Or</span>
    <button
      @click="viewEcommerces"
      class="btn mb-2 text-white"
      style="width: 300px"
    >
      See E-commerces
    </button>
  </div>
</template>

<script>
export default {
    name:'Slider',

    data() {
        return {
            opacityEffect: true,
        }
    },

    mounted() {
        setInterval(() => {
            this.opacityEffect = !this.opacityEffect
        },7000)
    },

    methods: {
        viewEcommerces() {
            this.$router.push('ecommerces')
        }
    },

    
}
</script>

<style scoped>
#banner {
  height: 800px;
  color: #fff;
  transition: 1s;
  position: relative;
}
#imgBanner {
  background: url("../assets/banner.jpg") no-repeat fixed;
  background-size: cover;
  position: absolute;
  height: 100%;
  width: 100vw;
  transition: 1s ease-in-out;
  z-index: -90;
  opacity: 0;
}
#imgBanner2 {
  background: url("../assets/banner2.jpg") no-repeat fixed;
  background-size: cover;
  position: absolute;
  height: 100%;
  width: 100vw;
  transition: 1s ease-in-out;
  z-index: -100;
}
.opacityBanner {
  opacity: 1 !important;
}

#banner h1 {
  background: rgba(0, 0, 0, 0.7);
  padding: 5px 10px;
  border-radius: 30px;
}
#banner button {
  background: rgba(0, 0, 0, 0.7);
  border-radius: 30px;
  transition: 0.5s;
}
#banner button:hover {
  background: rgba(0, 0, 0, 0.9);
  font-weight: bolder;
}
</style>