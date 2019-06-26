<template>
	<div>
        <button class="btn btn-primary" @click="$router.go(-1)">Back</button>
        <div class="row container">
	        <div v-for="photo in userData" :key="photo.id" class="col-3">

	            <p data-toggle="tooltip" :title="photo.url">
	            	<router-link :to="'/photos/' + photo.id" >
	            		<img :src="photo.thumbnailUrl" alt="url" style="width: 100%; height: auto;">
	            	</router-link> &nbsp;
	            </p>
	        </div>
        </div>
	</div>
</template>
<script>
	export default {
	mounted() {
		this.$store.dispatch('getPhotos')
	},
	computed: {
		userData() {
            return this.$store.state.photosList.filter( item => item.albumId == this.$route.params.id)
        }
	}
}
</script>
<style>
	
</style>