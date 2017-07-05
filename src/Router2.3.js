import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
	mode:'history',
	base:__dirname,
	routes:[
	{path:'/:aaa'},
	{path:'/params/:aaa/:bbb'}
	]
})

new Vue({
	router,
	template:`
	 <div>
	    <ul>
		    <li>
		    	<router-link to="/333"> home</router-link>
	      	</li>
	      	
	      	<li>
	      		<router-link to="/params/111/333">params</router-link>
	      	</li>
	    </ul>

	    
	     
	        <h1>{{$route.params.aaa	}}</h1>
	   
	 </div>
	  
	 
	
	`
}).$mount('#app')
