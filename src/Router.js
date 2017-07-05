import Vue from 'vue'
import VueRouter from 'vue-router'
import Parent from './transition.vue'
Vue.use(VueRouter)


const Home={
	template:`
	   <div>
	   	 <h2>Home</h2>
	   	 <p>This is Home</p>
	   </div>
	`
}

const Page404={
	template: `
	  <div>
	    <h3>error</h3>
	  </div>
	`,
	beforeRouteEnter:(to,from,next)=>{
		    console.log("from..."+from.path);
			console.log("to..."+to.path);
			next()
	},
	beforeRouteLeave:(to,from,next)=>{
		console.log("from.."+from.path);
			console.log("to...."+to.path);
			next()
		
	}
}

var router =new VueRouter({
	mode:'history',
	base:__dirname,
	routes:[
	{path:'/',component:Home},
	{path:'/Parent',component:Parent,
		beforeEnter:(to,from,next)=>{
			next();
		}
	},
	{path:'*',component:Page404}  //这个*的路由一般用来处理404,必须写在最后一个,否则他之后的都会显示404

	]
	
	
})


new Vue({
	router,
	data(){
		
		return {
			a:'fade'
		}
	},
	template:`
	  <div id="app">
	   <button @click="advance">前进</button>
	   <button @click="back">返回</button>
	   <button @click="toHome">Home</button>
	   <button @click="query">query</button>
	   
	  
	  	<h1>This is transition</h1>
	  	<ul>
	  		<li><router-link to="/">/</router-link></li>
	  		<li><router-link to="/Parent">Parent</router-link></li>
	  		<li><router-link to="jlkjk">404</router-link></li> 
	  	</ul>
		<transition :name="a" mode="out-in">
			 <router-view></router-view>
	 	 </transition>
	  </div>
	`,
	watch:{
		'$route'(to,from){
			if(from.path=='/Parent'){
				this.a = 'fade'
			}
			else{
				this.a = 'fade2'
			}
			
		}
		
		
	},
	methods:{
		advance:function(){
			router.go(1);
		},
		back:function(){
			router.go(-1);
		},
		toHome:function(){
			router.push('/')
		},
		query:function(){
			router.push({path:'/',query:{a:1,b:2}})
		}
		
		
		
		
		
	}
	
	
}).$mount('#app')


















