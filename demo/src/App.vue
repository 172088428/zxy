<template>
	<div id="wxt">
		<Header></Header>
		<Nav></Nav>
 </div>
	<router-view/>
</template>

<script>
	import Header from './components/Header.vue'
	import Nav from './components/Nav.vue'

   export default {
     components: {
       Header , Nav 
     }
   }
</script>

<style>
</style> 
