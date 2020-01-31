import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      statusOpen: 0,
      statusProgress: 1,
      statusCompleteds: 2,
      arrayCards: [{title:'open',array: []},
                  {title:'Progress',array: []},
                  {title:'Completeds',array: []}],
      arrayListUsers: []
    };
  },
  methods: {
    listUsers() {
      let me = this;
      axios
        .get("http://localhost:3000/listUsers")
        .then(res => {
          me.arrayListUsers = res.data;
          console.log(me.arrayListUsers);
        })
        .catch(err => {
          console.error(err);
        });
    },
    listTasks() {
      let me = this;
      axios.get('http://localhost:3000/listTask')
        .then(res => {
          let arrayListTask = res.data;
          me.arrayCards[0]['array'] = arrayListTask.filter(statusTask => {
             return statusTask = me.statusOpen;
          })
          console.log(arrayListTask);
          console.log(arrayListTask.filter(statusTask => {
            return statusTask = me.statusOpen;
         }));
        })
        .catch(err => {
          console.error(err);
        })
    },
    taskAdd(array) {
      array.push({
        id: 0,
        title: '',
        task: '',
        StatusRegistry: 0
      });
    },
    taskRemove(index, array) {
      console.log(array)
      array.splice(index, 1);
    }
  },
  mounted() {
   this.listTasks()
  }
};