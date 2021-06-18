<template>
  <div>
    <Header />
    <router-view />
    <Footer v-if="$store.state.token === null" />
  </div>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  mounted() {
    axios
      .post("http://localhost:8888/userverify", {
        token: localStorage.getItem("token"),
      })
      .then((e) => {
        this.$store.state.userName = e.data.user
        // console.log(e.data.user);
      });
  },

  components: {
    Header,
    Footer,
  },
};
</script>

<style>
::-webkit-scrollbar {
  width: 0; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
</style>