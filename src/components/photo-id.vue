<template>
	<div>
		<button class="btn btn-primary" @click="$router.go(-1)">Back</button>
        <div class="row">
            <div class="col-10">
                <ul>
                    <!-- <li v-for="(value, key) in photoData" :key="key">
                         {{key}} : {{value}}
                    </li> -->
                    <li>
                         ID: {{photoData.id}}
                    </li>
                    <li>
                         albumID: {{photoData.albumId}}
                    </li>
                    <li>
                         title: {{photoData.title}}
                    </li>
                    <li>
                         <img :src="photoData.url" alt="url">
                        <hr>
                    </li>
                    <li>
                         <img :src="photoData.thumbnailUrl" alt="url">
                    </li>
                </ul>
            </div>
            <div class="col">
                <h1>Album</h1>
                <router-link :to="'/albums/' + photoData.albumId" >Album by id :{{photoData.albumId}}</router-link>
            </div>
        </div>
	</div>
</template>
<script>
	export default {
    computed: {
		photoData() {
            return this.$store.state.photosList.find( item => item.id == this.$route.params.id)
        }
	}
}
</script>
<style>
	
</style>