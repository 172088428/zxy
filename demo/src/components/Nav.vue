<template>
  <div id="Nav">
    <div class="nav">
      <div class="nav-img">
        <router-link to="/">
          <img src="../assets/img/logo1.png">
        </router-link>
      </div>
      <div class="nav-li">
        <ul>
          <li v-for="(navs,index) in navlist">
            <router-link :to="navs.path">{{navs.name}}</router-link>
          </li>
        </ul>
      </div>
      <div class="nav-input">
        <input type="text" id="" value="" placeholder="输入搜索的内容"/> 
        <i class="iconfont icon-icon-test"></i>
      </div>
      <div class="nav-dl">
        <router-link to="/Login">注册/登陆</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Nav",
    data() {
      return {
        navlist: [{
            'path': '/',
            'name': '首页'
          },
          {
            'path': '/about',
            'name': '产品介绍'
          },
          {
            'path': '/Video',
            'name': '视频资料'
          },
          {
            'path': '/NewsUpdate',
            'name': '新闻动态'
          },
          {
            'path': '/Companyprofile',
            'name': '关于公司'
          },

        ]
      }
    }
  }
</script>

<style>
  #Nav {
    width: 100vw;
    height: 4rem;
    margin: 0 auto;
  }
  .nav {
    width: 120rem;
    height: 4rem;
    display: flex;
    flex-direction: row;
    position: absolute;
    background-color: #333333;
    left: 0;
    z-index: 10;
  }

  .nav-img {
    width: 15rem;
    height: 4rem;
    margin-left: 1.5rem;
  }
  .nav-img img {
    width: 15rem;
    height: 4rem;
  }
  .nav-li ul {
    width: 50rem;
    height: 4rem;
    display: flex;
    flex-direction: row;
    margin-left: 10rem;
  }
  .nav-li li {
    width: 10rem;
    height: 4rem;
    text-align: center;
    line-height: 4rem;
  }
  .nav-li li:nth-child(2){
    margin-left: -2rem;
  }
  .nav-li a{
    font-size: 1.8rem;
  }
  .nav-li a:hover{
    color: salmon;
    font-size: 2rem;
    font-weight: bold;
    border-bottom: 0.2rem salmon solid;
  }
  .nav-input {
    width: 30rem;
    height: 4rem;
    display: flex;
    flex-direction: row;
    margin-left: 3rem;
  }
  .nav-input input{
    width: 30rem;
    height: 3rem;
    margin-top: 0.5rem;
    outline-style: none;
    border: 0.2rem salmon solid;
    border-radius: 1rem;
    position: relative;
  }
  .nav-input i{
    color: salmon;
    width: 3rem;
    height: 3rem;
    font-size: 2rem;
    margin-top: 1rem;
    position: absolute;
    left: 107rem;
  }
  .nav-dl {
    width: 7rem;
    height: 4rem;
    text-align: right;
    margin-top: 2rem;
  }
  .nav-dl a:hover{
    color: salmon;
    border-bottom: 0.2rem salmon solid;
  }
</style>
