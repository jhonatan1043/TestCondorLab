import vue from 'vue';
import app from './components/app'
import popper from 'popper.js'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faBars }  from '@fortawesome/free-solid-svg-icons'
import { faEdit }  from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlus)
library.add(faTrash)
library.add(faUsers)
library.add(faSave)
library.add(faTimes)
library.add(faBars)
library.add(faEdit)
 
vue.component('font-awesome-icon', FontAwesomeIcon)
vue.component('popper',popper)

vue.config.productionTip = false

new vue({
  el: '#app',
  components: { app },
  template: '<app/>'
})
