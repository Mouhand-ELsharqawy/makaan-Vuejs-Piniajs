import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import AgentView from '../views/AgentView.vue'
import addAgentView from '../views/agents/addAgentView.vue'
import singleAgentView from '../views/agents/singleAgentView.vue'
import updateAgentView from '../views/agents/updateAgentView.vue'
import ContactView from '../views/ContactView.vue'
import ListView from '../views/ListView.vue'
import addListView from '../views/lists/addListView.vue'
import singleListView from '../views/lists/singleListView.vue'
import updateListView from '../views/lists/updateListView.vue'
import TypeView from '../views/TypeView.vue'
import addTypeView from '../views/types/addTypeView.vue'
import singleTypeView from '../views/types/singleTypeView.vue'
import updateTypeView from '../views/types/updateTypeView.vue'
import TestimonialView from '../views/TestimonialView.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/agent',
    name: 'Agent',
    component: AgentView
  },
  {
    path: '/addagent',
    name: 'AddAgent',
    component: addAgentView
  },
  {
    path: '/singleagent',
    name: 'SingleAgent',
    component: singleAgentView
  },
  {
    path: '/updateagent',
    name: 'UpdateAgent',
    component: updateAgentView
  },
  {
    path: '/addlist',
    name: 'AddList',
    component: addListView
  },
  {
    path: '/singlelist',
    name: 'SingleList',
    component: singleListView
  },
  {
    path: '/updatelist',
    name: 'UpdateList',
    component: updateListView
  },
  {
    path: '/addtype',
    name: 'AddType',
    component: addTypeView
  },
  {
    path: '/singletype',
    name: 'SingleType',
    component: singleTypeView
  },
  {
    path: '/updatetype',
    name: 'UpdateType',
    component: updateTypeView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView
  },
  {
    path: '/list',
    name: 'List',
    component: ListView
  },
  {
    path: '/testimonial',
    name: 'Testimonial',
    component: TestimonialView
  },
  {
    path: '/type',
    name: 'Type',
    component: TypeView
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
