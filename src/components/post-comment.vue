<template>
	<div>
        <button class="btn btn-primary" @click="$router.go(-1)">Back</button>
        <div v-for="comment in userData" :key="comment.id">

            <p data-toggle="tooltip" :title="comment.body">
            	<router-link :to="'/comments/' + comment.id" >{{comment.id}} : {{comment.name}}</router-link>
            </p>
        </div>
	</div>
</template>
<script>
	export default {
	mounted() {
		this.$store.dispatch('getComments')
	},
	computed: {
		userData() {
            return this.$store.state.commentsList.filter( item => item.postId == this.$route.params.id)
        }
	}
}
</script>
<style>
	
</style>