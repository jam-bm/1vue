<template>
	<div>
		<button class="btn btn-primary" @click="$router.go(-1)">Back</button>
        <div class="row">
            <div class="col-8">
                <ul>
                    <li>
                        PostID: {{commentData.postId}}
                    </li>
                    <li>
                        id: {{commentData.id}}
                    </li><li>
                        name: {{commentData.name}}
                    </li><li>
                        email: {{commentData.email}}
                    </li><li>
                        body: {{commentData.body}}
                    </li>
                </ul>
            </div>
            <div class="col">
                <h1>Post</h1>
                <router-link :to="'/posts/' + commentData.postId" >Post by id :{{commentData.postId}}</router-link>
            </div>
        </div>
	</div>
</template>
<script>
	export default {
    computed: {
		commentData() {
            return this.$store.state.commentsList.find( item => item.id == this.$route.params.id)
        }
	}
}
</script>
<style>
	
</style>