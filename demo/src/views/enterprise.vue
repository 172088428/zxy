<template>
	<Cpcbl></Cpcbl>
	<div class="Ep">
		<div class="Ep-r">
			 <img src="../assets/img/企业文化.png" >
		</div>
		<div class="Ep-l">
			<p>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp企业文化，或称组织文化是一个组织由其价值观、信念、仪式、符号、处事方式等组成的其特有的文化形象，简单而言，就是企业在日常运行中所表现出的各方各面。
			</p>
			<p>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp企业文化是在一定的条件下，企业生产经营和管理活动中所创造的具有该企业特色的精神财富和物质形态。它包括文化观念、价值观念、企业精神、道德规范、行为准则、历史传统、企业制度、文化环境、企业产品等。其中价值观是企业文化的核心。
			</p>
		</div>
	</div>
	<Bt></Bt>
</template>

<script>
	import Cpcbl from "../components/Cpcbl.vue"
	import Bt from '../components/Bottom.vue'
	export default {
		name: 'Cp',
		components: {
			Cpcbl,Bt
		}
	}
</script>

<style>
	.Ep{
		width: 120rem;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
	}
	.Ep-r img{
		width: 38rem;
		margin-top: 1rem;
    margin-left: 2rem;
	}
	.Ep-l {
		width: 78rem;
		line-height: 2rem;
		text-align: justify;
	}
	.Ep-l p{
		font-size: 2rem;
		line-height: 3rem;
		margin-left: 5rem;
		text-align: justify;	
    margin-top: 1rem;
	}
</style>
