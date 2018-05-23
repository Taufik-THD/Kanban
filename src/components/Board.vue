<template>
  <div class="">
    <div id="home">
      <div id="index-banner" class="parallax-container">
        <div class="section no-pad-bot">
          <div class="container">
            <div class="row center">
              <h1 id="logo-container" class="brand-logo">
                <span style="color:darkgrey;">Kanban</span>
                <span style="color:dodgerblue;">Board</span>
              </h1> 
            </div>
          </div>
        </div>
        <div class="parallax">
          <video autoplay muted loop id="myVideo" style="width:100%; heigh:250px;">
            <source src="https://www.videvo.net/videvo_files/converted/2014_07/preview/Saint_Barthelemy_2.mov44817.webm" type="video/mp4">
          </video>
        </div>
      </div>
      <br>
        <div class="row">
          <form class="" action="index.html" method="post">
            <div class="container">
              <div class="row">
                <form class="col s12">
                  <button class="waves-effect waves-light btn modal-trigger" data-target="modal1">Add New Task</button>
                </form>
              </div>
            </div>
          </form>
        </div>

          <div class="row">
            <div class="col s3 m3" >
              <p class="flow-text">Back Log</p>
              <div class="card blue-grey" v-for='activity of activities' v-bind:key="activity['./key']" v-if="activity.status == 'backlog'">
                <div class="card-content">
                  <h3>{{activity.title}}</h3>
                  <hr>
                  <h5>{{activity.description}}</h5>
                </div>
                <div class="card-action">
                  <a class="waves-effect waves-light btn-small" style="font-size:10; padding: 0 13px 0 13px;" @click='deleteData(activity[".key"])'>Delete</a>
                  <a class="waves-effect waves-light btn-small" style="font-size:10; padding: 0 10px 0 10px;" @click='upStatus(activity[".key"], activity.status)'> > </a>
                </div>
              </div>
            </div>
            <div class="col s3 m3">
              <p class="flow-text">To-Do</p>
              <div class="card blue-grey lighten-1" v-for='activity of activities' v-bind:key="activity['./key']" v-if="activity.status == 'todo'">
                <div class="card-content">
                  <h3>{{activity.title}}</h3>
                  <hr>
                  <h5>{{activity.description}}</h5>
                </div>
                <div class="card-action">
                  <a class="waves-effect waves-light btn-small" style="font-size:10; padding: 0 10px 0 10px;" @click='downStatus(activity[".key"], activity.status)'> < </a>
                  <a class="waves-effect waves-light btn-small" style="font-size:10; padding: 0 13px 0 13px;" @click='deleteData(activity[".key"])'>Delete</a>
                  <a class="waves-effect waves-light btn-small" style="font-size:10; padding: 0 10px 0 10px;" @click='upStatus(activity[".key"], activity.status)'> > </a>
                </div>
              </div>
            </div>
            <div class="col s3 m3">
              <p class="flow-text">On-Going</p>
              <div class="card blue-grey lighten-2" v-for='activity of activities' v-bind:key="activity['./key']" v-if="activity.status == 'ongoing'">
                <div class="card-content">
                  <h3>{{activity.title}}</h3>
                  <hr>
                  <h5>{{activity.description}}</h5>
                </div>
                <div class="card-action">
                  <a class="waves-effect waves-light btn-small" style="font-size:10; padding: 0 10px 0 10px;" @click='downStatus(activity[".key"], activity.status)'><</a>
                  <a class="waves-effect waves-light btn-small" style="font-size:10; padding: 0 13px 0 13px;" @click='deleteData(activity[".key"])'>Delete</a>
                  <a class="waves-effect waves-light btn-small" style="font-size:10; padding: 0 10px 0 10px;" @click='upStatus(activity[".key"], activity.status)'>></a>
                </div>
              </div>
            </div>
            <div class="col s3 m3">
              <p class="flow-text">Done</p>
              <div class="card blue-grey lighten-3" v-for='activity of activities' v-bind:key="activity['./key']" v-if="activity.status == 'done'">
                <div class="card-content">
                  <h3>{{activity.title}}</h3>
                  <hr>
                  <h5>{{activity.description}}</h5>
                </div>
                <div class="card-action">
                  <a class="waves-effect waves-light btn-small" style="font-size:10; padding: 0 10px 0 10px;" @click='downStatus(activity[".key"], activity.status)'><</a>
                  <a class="waves-effect waves-light btn-small" style="font-size:10; padding: 0 13px 0 13px;" @click='deleteData(activity[".key"])'>Delete</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal Structure -->
        <div id="modal1" class="modal">
          <div class="modal-content">
            <h4>Add New Task</h4>
            <div class="row">
              <form class="col s12">
                <div class="row modal-form-row">
                  <div class="input-field col s12">
                    <input id="image_url" type="text" class="validate" v-model='title'>
                    <label for="image_url">Title</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <input id="image_title" type="text" class="validate" v-model='description'>
                    <label for="image_title">Description</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <textarea id="image_description" type="text" class="materialize-textarea validate" v-model='point'></textarea>
                    <label for="image_description">Point</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <textarea id="image_description" type="text" class="materialize-textarea validate" v-model='assigned'></textarea>
                    <label for="image_description">Assigned to</label>
                  </div>
                </div>
                <div class="modal-footer">
                  <a class=" modal-action modal-close waves-effect waves-green btn-flat" @click='clearAll'>Cancel</a>
                  <a class=" modal-action modal-close waves-effect waves-green btn-flat" @click='addTask'>Submit</a>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import * as firebase from 'firebase'
const config = {
  databaseURL: 'https://kanban-dee38.firebaseio.com/',
  projectId: 'kanban-dee38'
}

const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.database()
const activityRef = db.ref('activities')

export default {
  data () {
    return {
      title: '',
      description: '',
      point: '',
      assigned: ''
    }
  },
  created () {

  },
  firebase: {
    activities: activityRef
  },
  methods: {
    addTask () {
      activityRef.push({
        title: this.title,
        description: this.description,
        point: this.point,
        assigned: this.assigned,
        status: 'backlog'
      })
      this.clearAll()
    },

    upStatus (key, status) {

      if (status == 'backlog') {
        activityRef.child(key).update({
          status: 'todo'
        })
      } else if (status == 'todo') {
        activityRef.child(key).update({
          status: 'ongoing'
        })
      } else if (status == 'ongoing') {
        activityRef.child(key).update({
          status: 'done'
        })
      }

    },

    downStatus (key, status) {

      if (status == 'done') {
        activityRef.child(key).update({
          status: 'ongoing'
        })
      } else if (status == 'ongoing') {
        activityRef.child(key).update({
          status: 'todo'
        })
      } else if (status == 'todo') {
        activityRef.child(key).update({
          status: 'backlog'
        })
      }

    },

    clearAll () {
      this.title= '',
      this.description= '',
      this.point= '',
      this.assigned= ''
    },

    deleteData (key) {

      activityRef.child(key).remove()

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal {
  max-height: 100%;
}

.modal-form-row {
  margin-top: 0px;
  margin-bottom: 0px;
}

.parallax-container {
    padding-top: 60px;
    min-height: 270px;
    line-height: 0;
    height: 350px;
    color: rgba(255,255,255,.9);
}
</style>
