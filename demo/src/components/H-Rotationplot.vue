<template>
	<div id="Rp">
    <div class="Rp">
        <img v-for="(Rpimg,index) in Rpimgs" :key='index' :src="Rpimg" v-show="index===mark">
    </div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				mark:0,
				time:'',
				Rpimgs:[
					require('../assets/img/1.png'),
					require('../assets/img/2.png'),
					require('../assets/img/3.png'),
					require('../assets/img/4.png'),
					require('../assets/img/5.png'),
					require('../assets/img/6.png'),
				]	
			}
		},
		methods:{
			stop() {
				clearInterval(this.time);
			},
			move() {
				this.time = setInterval(()=>{
					this.mark++;
					if (this.mark == 6) {
						this.mark = 0;
					}
				},5000);
			}
		},
		mounted() {
			this.move()
		}
	}
</script>

<style>
  .Rp{
    width: 120rem;
    height: 45rem;
    position: absolute;
    left: 0;
  }
	.Rp img{
		width: 100%;
		height: 100%;
	}
</style>
