<template>
	<div id="V-Nav">
		<div class="nav-l">
			<ul v-for="(iteml,index) in namel">
				<li>
					<a :href="iteml.href" @mouseover="over(index)" @mousedown="move()">{{iteml.name}}</a>
				</li>
			</ul>
		</div>
		<div class="nav-r">
			<div class="nav-r-t">
				<ul v-for="(itemrt,index) in namert">
					<li>
						<a :href="itemrt.href">{{itemrt.name}}</a>
					</li>
				</ul>
			</div>
			<div class="nav-r-b" v-for="(Tnames,index) in namerb">
				<div class="nav-r-b-t" v-show="num===index+1? true : false">
					<ul v-for="(Tname,index) in Tnames.namerbt">
						<li>
							<a :href="Tname.href" @mouseover="over1(index)" @mouseout="move1()">{{Tname.name}}</a>
						</li>
					</ul>
				</div>
				<div class="nav-r-b-b" v-for="(Bnames,index1) in Tnames.namerbb" v-show="num1===index1? true : false">
					<ul v-for="(Bname,index) in Bnames.name">
						<li>
							<a :href="Bname.href">{{Bname}}</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				num: -1,
				num1: -1,
				namel: [{
						'name': '学习科目',
						'href': ''
					},
					{
						'name': '安全课程',
						'href': ''
					},
					{
						'name': '精品课程',
						'href': ''
					},
					{
						'name': '幼儿园课程',
						'href': ''
					},
					{
						'name': '小学课程',
						'href': ''
					},
					{
						'name': '中学课程',
						'href': ''
					},
					{
						'name': '高中课程',
						'href': ''
					},
				],
				namert: [{
						'name': 'HBuilderx',
						'href': 'https://www.dcloud.io/',
					},
					{
						'name': 'VsCode',
						'href': 'https://code.visualstudio.com/',
					},
					{
						'name': 'WebStorm',
						'href': 'https://www.jetbrains.com/zh-cn/webstorm/',
					},
					{
						'name': 'Git',
						'href': 'https://git-scm.com/',
					},
					{
						'name': 'Node',
						'href': 'http://nodejs.cn/',
					},
					{
						'name': 'Typora',
						'href': 'https://typora.io/',
					},
					{
						'name': 'PicGo',
						'href': 'http://soft4.51xiazai.cn/pcsoftware/txtx/558621.html',
					},
				],
				namerb: [{
						namerbt: [{
								'name': '小班',
								'href': ""
							},
							{
								'name': '中班',
								'href': ""
							},
							{
								'name': '大班',
								'href': ""
							},
							{
								'name': '幼小连接',
								'href': ""
							},
						],
						namerbb: [{
								'name': ['语文', '数学', '英语', '美术', '音乐'],
								'href': ""
							},
							{
								'name': ['1语文', '数学', '英语', '美术', '音乐'],
								'href': ""
							},
							{
								'name': ['2语文', '数学', '英语', '美术', '音乐'],
								'href': ""
							},
							{
								'name': ['3语文', '数学', '英语', '美术', '音乐'],
								'href': ""
							},
						]
					},
				],
				over(index) {
					this.num = index;
				},
				over1(index) {
					this.num1 = index;
				},
				move(){
					this.num=-1
				},
				move1(){
					this.num1=-1
				}

			}
		}
	}
</script>

<style>
	#V-Nav {
		width: 120rem;
		display: flex;
		flex-direction: row;
		position: absolute;
		left: 0
	}

	.nav-l a,
	.nav-r a {
		color: #000000;
		font-size: 2rem;
	}

	.nav-l {
		width: 20rem;
		display: flex;
		flex-direction: column;
		text-align: center;
	}

	.nav-l li {
		width: 20rem;
		height: 6rem;
		line-height: 6rem;
		border-right: 0.2rem #000000 solid;
		background: #FFFFF0;
	}

	.nav-r-t {
		width: 100rem;
		display: flex;
		flex-direction: row;
	}

	.nav-r-t li {
		width: 14.3rem;
		height: 6rem;
		line-height: 6rem;
		border-bottom: 0.2rem #000000 solid;
		text-align: center;
		background: #FFFFF0;
	}

	.nav-r-t li:hover {
		background-color: #A2B5CD;
	}

	.nav-l li:hover {
		background-color: #EEE5DE;
	}

	.nav-r-b {
		width: 100rem;
		height: 36rem;
		display: flex;
		flex-direction: column;
		background-color: #EEE5DE;
	}

	.nav-r-b li:hover {
		background-color: #8B8989;
	}

	.nav-r-b-t {
		width: 100rem;
		height: 6rem;
		display: flex;
		flex-direction: row;
	}

	.nav-r-b-t a,
	.nav-r-b-b a {
		line-height: 6rem;
		font-size: 2rem;
	}

	.nav-r-b-t li {
		width: 10rem;
		height: 6rem;
		text-align: center;
	}

	.nav-r-b-b {
		width: 100rem;
		height: 26rem;
		display: flex;
		flex-direction: row;
		float: left;
	}

	.nav-r-b-b li {
		width: 10rem;
		height: 6rem;
		display: flex;
		flex-direction: row;
	}
</style>
