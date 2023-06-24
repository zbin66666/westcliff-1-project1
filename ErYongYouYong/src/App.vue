<template>
  <div class="a active-bg">
    <header >
      <div id="logo">
        <a href="/"><h1>Pool</h1></a>
      </div>
      <div>
        <ul class="menu">
          <li><a href="/" :class="{ active: activeTab === 'home' }" @click="activeTab = 'home'">Home</a></li>
          <li><a href="#about" :class="{ active: activeTab === 'About Us' }" @click="activeTab = 'About Us'">About
            Us</a></li>
          <li><a href="#service" :class="{ active: activeTab === 'Services' }"
                 @click="activeTab = 'Services'">Services</a></li>
          <li><a href="#price" :class="{ active: activeTab === 'price' }" @click="activeTab = 'price'">price</a></li>
          <li><a href="#gallery" :class="{ active: activeTab === 'Gallery' }" @click="activeTab = 'Gallery'">Gallery</a>
          </li>
          <li><a href="#contact" :class="{ active: activeTab === 'Contact Us' }" @click="activeTab = 'Contact Us'">Contact
            Us</a></li>
        </ul>
      </div>
    </header>
  </div>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    Copyright © 2019.Company name All rights reserved.
  </footer>
</template>
<script setup>
import HelloWorld from './view/index.vue'
import {ref} from "vue";

const activeTab = ref('home');
</script>

<style scoped>
.active-bg {
  background-color: #03639f;
}
.a{
  width: 100%;
  height: 80px;
}
header {
  width: 100%;
  max-width: 1200px;
  height: 80px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#logo > a {
  float: left;
  display: initial;
  font-weight: 700;
  font-size: 40px;
  letter-spacing: 1px;
  color: #fff;
  text-shadow: 2px 5px 3px rgba(0, 0, 0, 0.06);
  padding: 0;
}

.menu {
  width: 600px;
  display: flex;
  justify-content: space-between;
}

.menu > li {
  list-style: none;
}

.menu > li a {
  color: white;
  font-size: 16px;

  padding: 10px 15px;
  border-radius: 5px;
}

.menu > li a:hover {
  background-color: rgba(0, 0, 0, 0.5);
}

.active {
  background-color: rgba(0, 0, 0, 0.5);
}

footer {
  height: 150px;
  line-height: 150px;
  text-align: center;
  background-color: #eee;
}
</style>
