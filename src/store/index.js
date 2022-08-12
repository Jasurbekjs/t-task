import { createStore } from 'vuex'

import appStore from './appStore'

export const store = createStore({
  modules:{
    appStore
  }
})