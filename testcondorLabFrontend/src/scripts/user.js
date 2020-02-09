// import module of axios for the request
import axios from "axios";

export default {

  name: "user",
// function for declare the variables a use
  data() {
    return {
      show: 0,
      statusEdit: 0,
      idUser: 0,
      userName: "",
      email: "",
      arrayUsers: []
    };
  },
  // function for declare methods a use
  methods: {
    showForm() {
      this.show = 1;
    },
    hideForm() {
      this.show = 0;
    },
    createUser() {
      let me = this;
      if (this.validateControls() == true) {
        axios
          .post("http://localhost:3000/createUser", {
            userName: me.userName,
            email: me.email
          })
          .then(() => {
            me.clearControls();
            me.listUsers();
            me.hideForm();
          })
          .catch(err => {
            console.error(err);
          });
      }
    },
    listUsers() {
      let me = this;
      axios
        .get("http://localhost:3000/listUsers")
        .then(res => {
          me.arrayUsers = res.data;
        })
        .catch(err => {
          console.error(err);
        });
    },
    updateUser() {
      let me = this;
      if (this.validateControls() == true) {
        axios
          .put("http://localhost:3000/updateUser", {
            id: me.idUser,
            userName: me.userName,
            email: me.email
          })
          .then(() => {
            me.clearControls();
            me.listUsers();
            me.hideForm();
          })
          .catch(err => {
            console.error(err);
          });
      }
    },
    deleteUser(idUser) {
      let me = this;
      let option = confirm("¿ you want to confirm the deletion ?");
      if (option) {
        axios
          .delete("http://localhost:3000/deleteUser", {
            params: { id: idUser }
          })
          .then(() => {
            me.listUsers();
            console.log('bien')
          })
          .catch(err => {
            console.error(err);
          });
      }
    },
    editUser(array) {
      let option = confirm("¿ Do you want to edit the user ?");
      if (option) {
        this.statusEdit = 1;
        this.idUser = array.idUser;
        this.userName = array.userName;
        this.email = array.email;
        this.showForm();
      }
    },
    clearControls() {
      this.statusEdit = 0;
      this.idUser = 0;
      this.userName = '';
      this.email = '';
    },
    cancel() {
      let option = confirm('¿ want to cancel ?')
      if (option) {
        this.hideForm();
        this.clearControls();
      }
    },
    validateControls() {
      if (this.userName == '') {
        alert('! white a user !')
      } else if (this.email == '') {
        alert('! white a email ¡')
      } else {
        return true;
      }
      return false;
    }
  },
  //function that runs which file finishes loading
  mounted() {
    this.listUsers();
  }
};