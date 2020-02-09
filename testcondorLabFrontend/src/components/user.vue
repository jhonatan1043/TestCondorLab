<template>
  <div>
    <div class="card">
      <!--we validate the form and show a list of users  -->
      <template v-if="show == 0">
        <button type="button" class="btn btn-sm btn-secondary" @click="showForm()">
          <font-awesome-icon icon="plus" />
        </button>
        <hr />
        <!-- create a table where list the users, with a options -->
        <div class="table-responsive">
          <table class="table table-sm table-bordered table-hover">
            <thead>
              <th class="text-center">Options</th>
              <th class="text-center">UserName</th>
              <th class="text-center">Email</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in arrayUsers" :key="index">
                <td>
                  <!-- edit -->
                  <button type="button" class="btn btn-sm btn-warning">
                    <font-awesome-icon icon="edit" @click="editUser(arrayUsers[index])" />
                  </button>&nbsp;
                  <!-- delete -->
                  <button
                    type="button"
                    class="btn btn-sm btn-danger"
                    @click="deleteUser(item.idUser)"
                  >
                    <font-awesome-icon icon="trash" />
                  </button>
                </td>
                <td v-text="item.userName"></td>
                <td v-text="item.email"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
      <!-- hide the list and show the form for registry the info of the users -->
      <template v-else>
        <div class="card-body">
          <div class="row">
            <div class="col-xl-6 col-md-6 col-sm-6 col-xs-12">
              <label for="userName">UserName:</label>
              <input
                id="userName"
                type="text"
                maxlength="45"
                class="form-control form-control-sm"
                v-model="userName"
              />
            </div>
            <div class="col-xl-6 col-md-6 col-sm-6 col-xs-12">
              <label for="email">Email:</label>
              <input
                id="email"
                type="email"
                class="form-control form-control-sm"
                v-model="email"
                maxlength="100"
              />
            </div>
          </div>
        </div>
        <!-- buttons of functions -->
        <div class="card-foot">
          <div class="form-row">
            <div class="col-12 m-2">
              <!-- create-->
              <button
                type="button"
                class="btn btn-sm btn-success"
                v-if="statusEdit == 0"
                @click="createUser()"
              >
                <font-awesome-icon icon="save" />&nbsp; Save
              </button>
              <!-- update -->
              <button type="button" class="btn btn-sm btn-success" v-else @click="updateUser()">
                <font-awesome-icon icon="save" />&nbsp; Update
              </button> &nbsp;
              <button type="button" class="btn btn-sm btn-danger" @click="cancel()">
                <font-awesome-icon icon="ban" />&nbsp; cancel
              </button>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script src="../scripts/user.js"></script>