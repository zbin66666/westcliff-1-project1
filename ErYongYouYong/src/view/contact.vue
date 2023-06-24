<template>
  <main>
    <h3 class="title">Contact Us</h3>
    <div>
      <div class="l">
        <h3>OUR ADDRESS</h3>
        <sapn>If you have any questions about the services we provide simply use the form below. We try and respond to
          all queries and comments within 24 hours.
        </sapn>
      </div>
      <div class="r">
        <h3>OUR ADDRESS</h3>
        <form>
          <div class="form-group">
            <input type="email" class="form-control" v-model="fromModel.Name" id="exampleInputEmail1" placeholder="Name" style="width: 520px">
          </div>
          <div class="form-group">
            <input type="text" class="form-control"v-model="fromModel.Email" id="exampleInputPassword1" placeholder="Email">
          </div>
          <div class="form-group">
            <input type="text" class="form-control"v-model="fromModel.Subject" id="exampleInputPassword1" placeholder="Subject">
          </div>
          <div class="form-group">
            <input type="text" class="form-control"v-model="fromModel.Phone_Number" id="exampleInputPassword1" placeholder="Phone Number">
          </div>
          <div class="form-group">
          <textarea name="Message" class="form-control"v-model="fromModel.Message" id="exampleInputPassword1">
          </textarea>
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox"> Check me out
            </label>
          </div>
          <button @click="s" type="submit" class="btn btn-default">Submit</button>
        </form>
      </div>
    </div>
  </main>
</template>
<script setup>
import {ref} from "vue";

const fromModel = ref({
  Name: "",
  Email: "",
  Subject: "",
  Phone_Number: "",
  Message: ""
})

const s=()=>{
  $.ajax({
    url: 'https://api.example.com/data',
    method: 'GET',
    dataType: 'json',
    data:fromModel.value,
    success: function (response) {
      // 请求成功处理逻辑
      console.log(response);
    },
    error: function (xhr, status, error) {
      // 请求失败处理逻辑
      console.error(error);
    }
  });
}
</script>

<style scoped>
main {
  padding: 50px 0;
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  font-size: 42px;
  color: #03639f;
  line-height: 1.4;
  text-align: center;
}

main > div {
  max-width: 1200px;
  display: flex;


}

.l, .r {
  max-width: 540px;

}

.l > p, .r > p {
  color: #343a40 !important;
}

.l {
  padding-right: 25px;
  box-sizing: border-box;
}

.l > sapn {
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1.8;
  color: #343a40 !important;

}

</style>
