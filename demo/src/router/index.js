import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path:'/About',
		name:'About',
		component:()=>import("../views/About.vue")
	},
	{
		path:'/Video',
		name:'Video',
		component:()=>import("../views/Video.vue")
	},
	{
		path:'/NewsUpdate',
		name:'NewsUpdate',
		component:()=>import("../views/NewsUpdate.vue")
	},
	{
		path:"/Companyprofile",
		name:"Companyprofile",
		component:()=>import("../views/Companyprofile.vue")
	},
	{
		path:'/Login',
		name:'Login',
		component:()=>import("../views/Login.vue")
	},
  {
		path:'/enterprise',
		name:'enterprise',
		component:()=>import("../views/enterprise.vue")
	}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
