import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	usersList: [],
  	postsList: [],
  	commentsList: [],
  	albumsList: [],
  	photosList: [],
  	todosList: [],
    filterTitle: '',
  },
  mutations: {
  	setUsersList(state, payload) {
  		state.usersList = payload
  	},
  	setPostsList(state, args) {
  		state.postsList = args
  	},
  	setCommentsList(state, playback) {
  		state.commentsList = playback
  	},
  	setAlbumsList(state, playback) {
  		state.albumsList = playback
  	},
  	setPhotosList(state, playback) {
  		state.photosList = playback
  	},
  	setTodosList(state, playback) {
  		state.todosList = playback
  	},
    setFilterTitle(state, arg) {
      state.filterTitle = arg
    }
  },
  getters: {
      filerList(state) {
        // if(router.currentRoute && router.currentRoute.name){
          console.log(state[router.currentRoute.name+'List'])
          return state[router.currentRoute.name+'List']
          .filter(item => item[router.currentRoute.meta.filterValue || 'title' ]
            .toLowerCase().indexOf(state.filterTitle.toLowerCase()) !== -1)
        // }
      }
  },
  actions: {
  	getApi({}, url) {
  		return fetch( 'https://jsonplaceholder.typicode.com/' + url)
  		.then(res => res.json())
  		.then(data => data)
  		.catch(error => alert(error))
  	},
  	async getUsers({commit, dispatch}){
  		let data = await dispatch('getApi', 'users')
  		commit('setUsersList', data)
  	},
  	async getPosts({commit, dispatch}){
  		let data = await dispatch('getApi', 'posts')
  		commit('setPostsList', data)
  	},
  	async getComments({commit, dispatch}){
  		let data = await dispatch('getApi', 'comments')
  		commit('setCommentsList', data)
  	},
  	async getAlbums({commit, dispatch}){
  		let data = await dispatch('getApi', 'albums')
  		commit('setAlbumsList', data)
  	},
  	async getPhotos({commit, dispatch}){
  		let data = await dispatch('getApi', 'photos')
  		commit('setPhotosList', data)
  	},
  	async getTodos({commit, dispatch}){
  		let data = await dispatch('getApi', 'todos')
  		commit('setTodosList', data)
  	}
  }
})
