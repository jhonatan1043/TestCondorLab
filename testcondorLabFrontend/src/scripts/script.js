// We import axios for requests
import axios from "axios";

export default {
 
  name: "app",
//we declare in the data function the variables to use
  data() {
    return {
      statusPending: 0,
      statusProgress: 1,
      statusCompleteds: 2,
      search: '',
      arrayCards: [{ title: 'pending', array: [] },
      { title: 'Progress', array: [] },
      { title: 'Completeds', array: [] }],
      arrayListUsers: []
    };
  },
  //in the function methods we declare the methods or functions that we will use in the project
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
    createTask(arrayCreate) {
      let me = this;
      if (arrayCreate.idUser != 0) {
        axios.post('http://localhost:3000/createTask', {
          'task': arrayCreate.task,
          'title': arrayCreate.title,
          'idUser': arrayCreate.idUser,
          'statusTask': arrayCreate.statusTask
        })
          .then(res => {
            me.list();
          })
          .catch(err => {
            console.error(err);
          })
      } else {
        alert('¡Falta asignar el usuario!')
      }
    },
    listTasks(status) {
      let me = this;
      axios.get('http://localhost:3000/listTask', {
        params: {
          statusTask: status,
          search: me.search
        }
      })
        .then(res => {
          let arrayTask = res.data;
          console.log(arrayTask)
          if (status == me.statusPending) {
            me.arrayCards[0]['array'] = arrayTask;
          } else if (status == me.statusProgress) {
            me.arrayCards[1]['array'] = arrayTask;
          } else if (status == me.statusCompleteds) {
            me.arrayCards[2]['array'] = arrayTask;
          }

        })
        .catch(err => {
          console.error(err);
        })
    },
    updateTask(arrayUpdate) {
      let me = this;
      if (arrayUpdate.idUser != 0) {
        axios.put('http://localhost:3000/updateTask', {
          id: arrayUpdate.idTask,
          task: arrayUpdate.task,
          title: arrayUpdate.title,
          idUser: arrayUpdate.idUser,
          statusTask: arrayUpdate.statusTask
        })
          .then(res => {
            me.list();
          })
          .catch(err => {
            console.error(err);
          })
      } else {
        alert('¡ assign a user to the task !')
      }
    },
    deleteTask(arrayDelete) {
      let option = confirm('¿ do you want to delete the task ?')
      let me = this;
      if (option == true) {
        axios.delete('http://localhost:3000/deleteTask', {
          params: { id: arrayDelete.idTask }
        })
          .then(res => {
            me.list();
          })
          .catch(err => {
            console.error(err);
          })
      }
    },
    addTask(array, indexStatus) {
      array.push({
        idTask: 0,
        title: '',
        task: '',
        statusTask: indexStatus,
        idUser: 0,
        statusRecord: 0
      });
    },
    removeTask(index, array) {
      if (array[index]['idTask'] != 0) {
        this.$set(array[index], 'statusRecord', 1)
      } else {
        array.splice(index, 1);
      }
    },
    editTask(arrayEdit) {
      this.$set(arrayEdit, 'statusRecord', 0)
    },
    changeStatus(array) {
      let me = this;
      axios.put('http://localhost:3000/changeStatusTask', {
        id: array.idTask,
        statusTask: array.statusTask
      })
        .then(res => {
          me.list();
        })
        .catch(err => {
          console.error(err);
        })
    },
    list() {
      this.listTasks(this.statusPending);
      this.listTasks(this.statusProgress);
      this.listTasks(this.statusCompleteds);
    },
    registerTask(array) {
      if (array.idTask != 0) {
        this.updateTask(array);
      } else {
        this.createTask(array);
      }
    }
  },
  //function that runs which file finishes loading
  mounted() {
    this.listUsers();
    this.list()
  }
};