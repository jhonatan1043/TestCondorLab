import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      statusOpen: 0,
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
      if (arrayCreate[0]['idUser'] != 0) {
        axios.post('http://localhost:3000//createTask', {
          task: arrayCreate.task,
          title: arrayCreate.title,
          idUser: arrayCreate.idUser,
          statusTask: arrayCreate.statusTask
        })
          .then(res => {
            this.listTasks();
          })
          .catch(err => {
            console.error(err);
          })
      } else {
        alert('¡Falta asignar el usuario!')
      }
    },
    listTasks() {
      let me = this;
      axios.get('http://localhost:3000/listTask')
        .then(res => {
          let arrayTask = res.data;
          me.arrayCards[0]['array'] = arrayTask;
          console.log(me.arrayCards[0]['array'])
        })
        .catch(err => {
          console.error(err);
        })
    },
    updateTask(arrayUpdate) {
      if (arrayUpdate[0]['idUser'] != 0) {
        axios.post('http://localhost:3000/updateTask', {
          id: arrayUpdate.id,
          task: arrayUpdate.task,
          title: arrayUpdate.title,
          idUser: arrayUpdate.idUser,
          statusTask: arrayUpdate.statusTask
        })
          .then(res => {
            this.listTasks();
          })
          .catch(err => {
            console.error(err);
          })
      } else {
        alert('¡Falta asignar el usuario!')
      }
    },
    deleteTask(arrayDelete) {
      axios.delete('http://localhost:3000/deleteTask', {
        id: arrayDelete.id
      })
        .then(res => {
          this.listTasks();
        })
        .catch(err => {
          console.error(err);
        })
    },
    addTask(array, indexStatus) {
      array.push({
        id: 0,
        title: '',
        task: '',
        statusRegistry: 0,
        statusTask: indexStatus,
        idUser: 0
      });
    },
    removeTask(index, array) {
      if (array[index]['id'] != 0) {
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
        id: array.id,
        statusTask: array.statusTask
      })
        .then(res => {
          me.listTasks();
        })
        .catch(err => {
          console.error(err);
        })
    }
  },
  mounted() {
    this.listUsers()
    this.listTasks()
  }
};