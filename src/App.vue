<template>
  <div id="app" >
    
    <div class="navbar nav sticky-top">
      <router-link to="/">Home</router-link>
      <router-link to="/users">Users</router-link>
      <router-link to="/posts">Posts</router-link>
      <router-link to="/comments">Comments</router-link>
      <router-link to="/albums">Albums</router-link>
      <router-link to="/photos">Photos</router-link>
      <router-link to="/Todos">Todos</router-link>
      <!-- <input type="text" :value="$store.state.filterTitle" 
      @input="$store.commit('setFilterTitle', $event.target.value)" 
      placeholder="Enter text" class="ml-auto"> -->
    </div>
    <div class="content container">
      <div >
        <router-view/>
      </div>
      <!-- <div class="col-4" v-if="$route.name != 'home' && !$route.params.id">
        <div>
            <div  v-for="(item, i) in getList" :key="i">
                {{item.id}} : {{item[$route.meta.filterValue || 'title']}}
            </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
  export default {
  watch: {
    '$route'() {
      console.log('Clear search input')
      this.$store.commit('setFilterTitle', '')
    }
  },
  mounted() {
    this.$store.dispatch('getPosts')
    this.$store.dispatch('getUsers')
    this.$store.dispatch('getComments')
    this.$store.dispatch('getAlbums')
    this.$store.dispatch('getPhotos')
    this.$store.dispatch('getTodos')
  },
  computed: {
    getList() {
      return this.$store.getters.filerList
    }
    // filerList() {
    //  if(this.$route.name == 'users' || this.$route.name == 'comments') {
    //     return this.$store.state[this.$route.name+'List'].filter(item => item.name.toLowerCase().indexOf(this.$store.state.filterTitle.toLowerCase()) !== -1)
    //   }
    //   return this.$store.state[this.$route.name+'List'].filter(item => item.title.toLowerCase().indexOf(this.$store.state.filterTitle.toLowerCase()) !== -1)
    // }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.nav {
  background-color: #FFFFFF;
  border: 1px solid black;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10px;
}

.nav a.router-link-exact-active {
  color: #42b983;
}

.btn {
  margin: 10px;
}

.content {
  padding-right: 20px;
  padding-left: 20px;
}

</style>