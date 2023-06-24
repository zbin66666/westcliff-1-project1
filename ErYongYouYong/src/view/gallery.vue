<template>
  <!-- Our Gallery -->
  <div id="gallery">
    <h3 class="title">Our Gallery</h3>
    <ul class="container">
      <li class="box">
        <img src="../assets/img_12.png" alt="">
      </li>
      <li class="box">
        <img src="../assets/img_13.png" alt="">
      </li>
      <li class="box">
        <img src="../assets/img_14.png" alt="">
      </li>
      <li class="box">
        <img src="../assets/img_15.png" alt="">
      </li>
      <li class="box">
        <img src="../assets/img_16.png" alt="">
      </li>
      <li class="box">
        <img src="../assets/img_17.png" alt="">
      </li>
      <li class="box">
        <img src="../assets/img_18.png" alt="">
      </li>
      <li class="box">
        <img src="../assets/img_20.png" alt="">
      </li>
      <li class="box">
        <img src="../assets/img_21.png" alt="">
      </li>


    </ul>
  </div>
</template>

<script>
export default {
  name: "gallery"
}
</script>

<style scoped>
.title {
  font-size: 42px;
  color: #03639f;
  line-height: 1.4;
  text-align: center;
}
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
