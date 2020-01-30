import vue from 'vue';
import app from './components/app';



new vue({
  el: '#app',
  render: h => h(app)
})
