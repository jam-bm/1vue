<template>
	<div>
        <button class="btn btn-primary" @click="$router.go(-1)">Back</button>
        <div v-for="post in userData" :key="post.id">

            <p data-toggle="tooltip" :title="post.body">
            	<router-link :to="'/posts/' + post.id" >{{post.id}} : {{post.title}}</router-link>
            </p>
        </div>
	</div>
</template>
<script>
	export default {
	mounted() {
		this.$store.dispatch('getPosts')
	},
	computed: {
		userData() {
            return this.$store.state.postsList.filter( item => item.userId == this.$route.params.id)
        }
	}
}
</script>
<style>
	
</style>