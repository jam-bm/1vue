import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./components/home.vue'),

    },
    {
      path: '/users',
      name: 'users',
      component: () => import('./components/users.vue'),
      children: [
        {
          path: ':id',
          name: 'user-id',
          component: () => import('./components/user-page.vue'),
          children: [
            {
              path: 'post',
              name: 'user-post',
              component: () => import('./components/user-post.vue')
            },
            {
              path: 'album',
              name: 'user-album',
              component: () => import('./components/user-album.vue')
            },
            {
              path: 'todo',
              name: 'user-todo',
              component: () => import('./components/user-todo.vue')
            },
            
          ]
        }
       ]
       , 
    },
    {
       path: '/posts',
       name: 'posts',
       component: () => import('./components/posts.vue'),
       meta: {
         filterValue: 'title'
       },
       children: [
         {
           path: ':id',
           name: 'post-id',
           component: () => import('./components/post-id.vue'),
           children: [
             {
               path: 'comment',
               name: 'post-comment',
               component: () => import('./components/post-comment.vue')
             }
           ]
         }
       ]
    },
    {
      path: '/comments',
      name: 'comments',
      component: () => import('./components/comments.vue'),
      meta: {
         filterValue: 'name'
       },
      children: [
         {
           path: ':id',
           name: 'comment-id',
           component: () => import('./components/comment-id.vue')
         }
       ]
    },
    {
      path: '/albums',
      name: 'albums',
      component: () => import('./components/albums.vue'),
      children: [
         {
           path: ':id',
           name: 'album-id',
           component: () => import('./components/album-id.vue'),
           children: [
             {
               path: 'photo',
               name: 'album-photo',
               component: () => import('./components/album-photo.vue')
             }
           ]
         }
       ]
    },
    {
      path: '/photos',
      name: 'photos',
      component: () => import('./components/photos.vue'),
      children: [
         {
           path: ':id',
           name: 'photo-id',
           component: () => import('./components/photo-id.vue')
         }
       ]
    },
    {
      path: '/todos',
      name: 'todos',
      component: () => import('./components/todos.vue'),
      children: [
         {
           path: ':id',
           name: 'todo-id',
           component: () => import('./components/todo-id.vue')
         }
       ]
    },
  ]
})
