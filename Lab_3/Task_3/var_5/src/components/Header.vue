<template>
  <header class="header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 header__top">
          <h2>Що ви опануєте</h2>
        </div>
      </div>
      <div class="row justify-content-center my-4">
        <Carousel />
      </div>
    </div>
  </header>
</template>
<script lang="ts">
/* eslint-disable */
// eslint-disable-next-line no-unused-vars
import {defineComponent} from "vue";
import Carousel from "@/components/Carousel/Carousel.vue";

export default defineComponent({
  name: 'Header',
  components: {
    Carousel
  },
  mounted() {
    console.log('Header mounted');
  }
});
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/styles/variables.scss';
.header {
  background-color: $main-white;
  padding: 0;
  width: 100%;
  &__top {
    display: flex;
    justify-content: center;
    align-items: center;
    background: $main-black;
    h2 {
      font-size: 30px;
      font-weight: 700;
      color: $main-white;
      padding: 5px 0;
    }
  }
}
</style>

