<template>
	<div>
        <div>
            <button class="btn btn-primary" @click="$router.go(-1)">Back</button>
            <ul>
                <li v-for="(value, key) in userData" :key="key">
                     {{key}} : {{value}}
                </li>
            </ul>
        </div>
        <router-link class="btn btn-primary" :to="{name: 'user-post'} ">Post</router-link>
        <router-link class="btn btn-primary" :to="{name: 'user-album'} ">Album</router-link>
        <router-link class="btn btn-primary" :to="{name: 'user-todo'} ">Todo</router-link>
        <hr>
        <router-view/>
	</div>
</template>

<script>
	export default {
    computed: {
		userData() {
            return this.$store.state.usersList.find( item => item.id == this.$route.params.id)
        }
	}
}
</script>

<style>

</style>