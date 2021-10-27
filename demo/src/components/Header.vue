<template >
	<div id="Header" >
    <div class="Header">
      <img :src='img' alt="">
    </div>  
  </div>	
</template>

<script>
	export default {
		data(){
			return{
				img:[
					require('../assets/img/标题.png'),
				]
			}
		}
	}
</script>

<style>
	#Header{
		width: 100vw;
		height:8rem;
	}
  .Header{
    width: 120rem;
    height:8rem;
  }
	.Header img{
		width: 120rem;
		height: 8rem;
	}
</style>
