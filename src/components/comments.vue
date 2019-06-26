<template>
	<div>
		<h1>Comments</h1>
		<ol v-if="!$route.params.id">
			<li v-for="comment in $store.state.commentsList" :key="comment.id" data-toggle="tooltip" :title="comment.body">
				<router-link :to="'/comments/' + comment.id" >{{comment.name}}</router-link>
			</li>
		</ol>
		<hr>
		<router-view/>
	</div>
</template>

<script>
	export default {
	mounted() {
		this.$store.dispatch('getComments')
	}
}
</script>

<style>
	
</style>