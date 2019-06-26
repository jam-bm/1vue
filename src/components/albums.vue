<template>
	<div>
		<h1>Alboms</h1>
		
		<ol  v-if="!$route.params.id">
			<li v-for="album in $store.state.albumsList" :key="album.id">
				
				<router-link :to="'/albums/' + album.id" >{{album.title}}</router-link>
			</li>
		</ol>
		<hr>
		<router-view/>	
	</div>
</template>
<script>
	export default {
	mounted() {
		this.$store.dispatch('getAlbums')
	}
}
</script>
<style>
	
</style>