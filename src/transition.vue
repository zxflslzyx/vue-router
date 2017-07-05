<template>
	<div>
		
		<button @click="show = !show">show </button>
		<transition name="fade">
			<p v-show="show"> Hello World</p>
		</transition>
		
	</div>
	
</template>


<script >
	export default{
		name:'demo',
		data (){
			return {
				show :true
			}
		}
	}
</script>

<style scoped>
	.fade-enter-active,.fade-leave-active{
		transition: opacity  0.5s;
	}
	
	.fade-enter,.fade-leave{
		opacity:0;
	}
	
</style>
