<template>
  <!-- we contain all our controls -->
  <div class="content-fluid">
    <!-- We use a top card that contains the secondary cards -->
    <div class="card">
      <!-- -->
      <div class="card-header header-body">
        <div class="row">
          <div class="col-4">
            <h5 class="title">My Tasks</h5>
          </div>
          <!-- input of search -->
          <div class="col-6 txt-center">
            <input
              type="search"
              class="form-control form-control-sm"
              placeholder="Search Task"
              v-model="search"
              @keyup.enter="list()"
            />
          </div>
          <!-- call modal of users -->
          <div class="col-2 text-right">
            <button
              type="button"
              class="btn btn-sm"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <font-awesome-icon icon="user-plus" />
            </button>
          </div>
        </div>
      </div>
      <!-- end of header of the card top  -->
      <!-- we use the upper body of the card, where we use the subcards -->
      <div class="card-body">
        <!-- start Modal for user -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Users</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <userComponent></userComponent>
                <!-- component of users -->
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <!-- end modal -->
        <div class="row">
          <div
            class="col-xl-4 col-md-4 col-sm-4 col-xs-12"
            v-for="(itemCard, indexCard) in arrayCards"
            :key="indexCard"
          >
            <!-- cards -->
            <div class="card">
              <div class="card-header header">
                <div class="row">
                  <div class="col-6" v-text="itemCard.title"></div>
                  <div class="text-right col-6">
                    <!-- show archived -->
                    <button
                      type="button"
                      class="btn btn-sm"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="view tasks archived "
                      v-if="itemCard.viewArchived == 0"
                      @click="showArchived(arrayCards[indexCard])"
                    >
                      <font-awesome-icon icon="eye" />
                    </button>
                    <!-- hide archived -->
                    <button
                      type="button"
                      class="btn btn-sm"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="hide tasks archived "
                      v-else
                      @click="hideArchived(arrayCards[indexCard])"
                    >
                      <font-awesome-icon icon="eye-slash" />
                    </button> &nbsp;
                    <!-- add task -->
                    <button
                      type="button"
                      class="btn btn-sm"
                      @click="addTask(itemCard.array,indexCard)"
                    >
                      <font-awesome-icon icon="plus" />
                    </button>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div v-for="(itemSubCard, indexSubcard) in itemCard.array" :key="indexSubcard">
                  <!-- card of task -->
                  <!-- we validate that the status is different from archiving -->
                  <div
                    class="card"
                    v-if="statusArchived != itemSubCard.statusTask || itemCard.viewArchived == 1"
                  >
                    <div
                      :class="statusArchived != itemSubCard.statusTask ? 'card-header header':'card-header header-archived'"
                    >
                      <div class="row">
                        <!-- title -->
                        <div class="col-10">
                          <input
                            type="text"
                            maxlength="100"
                            class="form-control form-control-sm"
                            v-model="itemSubCard.title"
                            placeholder="title of the task"
                            v-if="itemSubCard.statusRecord == 0"
                          />
                          <h5 class="text-center" v-else v-text="itemSubCard.title"></h5>
                        </div>

                        <!-- close and cancel -->
                        <div class="col-2 text-right">
                          <button
                            type="button"
                            class="btn btn-sm"
                            @click="removeTask(indexSubcard,itemCard.array)"
                            v-if="itemSubCard.statusRecord == 0"
                          >
                            <font-awesome-icon icon="times" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <!-- note -->
                    <textarea
                      v-model="itemSubCard.task"
                      cols="30"
                      rows="2"
                      :disabled="itemSubCard.statusRecord == 1"
                    ></textarea>
                    <!-- start the footer of the subcard -->
                    <div
                      :class="showArchived != itemSubCard.statusTask ? 'card-foot foot':'card-foot foot-archived'"
                    >
                      <div class="row mt-1 mb-1">
                        <!-- select the users -->
                        <div class="col-4">
                          <select
                            class="form-control selectpicker form-control-sm"
                            v-model="itemSubCard.idUser"
                            :disabled="itemSubCard.statusRecord == 1"
                          >
                            <option selected :value="0">User</option>
                            <option
                              v-for="item in arrayListUsers"
                              :key="item.IdUser"
                              :value="item.idUser"
                              v-text="item.userName"
                            ></option>
                          </select>
                        </div>

                        <!-- select the status task -->
                        <div class="col-4 text-center">
                          <select
                            class="form-control selectpicker form-control-sm"
                            v-model="itemSubCard.statusTask"
                            :disabled="itemSubCard.statusRecord == 0"
                            @change="changeStatus(itemCard.array[indexSubcard])"
                          >
                            <option selected :value="0">Pending</option>
                            <option selected :value="1">Progress</option>
                            <option selected :value="2">Completed</option>
                            <option
                              selected
                              :value="3"
                              v-if="itemSubCard.statusRecord == 1"
                            >Archived</option>
                          </select>
                        </div>
                        <!-- button of fuction -->

                        <!-- register --->
                        <div class="col-4 text-right">
                          <button
                            type="button"
                            class="btn btn-sm ml-2"
                            v-if="itemSubCard.statusRecord == 0"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Record"
                            @click="registerTask(itemCard.array[indexSubcard])"
                          >
                            <font-awesome-icon icon="save" />
                          </button>
                          <!-- edit -->
                          <button
                            type="button"
                            class="btn btn-sm"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Edit"
                            @click="editTask(itemCard.array[indexSubcard])"
                            v-if="itemSubCard.statusRecord == 1"
                          >
                            <font-awesome-icon icon="edit" />
                          </button>
                          <!-- delete -->
                          <button
                            type="button"
                            class="btn btn-sm"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Delete"
                            v-if="itemSubCard.statusRecord == 1"
                            @click="deleteTask(itemCard.array[indexSubcard])"
                          >
                            <font-awesome-icon icon="trash" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <!-- end of the foot of the subCars -->
                  </div>
                </div>
              </div>
            </div>
            <!--end of cards -->
          </div>
        </div>
      </div>
      <!-- end of the body of the top of the card -->
    </div>
    <!-- end of card Top -->
  </div>
  <!-- end of content-fluid -->
</template>
<script src="../scripts/task.js"></script