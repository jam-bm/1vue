<template>
	<div>
		<button class="btn btn-primary" @click="$router.go(-1)">Back</button>
        <div class="row">
            <div class="col-8">
                <ul>
                    <li>
                         ID: {{todoData.id}}
                    </li>
                    <li>
                         userID: {{todoData.userId}}
                    </li><li>
                         title: {{todoData.title}}
                    </li><li>
                         completed: <input type="checkbox" name="vehicle" value="Bike" :checked="todoData.completed">
                    </li>
                </ul>
            </div>
            <div class="col">
                <h1>User</h1>
                <router-link :to="'/users/' + todoData.userId" >User by id :{{todoData.userId}}</router-link>
            </div>
        </div>
	</div>
</template>
<script>
	export default {
    computed: {
		todoData() {
            return this.$store.state.todosList.find( item => item.id == this.$route.params.id)
        }
	}
}
</script>
<style>
	
</style>