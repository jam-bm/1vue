<template>
	<div>
		<h1>Todos</h1>
		
		<ol v-if="!$route.params.id">
			<li v-for="user in $store.state.todosList" :key="user.id" data-toggle="tooltip" :title="user.userId">
				<router-link :to="'/todos/' + user.id" >
				<input type="checkbox" name="vehicle" value="Bike" :checked="user.completed">{{user.title}}
			</router-link>
			</li>
		</ol>
		<hr>
		<router-view/>
	</div>
</template>
<script>
	export default {
	mounted() {
		this.$store.dispatch('getTodos')
	}
}
</script>
<style>
	
</style>

