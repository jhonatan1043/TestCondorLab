<template>
 <!-- init the component -->
  <div id="app">
      <!-- we contain all our controls -->
    <div class="content-fluid">
      <!-- We use a top card that contains the secondary cards -->
      <div class="card">
        <!-- -->
        <div class="card-header header-body">
          <div class="row">
            <div class="col-11">
              <h5 class="title">My Tasks</h5>
            </div>
            <div class="col-1 text-right">
              <button type="button" class="btn btn-sm">
               <font-awesome-icon icon="bars" />
              </button>       
            </div>
          </div>
        </div> <!-- end of header of the card top  -->
        <!-- we use the upper body of the card, where we use the subcards -->
        <div class="card-body">
          <div class="row">
            <div
              class="col-xl-4 col-md-4 col-sm-4 col-xs-12"
              v-for="(itemCard, index) in arrayCards"
              :key="index"
            >
              <div class="card">
                <div class="card-header header">
                  <div class="row">
                    <div class="col-6" v-text="itemCard.title"></div>
                    <div class="text-right col-6">
                      <button type="button" class="btn btn-sm" @click="taskAdd(itemCard.array)">
                        <font-awesome-icon icon="plus" />
                      </button>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div v-for="(itemSubCard, index) in itemCard.array" :key="index">
                    <div class="card">
                      <div class="card-header header">
                        <div class="row">
                          <div class="col-10">
                          <input
                            type="text"
                            maxlength="100"
                            class="form-control form-control-sm"
                            v-model="itemSubCard.title"
                            placeholder="title of the task"
                            v-if="itemSubCard.statusRegistry == 0"
                          />
                          <h5 class="text-center" v-else v-text="itemSubCard.title"></h5>
                          </div>
                          <div class="col-2 text-right">
                            <button type="button"
                                    class="btn btn-sm"
                                    @click="taskRemove(index,itemCard.array)"
                                    v-if="itemSubCard.statusRegistry == 0">
                               <font-awesome-icon icon="times" /> 
                            </button>
                          </div>
                        </div>
                      </div>
                      <textarea
                        v-model="itemSubCard.task"
                        cols="30"
                        rows="3"
                        :disabled ="itemSubCard.statusRegistry == 1"
                      ></textarea>
                      <div class="card-foot foot">
                        <div class="row mb-1 mt-1">
                          <div class="col-6">
                            <button type="button" class="btn btn-sm">
                              <font-awesome-icon icon="users" />
                            </button>
                          </div>
                          <div class="col-6 text-right">
                            <button type="button" 
                                    class="btn btn-sm ml-2"
                                    v-if="itemSubCard.statusRegistry == 0">
                              <font-awesome-icon icon="save" />
                            </button>
                            <button
                              type="button"
                              class="btn btn-sm"
                            >
                              <font-awesome-icon icon="edit" />
                            </button>
                            <button
                              type="button"
                              class="btn btn-sm"
                              v-if="itemSubCard.statusRegistry == 1"
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
          </div>
        </div> <!-- end of the body of the top of the card -->
      </div> <!-- end of card Top -->
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