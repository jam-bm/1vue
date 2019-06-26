<template>
	<div>
		<h1>Hello users</h1>
		
		<ul v-if="!$route.params.id">
			<li v-for="user in $store.state.usersList" :key="user.id">
				<router-link :to="'/users/' + user.id" >{{user.name}}</router-link>
			</li>
		</ul>
		<hr>
		<div>
            <router-view/>
        </div>
	</div>
</template>

<script>
export default {
	mounted() {
		this.$store.dispatch('getUsers')
	}
}
	
</script>
<style>
	
</style>