import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import slide from '../components/slide/slide.vue'
import click from '../components/click/click.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/slide',
      name: 'slide',
      component: slide
    },
    {
      path: '/click',
      name: 'click',
      component: click
    }
  ]
})
