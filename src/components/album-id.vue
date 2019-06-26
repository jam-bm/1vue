<template>
	<div>
		<button class="btn btn-primary" @click="$router.go(-1)">Back</button>
        <div class="row">
            <div class="col-8">
                <div>
                    <ul>
                        <li v-for="(value, key) in albumData" :key="key">
                             {{key}} : {{value}}
                        </li>
                    </ul>
                </div>
                <router-link class="btn btn-primary" :to="{name: 'album-photo'} ">Photos</router-link>
                
            </div>
            <div class="col">
                <h1>User</h1>
                <router-link :to="'/users/' + albumData.userId" >User by id :{{albumData.userId}}</router-link>
            </div>
        </div>
        <hr>
        <router-view/>
	</div>
</template>
<script>
	export default {
    computed: {
		albumData() {
            return this.$store.state.albumsList.find( item => item.id == this.$route.params.id)
        }
	}
}
</script>
<style>
	
</style>