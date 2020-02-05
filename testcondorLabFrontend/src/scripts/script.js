import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      statusPending: 0,
      statusProgress: 1,
      statusCompleteds: 2,
      arrayCards: [{ title: 'pending', array: [] },
      { title: 'Progress', array: [] },
      { title: 'Completeds', array: [] }],
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
    createTask(arrayCreate) {
      let me = this;
      if (arrayCreate[0]['idUser'] != 0) {
        axios.post('http://localhost:3000//createTask', {
          task: arrayCreate.task,
          title: arrayCreate.title,
          idUser: arrayCreate.idUser,
          statusTask: arrayCreate.statusTask
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
          statusTask: status
        }
      })
        .then(res => {
          let arrayTask = res.data;

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
      if (arrayUpdate[0]['idUser'] != 0) {
        axios.post('http://localhost:3000/updateTask', {
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
        alert('¡Falta asignar el usuario!')
      }
    },
    deleteTask(arrayDelete) {
      let me = this;
      axios.delete('http://localhost:3000/deleteTask', {
        id: arrayDelete.idTask
      })
        .then(res => {
          me.list();
        })
        .catch(err => {
          console.error(err);
        })
    },
    addTask(array, indexStatus) {
      array.push({
        idTask: 0,
        title: '',
        task: '',
        statusTask: indexStatus,
        idUser: 0
      });
    },
    removeTask(index, array) {
      if (array[index]['idTask'] != 0) {
        this.$set(array[index], 'statusRegistry', 1)
      } else {
        array.splice(index, 1);
      }
    },
    editTask(arrayEdit) {
      this.$set(arrayEdit, 'statusRegistry', 0)
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
    }

  },
  mounted() {
    this.listUsers();
    this.list()
  }
};