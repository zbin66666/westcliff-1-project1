<template>
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
</template>

<script>
export default {
  name: "service"
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
</style>
