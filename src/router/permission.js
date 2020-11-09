import router from './index'
import cookies from 'js-cookie'
import axios from 'axios'

import store from '@/store'

// Login = @/view/login
const whiteList = ['Login']

router.beforeEach(async (to, from, next) => {
  if(whiteList.includes(to.name)) return next()

  let info = cookies.get('info')
  const token = to.query.token
  let decode = {}
  try {
    // check cookie or query
    if(!info && !token) throw new Error()
    if(info) decode = await axios.post('api/login', {token: info})
    if(token) {
      cookies.set('info', token)
      decode = await axios.post('api/login', {token})
    }
    store.dispatch('user/setName', decode.data)
    if(decode.data) return next()
    else return('/login')
  } catch (err) {
    // check fail
    console.log('fail')
    cookies.remove('info')
    return next('/login')
  }
})