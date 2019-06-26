<template>
	<div>
        <button class="btn btn-primary" @click="$router.go(-1)">Back</button>
        <div v-for="todo in userData" :key="todo.id">

            <p>
            	<router-link :to="'/todos/' + todo.id" >{{todo.id}} : {{todo.title}} : <input type="checkbox" name="vehicle" value="Bike" :checked="todo.completed"></router-link>
            </p>
        </div>
	</div>
</template>
<script>
	export default {
	mounted() {
		this.$store.dispatch('getTodos')
	},
	computed: {
		userData() {
            return this.$store.state.todosList.filter( item => item.userId == this.$route.params.id)
        }
	}
}
</script>
<style>
	
</style>