<template>
	<div>
		<h1>Hello posts</h1>
		<div class="row">
			<ol v-if="!$route.params.id">
				<li v-for="post in $store.state.postsList" :key="post.id" data-toggle="tooltip" :title="post.body">
					<router-link :to="'/posts/' + post.id" >{{post.title}}</router-link>
				</li>
			</ol>
			<hr>
	        <router-view/>		
		</div>
	</div>
</template>

<script>
	export default {
	mounted() {
		this.$store.dispatch('getPosts')
	}
}
</script>

<style>
	
</style>