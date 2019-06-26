<template>
	<div>
        <button class="btn btn-primary" @click="$router.go(-1)">Back</button>
        <div v-for="album in userData" :key="album.id">

            <p>
            	<router-link :to="'/albums/' + album.id" >{{album.id}} : {{album.title}}</router-link>
            </p>
        </div>
	</div>
</template>
<script>
	export default {
	mounted() {
		this.$store.dispatch('getAlbums')
	},
	computed: {
		userData() {
            return this.$store.state.albumsList.filter( item => item.userId == this.$route.params.id)
        }
	}
}
</script>
<style>
	
</style>