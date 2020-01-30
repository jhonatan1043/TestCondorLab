import vue from 'vue';
import app from './components/app';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlus)
library.add(faTrash)
 
vue.component('font-awesome-icon', FontAwesomeIcon)
 
vue.config.productionTip = false

new vue({
  el: '#app',
  components: { app },
  template: '<app/>'
})
