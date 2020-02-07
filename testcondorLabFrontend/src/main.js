// file of setting
import vue from 'vue';
import app from './app'
import task from './components/task'
import user from './components/user'

// declare module for add icon 
import { library } from '@fortawesome/fontawesome-svg-core'

//declare the library icon:https://fontawesome.com/icons?d=gallery
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faFileArchive } from '@fortawesome/free-solid-svg-icons'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faBan} from '@fortawesome/free-solid-svg-icons'
// declare library FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// add icon
library.add(faPlus);
library.add(faTrash);
library.add(faFileArchive);
library.add(faSave);
library.add(faTimes);
library.add(faUserPlus);
library.add(faEdit);
library.add(faBan);
//declare components
vue.component('font-awesome-icon', FontAwesomeIcon)
vue.component('taskComponent', task)
vue.component('userComponent', user)

// config status of production
vue.config.productionTip = false

// start vue
new vue({
  el: '#app',
  components: { app },
  template: '<app/>'
})
