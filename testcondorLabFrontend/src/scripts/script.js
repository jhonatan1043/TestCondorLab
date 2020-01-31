import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      statusOpen: 0,
      statusProgress: 1,
      statusCompleteds: 2,
      arrayCards: [{title:'pending',array: []},
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
        })
        .catch(err => {
          console.error(err);
        });
    },
    listTasks() {
      let me = this;
      axios.get('http://localhost:3000/listTask')
        .then(res => {
           let arrayTask = res.data[0];
           me.arrayCards[0]['array'] = arrayTask;
           console.log(me.arrayCards[0]['array']);
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
        statusRegistry: 0
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