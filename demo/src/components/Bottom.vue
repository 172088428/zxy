<template>
  <div class="Bottom">
    <div class="B-l">
      <img src="../assets/img/logo.png">
      <p>光海科技 © 2013-2020 浙ICP备13015723号-2 浙公网安备33010802008830号3</p>
    </div>
    <div class="B-c">
      <h2>关于我们</h2>
      <ul>
        <li v-for="(name,index) in names">
          <router-link :to="name.href">
            {{name.name}}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="B-r">
      <h2>联系我们</h2>
      <img src="../assets/img/二维码.jpg">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        names: [{
            "name": "公司简介",
            "href": "/Companyprofile"
          },
          {
            "name": "使用协议",
            "href": ""
          },
          {
            "name": "诚征英才",
            "href": ""
          },
        ]
      }
    }
  }
</script>

<style>
  .Bottom {
    width: 120rem;
    height: 12rem;
    display: flex;
    flex-direction: row;
    background: #333333;
    margin: 0 auto;
  }

  .Bottom h2 {
    text-align: center;
    color: white;
  }

  .Bottom p {
    text-align: center;
    color: white;
    font-size: 1.2rem;
    margin-top: 2rem;
  }

  .B-l {
    width: 50rem;
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
  }

  .B-l img {
    width: 25rem;
    height: 4rem;
    margin-left: 50%;
    transform: translate(-50%);
  }

  .B-c {
    width: 30rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 1rem;
  }

  .B-c li {
    margin-top: 1rem;
  }

  .B-c a {
    color: white;
    font: 0.5rem;
  }

  .B-r {
    width: 40rem;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }

  .B-r img {
    width: 6rem;
    height: 6rem;
    margin-left: 50%;
    transform: translate(-50%);
    margin-top: 2rem;
  }
</style>
