<template>
  <!-- about -->
  <div id="about">
    <div class="top">
      <h3 class="title">Welcome to Our Pool
        Website</h3>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
        doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta
        sunt explicabo.
      </p>
    </div>
    <div class="bottom">
      <div>
        <img src="../assets/img_1.png" @mouseover="shrinkImage"
             @mouseout="enlargeImage">
        <h5>Beauty Pool</h5>
      </div>
      <div>
        <img src="../assets/img_2.png" @mouseover="shrinkImage"
             @mouseout="enlargeImage">
        <h5>Dream Pool</h5>
      </div>
      <div>
        <img src="../assets/img_3.png" @mouseover="shrinkImage"
             @mouseout="enlargeImage">
        <h5>Kids Pool</h5>
      </div>
    </div>
  </div>
  <!-- middle -->
  <div class="middle">
    <div>
      <p>10% off first purchase diving equipment</p>
      <a href="#contact" class="btn btn-primary">Contact Us</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "about"
}
</script>

<style scoped>
.title {
  font-size: 42px;
  color: #03639f;
  line-height: 1.4;
  text-align: center;
}

#about {
  width: 1200px;
  margin: 0 auto;
  padding: 60px 0px;

}

#about .top > p {
  color: #8d9c9d;
}

#about .bottom {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}

#about .bottom div:nth-child(2) {
  margin: 0 20px;
}

#about .bottom img {
  width: 100% !important;
  transition: transform 1s ease;
}

#about .bottom h5 {
  font-size: 24px;
  color: #000;
  border: 3px double #03639f;
  letter-spacing: 1px;
  padding: 10px;
  text-align: center;
  box-sizing: border-box;
  margin: 3px 0;
}

/**/
.middle {
  width: 100%;
  background: url('../assets/img_4.png') no-repeat center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  -ms-background-size: cover;
  padding: 80px 0;
}

.middle > div {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.middle p {
  color: #fff;
  text-transform: uppercase;
  font-size: 40px;
  max-width: 800px;
  text-shadow: 1px 1px 1px #000;
  line-height: 1.5;
  text-align: center;
}

.middle a {
  padding: 12px 25px;
  border: none;
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>
