<template>
	<div class="Cpcbl">
		<ul>
			<li v-for="(Cpcbl,index) in Cpcbls">
				<router-link  :to="Cpcbl.href">
					{{Cpcbl.name}}
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				Cpcbls:[
					{
						'name':'公司简介',
						'href':'/Companyprofile'
					},
					{
						'name':'企业文化',
						'href':'/enterprise'
					},
					{
						'name':'企业历程',
						'href':''
					},
					{
						'name':'办公环境',
						'href':''
					},
					{
						'name':'联系我们',
						'href':''
					},
				]
			}
		}
	}
</script>

<style>
	.Cpcbl {
		width: 120rem;
		height: 3rem;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		background: url(../assets/img/导航框.jpg) no-repeat top center;
		opacity: 0.8;
	}
	.Cpcbl ul{
		width: 120rem;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
	}
	.Cpcbl li:nth-child(1){
		margin-left: 10rem;
	}
	.Cpcbl li{
		width: 24rem;
		text-align: center;
	}
	.Cpcbl a{
		color: #000000;
		font-size: 1.5rem;
		line-height: 3rem;
	}
	.Cpcbl a:hover{
		border-bottom: 0.2rem cornflowerblue solid; 
		color: cornflowerblue;
		font-weight: bold;
	}
</style>
