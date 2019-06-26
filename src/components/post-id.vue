<template>
	<div>
		<button class="btn btn-primary" @click="$router.go(-1)">Back</button>
		<div class="row">
			<div class="col-8">
		        <div>
		            <ul>
		                <li v-for="(value, key) in postData" :key="key">
		                     {{key}} : {{value}}
		                </li>
		            </ul>
		        </div>
		        <router-link class="btn btn-primary" :to="{name: 'post-comment'} ">Comments</router-link>
				
	        </div>
	        <div class="col">
	        	<h1>User</h1>
	        	<router-link :to="'/users/' + postData.userId" >User by id :{{postData.userId}}</router-link>
	        </div>
        </div>
        <hr>
        <router-view/>
	</div>
</template>
<script>
	export default {
    computed: {
		postData() {
            return this.$store.state.postsList.find( item => item.id == this.$route.params.id)
        }
	}
}
</script>
<style>
	
</style>