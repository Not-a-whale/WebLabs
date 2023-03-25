<template>
  <div id="app">
    <Header />
    <div class="container-fluid">
      <div class="row">
          <Main />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from "@/components/Header.vue";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Main from "@/components/Main.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  name: 'App',
  components: {
    Footer,
    Header,
    Main,
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

body, p, h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
}
</style>
