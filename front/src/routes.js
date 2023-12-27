import HomePage from './pages/HomePage.vue'
import LoginPage from './pages/LoginPage.vue'
import RegisterPage from './pages/RegisterPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import CreateAndUpdateNote from './pages/CreateAndUpdateNote.vue'
import NotesPage from './pages/NotesPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomePage,
      children: [
        { path: '/', component: NotesPage },
        { path: '/note/create', component: CreateAndUpdateNote },
        {
          path: '/note/update/:id',
          component: CreateAndUpdateNote,
        },
      ],
    },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
  ],
})

export { router }
