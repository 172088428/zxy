<template>
	<div class="Home">
		<Rp></Rp>
		<Hl></Hl>
	</div>
  <div class="BT">
    <Bt></Bt>
  </div>
</template>

<script>
  import Rp from "../components/H-Rotationplot.vue"
	import Hl from "../components/Homeli.vue"
  import Bt from "../components/Bottom.vue"
	
	export default {
		components:{
			Rp,Hl,Bt
		}
	}
</script>

<style>
	.Home{
		width: 120rem;
		margin: 0 auto;
	}
  .BT{
    position: absolute;
    top:200rem
  }
</style>
