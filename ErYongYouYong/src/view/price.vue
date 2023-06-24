<template>
  <!-- Our Pricing Plans -->
  <div id="pricing-plans">
    <h3 class="title">
      Our Pricing Plans
    </h3>
    <container/>
  </div>
</template>

<script setup>
import container from '../components/container.vue'


</script>

<style scoped>
/**/
#pricing-plans {
  padding: 50px 0;
  max-width: 1200px;
  margin: 0 auto;
}

#gallery {
  padding: 50px 0;
  max-width: 1200px;
  margin: 0 auto;
}

#gallery .container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
}

#gallery .box {
  width: 33.33%;
  height: 200px;
  box-sizing: border-box;
  margin-bottom: 10px;
  margin-top: 42px;
  text-align: center;
  padding: 10px;
}

#gallery .box img {
  width: 100%;

}

</style>
