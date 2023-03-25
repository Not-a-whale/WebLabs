<template>
    <CarouselItem v-for="name in names" :name="name" :key="name"/>
</template>

<script lang="ts">
/* eslint-disable */
// eslint-disable-next-line no-unused-vars
import {defineComponent} from "vue";
import CarouselItem from "@/components/Carousel/CarouselItem.vue";

export default defineComponent({
  name: 'Carousel',
  components: {
    CarouselItem
  },
  data() {
    return {
      names: ['htmlcss', 'javascript', 'react', 'redux', 'typescript', 'angular', 'github', 'firebase']
    }
  }
});
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../assets/styles/variables.scss';

</style>
