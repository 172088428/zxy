<template>
	<div class="hl">
		<ul v-for="(hl,index) in hls">
			<li>
				<a :href="hl.href">
					<img :src="hl.img" alt="">
					<p>{{hl.text}}</p>
				</a>
			</li>
			
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				hls:[
					{
						'img':'https://tukuimg.bdstatic.com/scrop/9666805a013e5e2ce910e1037bc091dc.gif',
						'text': '智能闸机360°',
						'href': ''
					},
					{
						'img':require('../assets/img/闸机.png'),
						'text': '智能闸机',
						'href': 'Login.vue'
					},
					{
						'img':require('../assets/img/etzj.png'),
						'text': '智能儿童闸机',
						'href': ''
					},
					{
						'img':require('../assets/img/zlzj.png'),
						'text': '栅栏闸机',
						'href': ''
					},
					{
						'img':require('../assets/img/cpsb.png'),
						'text': '车牌识别闸机',
						'href': ''
					},
					{
						'img':require('../assets/img/zhbp.png'),
						'text': '智慧班牌',
						'href': ''
					},
					{
						'img':require('../assets/img/cjj.png'),
						'text': '晨间机器人',
						'href': ''
					},
					{
						'img':require('../assets/img/fkj.png'),
						'text': '访客机',
						'href': ''
					},
					{
						'img':require('../assets/img/yjbj.png'),
						'text': '一键报警',
						'href': ''
					},
					{
						'img':require('../assets/img/rlsbz.png'),
						'text': '人脸识别柱',
						'href': ''
					},
					{
						'img':require('../assets/img/cw.png'),
						'text': '人脸测温',
						'href': ''
					},
					{
						'img':require('../assets/img/fzz.png'),
						'text': '升降防撞柱',
						'href': ''
					},
          {
          	'img':require('../assets/img/ysj.png'),
          	'text': '直饮水机',
          	'href': ''
          },
          {
          	'img':require('../assets/img/dztsg.png'),
          	'text': '电子图书柜',
          	'href': ''
          },
          {
          	'img':require('../assets/img/xdg.png'),
          	'text': '智能消毒柜',
          	'href': ''
          },
					{
						'img':require('../assets/img/dp2.png'),
						'text': '成绩分析大屏',
						'href': ''
					},
					{
						'img':require('../assets/img/dp3.png'),
						'text': '学生健康分析大屏',
						'href': ''
					},
					{
						'img':require('../assets/img/dp4.png'),
						'text': '寝室安全大屏',
						'href': ''
					},
					{
						'img':require('../assets/img/dp1.png'),
						'text': '整体运行情况大屏',
						'href': ''
					},
					{
						'img':require('../assets/img/dp5.png'),
						'text': '教育局体温检测大屏',
						'href': ''
					},
				]
			}
		}
	}
</script>

<style>
	.hl{
		width: 120rem;
		height: 20rem;
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
		margin-top: 1rem;
    position: absolute;
    left: -1rem;
    top:57rem
	}
	.hl li{
		width:20rem ;
		height: 24rem;
		display: flex;
		flex-direction: row;
	}
  .hl li:nth-child(1){
    margin-left: 3rem;
  }
	.hl a{
		color: #000000;
	}
	.hl img{
		width: 18rem;
		height: 16rem;
	}
	.hl p{
		width: 18rem;
		height: 4rem;
		font-size: 1.875rem;
		text-align: center;
		line-height: 4rem;
	}
</style>
