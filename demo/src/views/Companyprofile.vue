<template>
	<div class="Cp">
		<div class="Cp-t">
			<Cpcbl></Cpcbl>
		</div>
		<div class="Cp-b">
			<div class="Cp-l">
				<img src="../assets/img/公司简介.png" alt="">
			</div>
			<div class="Cp-r">
				<p>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;光海科技是一家集教育信息化整体解决方案、产品研发、技术服务、教学研究和教育服务与一体的国家高新技术企业，是中国在线教育百强品牌，同时也是国内最领先的教育SAAS服务提供商，国内最大的基于微信的智慧校园服务提供商。目前，公司已获得软件著作权36项，获得软件企业认定，是近10所高校的大学生实习基地。
				</p>
				<p>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公司旗下精心打造的“微校通”、“微幼通”、“终身教育学习平台”等系列明星产品，为全国中小学、幼儿园、社区学院、教育行政单位等各类教育机构提供教育信息化支撑。光海科技依托丰富的产品功能和优秀的用户体验，迅速打开并占领市场，现已成功覆盖全国30余个省、直辖市，服务学校超过12000家，全国近千万家长学生受益。公司产品荣登新华社、人民日报、中国新闻网、中国教育报、浙江日报、杭州日报、钱江晚报、浙江省政府网、腾讯网、网易、搜狐等多家知名媒体报道，荣获“第五届全国教育改革创新特别奖”、“中国家庭教育知识传播激励计划家校合作优秀案例”、“中国家庭教育知识传播激励计划家校合作年度十佳案例”。
				</p>
				<p>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目前，公司已同中科院教育集团、阿里巴巴、腾讯、网易、中国移动、中国电信、海康、大华等知名机构和企业开展战略合作，并与部分省市教育厅、教育局等进行深入合作，共建区域教育信息化生态体系。
				</p>
				<p>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们始终将成为最优秀的教育信息化服务提供商作为公司愿景，始终将客户放在第一位，始终将提供一流产品和一流服务作为公司的核心价值观文化。
				</p>
			</div>
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
	.Cp-b{
		width: 120rem;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
	}
	.Cp-l{
		width: 40rem;
	}
	.Cp-l img{
		width: 40rem;
		height: 40rem;
    margin-left: 2rem;
	}
	.Cp-r {
		width: 78rem;
		height: 39rem;
		line-height: 2rem;
	}
	.Cp-r p{
		font-size: 1.8rem;
		margin-left: 5rem;
		text-align: justify;
    margin-top: 1rem;
	}
</style>
