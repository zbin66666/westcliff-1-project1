<template>
  <div class="banner">
    <h2>
      Build Your Dream Swimming Pool
      <p>Your Dream Swimming Pool</p>
    </h2>
    <p></p>
  </div>
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
  <!-- service -->
  <div id="service">
    <h3 class="title">
      Our Services
    </h3>
    <ul class="container">
      <li class="box">
        <img src="../assets/img_5.png" alt="">
        <h3>Pool Design</h3>
        <p>Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
      </li>
      <li class="box">
        <img src="../assets/img_6.png" alt="">
        <h3>Pool Design</h3>
        <p>Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
      </li>
      <li class="box">
        <img src="../assets/img_7.png" alt="">
        <h3>Pool Design</h3>
        <p>Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
      </li>
      <li class="box">
        <img src="../assets/img_8.png" alt="">
        <h3>Pool Design</h3>
        <p>Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
      </li>
      <li class="box">
        <img src="../assets/img_9.png" alt="">
        <h3>Pool Design</h3>
        <p>Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
      </li>
      <li class="box">
        <img src="../assets/img_10.png" alt="">
        <h3>Pool Design</h3>
        <p>Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
      </li>
    </ul>
  </div>
  <!-- middle -->
  <div class="middle-2">
    <ul>
      <li>
        <h3>Happy Clients</h3>
        <p>3400</p>
      </li>
      <li>
        <h3>Experience</h3>
        <p>28</p>
      </li>
      <li>
        <h3>Success</h3>
        <p>92</p>
      </li>
      <li>
        <h3>Awards</h3>
        <p>640</p>
      </li>
    </ul>
  </div>
  <!-- Our Pricing Plans -->
  <div id="pricing-plans">
    <h3 class="title">
      Our Pricing Plans
    </h3>
    <container/>
  </div>
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
  <!-- testimonials -->
  <div class="testimonials">
    <p>
      ” Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. “
    </p>
    <img src="../assets/img_22.png" alt="">
    <h4>Adam Lobster</h4>
  </div>
</template>

<script setup>
import container from '../components/container.vue'
import contact from './contact.vue'

const shrinkImage = (event) => {
  event.target.style.transform = 'scale(0.9)';
}
const enlargeImage = (event) => {
  event.target.style.transform = 'scale(1)';
}
</script>


<style>

.title {
  font-size: 42px;
  color: #03639f;
  line-height: 1.4;
  text-align: center;
}

/*---------------*/
.banner {
  width: 100%;
  background: url('../assets/img.png') no-repeat bottom;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  -ms-background-size: cover;
  min-height: 790px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner > h2 {
  font-size: 48px;
  font-weight: 700;
  color: white
}

.banner > h2 > p {
  font-size: 18px;
  font-weight: 400;
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

/**/
#service {
  padding: 50px 0;
  max-width: 1200px;
  margin: 0 auto;
}

#service > h3 {
  text-align: center;
}

#service .container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
}

#service .box {
  width: 33.33%;
  height: 200px;
  box-sizing: border-box;
  margin-bottom: 10px;
  margin-top: 42px;
  text-align: center;
}

/**/
.middle-2 {
  width: 100%;
  background: url('../assets/img_11.png') no-repeat center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  -ms-background-size: cover;
  padding: 80px 0;
}

.middle-2 ul {
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}

.middle-2 ul li {
  list-style: none;
  text-align: center;
}

.middle-2 ul li h3 {
  color: white;
}

.middle-2 ul li p {
  width: 220px;
  height: 80px;
  line-height: 80px;
  font-size: 58px;
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
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

.testimonials {
  width: 100%;
  background-color: #1dd1a1;
  padding: 80px 0;
  margin-top: 60px;
  text-align: center;
}

.testimonials p {
  width: 600px;
  font-size: 18px;
  color: white;
  text-align: center;
  margin: 0 auto;
}

.testimonials img {
  margin: 20px 0px;
  border-radius: 60px;
}
.testimonials h4{
  font-size: 26px;
  color: white;
  font-weight: 600;
}
</style>
