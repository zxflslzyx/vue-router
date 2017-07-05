import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home={template:'<h1>Home</h1>'}
const first={template:'<h1>lala</h1>'}
const lala={template:`
   <div>
     <h1>main</h1>
     <router-view></router-view>
   </div>

`}
const first1={template:'<h1>first1</h1>'}
const first2={template:'<h1>first2</h1>'}


const router = new VueRouter({
	
	
	mode:'history',
	base:__dirname,
	routes:[
	{path:'/',name:'Home',component:Home},
	{path:'/first',name:'first',component:lala,
	 children:[
	   {path:'/',name:'Home-first',component:first},
	   {path:'first1',name:'Home-first-1',component:first1},
	   {path:'first2',name:'Home-first-2',component:first2,alias:'/gogo'}
	 ]
	},
	{path:'/aaa/:id',component:first1},
	{path:'/bbb/:id',redirect:'/aaa/:id'},
	{
		path:'/ccc/:id',
		redirect:xxxx=>{
			const {hash,params,query}=xxxx;
			 if(params.id=='001'){
			 	return '/'
			 }
		}
	}

	
	]
})

new Vue({
	router,
	template:`
	 <div>
	    {{$route.name}}
	    <h1>导航</h1>
	    <ul>
		    <li><router-link to="/">/</router-link></li>
	      	<li><router-link to="/first">first</router-link></li>
	      	     <ol>
	      	       <li><router-link to="/first/first1">first1</router-link></li>
	      	       <li><router-link to="/first/first2">first2</router-link></li>
	      	       <li><router-link to="/gogo">gogo</router-link></li>
	      	       
	      	     </ol>
	      	     
	      	 <li> <router-link  to="/aaa/123"> second </router-link></li>
	      	 <li> <router-link  to="/bbb/456"> third </router-link></li>
	      	 <li> <router-link  to="/ccc/001"> third </router-link></li>
	    </ul>
	    
	    {{$route.params.id}}
	        <router-view></router-view>
	   
	 </div>
	  
	 
	
	`
}).$mount('#app')
