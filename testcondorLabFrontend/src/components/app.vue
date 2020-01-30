<template>
  <div id="app">
    <div class="content-fluid">
      <div class="card">
        <div class="card-header header-body">
          <h5 class="title">My Tasks</h5>
        </div>
        <div class="card-body">
          <form>
            <div class="form-row">
              <!-- board where we create the open notes -->
              <div class="form-group col-xl-4 col-md-4 col-sm-4 col-xs-12">
                <div class="card">
                  <div class="card-header header">
                    <div class="row">
                      <div class="col-6">Open</div>
                      <div class="text-right col-6">
                        <button type="button" class="btn btn-sm" @click="taskAdd(arrayOpens)">
                         <font-awesome-icon icon="plus" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div v-for="(item, index) in arrayOpens" :key="index">
                      <div class="card">
                        <div class="card-header header">
                          <input
                            type="text"
                            maxlength="100"
                            class="form-control form-control-sm"
                            v-model="item.title"
                            placeholder="title of the task"
                            v-if="item.StatusRegistry == 0"
                          />
                          <h5 v-else v-text="item.title"></h5>
                        </div>
                        <textarea
                          v-model="item.task"
                          cols="30"
                          rows="3"
                          @disable="item.StatusRegistry == 1"
                        ></textarea>
                        <div class="card-foot foot">
                          <div class="row mb-1 mt-1">
                            <div class="col-6">
                              <button type="button" class="btn btn-sm">
                                  <font-awesome-icon icon="users" />
                              </button>
                            </div>
                            <div class="col-6 text-right">
                              <button type="button" class="btn btn-sm ml-2">
                               <font-awesome-icon icon="save" />
                              </button>
                              <button
                                type="button"
                                class="btn btn-sm"
                                v-if="item.StatusRegistry == 1"
                              >
                                <i class="icon-pencil"></i>
                              </button>
                              <button
                                type="button"
                                class="btn btn-sm"
                                v-if="item.StatusRegistry == 1"
                                @click="taskRemove(index,arrayOpens)"
                              >
                                <font-awesome-icon icon="trash" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- board where we create the notes in progress -->
              <div class="form-group col-xl-4 col-md-4 col-sm-4 col-xs-12">
                <div class="card">
                  <div class="card-header header">
                    <div class="row">
                      <div class="col-6">In Progress</div>
                      <div class="text-right col-6">
                        <button type="button" class="btn btn-sm" @click="taskAdd(arrayProgress)">
                          <i class="icon-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div v-for="(item, index) in arrayProgress" :key="index">
                      <div class="card">
                        <div class="card-header header">
                          <input
                            type="text"
                            maxlength="100"
                            class="form-control form-control-sm"
                            v-model="item.title"
                            placeholder="title of the task"
                          />
                        </div>
                        <textarea v-model="item.task" cols="30" rows="3"></textarea>
                        <div class="card-foot foot">
                          <div class="row mb-1 mt-1">
                            <div class="col-6">
                              <button type="button" class="btn btn-sm">
                                <i class="icon-user-follow"></i>
                              </button>
                            </div>
                            <div class="col-6 text-right">
                              <button type="button" class="btn btn-sm ml-2">
                                <i class="icon-note"></i>
                              </button>
                              <button type="button" class="btn btn-sm">
                                <i class="icon-pencil"></i>
                              </button>
                              <button
                                type="button"
                                class="btn btn-sm"
                                @click="taskRemove(index,arrayProgress)"
                              >
                                <i class="icon-trash"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- board where we create the notes completeds  -->
              <div class="form-group col-xl-4 col-md-4 col-sm-4 col-xs-12">
                <div class="card">
                  <div class="card-header header">
                    <div class="row">
                      <div class="col-6">completeds</div>
                      <div class="text-right col-6">
                        <button type="button" class="btn btn-sm" @click="taskAdd(arrayCompleteds)">
                          <i class="icon-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div v-for="(item, index) in arrayCompleteds" :key="index">
                      <div class="card">
                        <div class="card-header header">
                          <input
                            type="text"
                            maxlength="100"
                            class="form-control form-control-sm"
                            v-model="item.title"
                            placeholder="title of the task"
                          />
                        </div>
                        <textarea v-model="item.task" cols="30" rows="3"></textarea>
                        <div class="card-foot foot">
                          <div class="row mb-1 mt-1">
                            <div class="col-6">
                              <button type="button" class="btn btn-sm">
                                <i class="icon-user-follow"></i>
                              </button>
                            </div>
                            <div class="col-6 text-right">
                              <button type="button" class="btn btn-sm ml-2">
                                <i class="icon-note"></i>
                              </button>
                              <button type="button" class="btn btn-sm">
                                <i class="icon-pencil"></i>
                              </button>
                              <button
                                type="button"
                                class="btn btn-sm"
                                @click="taskRemove(index,arrayCompleteds)"
                              >
                                <i class="icon-trash"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--.......................................................-->
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- end of content-fluid -->
  </div>
  <!-- end of app -->
</template>

<script src="../scripts/script.js"></script>

<style>
.header {
  background-color: #abebc6;
}
.header-body {
  background-color: #8be3b0;
}
.foot {
  background-color: #abebc6;
}
.title {
  color: white;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 20px;
  font-style: normal;
}
</style>