import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      arraylistStatus: [{
        statusOpen: 0,
        statusProgress: 1,
        statusCompleteds: 2
      }],
      arrayListUsers: [],
      arrayOpens: [],
      arrayProgress: [],
      arrayCompleteds: []
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
    listTasks(status){
      let me = this;
      axios.get('http://localhost:3000/listTasks',{
       status: status 
      })
      .then(res => {
        if(status == me.arraylistStatus.statusOpen){
          me.arrayOpens = res.data;
        }else if(status == me.arraylistStatus.statusProgress){
          me.arrayProgress = res.data;
        }else if(status == me.arraylistStatus.statusCompleteds){
          me.arrayCompleteds = res.data;
        }
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
      array.splice(index, 1);
    }
  },
  mounted() {
    this.listTasks(this.arraylistStatus.statusOpen);
    this.listTasks(this.arraylistStatus.statusProgress);
    this.listTasks(this.arraylistStatus.statusCompleteds);
  }
};