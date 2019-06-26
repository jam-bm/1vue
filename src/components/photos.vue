<template>
	<div>
		<h1>Photos</h1>
		
		<ol v-if="!$route.params.id">
			<li v-for="photo in $store.state.photosList" :key="photo.id" data-toggle="tooltip" :title="photo.url">
				<router-link :to="'/photos/' + photo.id" >{{photo.title}}</router-link>
			</li>
		</ol>
		<hr>
		<router-view/>	
	</div>
</template>
<script>
	export default {
	mounted() {
		this.$store.dispatch('getPhotos')
	}
}
</script>
<style>
	
</style>