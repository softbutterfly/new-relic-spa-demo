import Vue from 'vue'
import VueRouter from 'vue-router'

// import { redirect } from './guards'
import {
  INDEX,
  DOCS,
  PLUGIN,
  EVENTS,
  FORMS,
  ERROR,
  NOT_FOUND
} from './names'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: INDEX,
    component: () => import(/* webpackChunkName: "index" */ '@/views/Index.vue'),
    redirect: {
      name: DOCS
    },
    children: [
      /**
       * Docs routes
       */
      {
        path: 'docs/',
        name: DOCS,
        component: () => import(/* webpackChunkName: "docs" */ '@/views/Docs/Index.vue'),
        redirect: {
          name: PLUGIN
        },
        children: [
          {
            path: 'plugin/',
            name: PLUGIN,
            component: () => import(/* webpackChunkName: "plugin" */ '@/views/Docs/Plugin.vue')
          },
          {
            path: 'events/',
            name: EVENTS,
            component: () => import(/* webpackChunkName: "events" */ '@/views/Docs/Events.vue')
          },
          {
            path: 'forms/',
            name: FORMS,
            component: () => import(/* webpackChunkName: "forms" */ '@/views/Docs/Forms.vue')
          }
        ]
      },
      /**
       * Error routes
       */
      {
        path: 'error/',
        name: ERROR,
        component: () => import(/* webpackChunkName: "error" */ '@/views/Error/Index.vue'),
        redirect: {
          name: NOT_FOUND
        },
        children: [
          {
            path: '404/',
            name: NOT_FOUND,
            component: () => import(/* webpackChunkName: "events" */ '@/views/Error/NotFound.vue')
          }
        ]
      }
    ]
  },
  /**
   * Unknown routes handling
   */
  {
    path: '*',
    redirect: {
      name: NOT_FOUND
    }
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let newrelic = window.newrelic || null

  if (to.name === NOT_FOUND && newrelic !== null) {
    let interaction = newrelic.interaction()
    interaction.setAttribute('errorCode', '404')
  }

  next()
})
export default router
