<template>
<div id="registration" class="container">
  <h3>Options Here</h3>

  <button class="btn btn-default" @click="getAllPosts()">get all posts</button>

  <div class="col-lg-12">
    <div class="input-group">
      <span class="input-group-btn">
        <button class="btn btn-secondary" type="button" @click="getOnePost()">get one post</button>
      </span>
      <input type="number" class="form-control" v-model="getPostId">
    </div>
  </div>

  <div class="col-lg-12">
    <div class="input-group">
      <span class="input-group-btn">
        <button class="btn btn-secondary" type="button" @click="getComments()">get all comments of a post</button>
      </span>
      <input type="number" class="form-control" v-model="commentPostId">
    </div>
  </div>


  <!-- delete a post by Id -->
  <div class="col-lg-12">
    <hr>
    <div class="input-group">
      <span class="input-group-btn">
        <button class="btn btn-secondary" type="button" @click="deletePost()">delete</button>
      </span>
      <input type="number" class="form-control" v-model="deleteId">
    </div>
  </div>

  <!-- add a new post -->
  <div class="col-lg-12">
    <hr>
    <div class="form-group">
      <label for="postUserId">new post user Id</label>
      <input type="number" class="form-control" id="postUserId" v-model="newPost.userId">
    </div>
    <div class="form-group">
      <label for="postTitle">new post title</label>
      <input type="text" class="form-control" id="postTitle" v-model="newPost.title">
    </div>
    <div class="form-group">
      <label for="postBody">new post body</label>
      <input type="text" class="form-control" id="postBody" v-model="newPost.body">
    </div>
    <button class="btn btn-default" @click="createPosts()">create a new post</button>
  </div>

  <!-- Update a post -->
  <div class="col-lg-12 form-group">
    <hr>
    <label for="postId">please choose a post Id</label>
    <input type="number" class="form-control" id="postId" v-model="updatePost.id" required>

    <label for="postUserId">update user Id</label>
    <input type="number" class="form-control" id="postUserId" v-model="updatePost.userId">

    <label for="postTitle">update the title</label>
    <input type="text" class="form-control" id="postTitle" v-model="updatePost.title">

    <label for="postBody">update the body</label>
    <input type="text" class="form-control" id="postBody" v-model="updatePost.body">

    <button type="submit" class="btn btn-default" @click="updateAPost()">update a post</button>
  </div>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      deleteId: null,
      getPostId: null,
      commentPostId: null,
      newPost: {
        userId: null,
        title: '',
        body: '',
      },
      updatePost: {
        id: null,
        userId: null,
        title: '',
        body: '',
      },
    }
  },
  methods: {
    getAllPosts() {
      this.$store.dispatch('getPosts','');
    },

    getOnePost() {
      if (this.getPostId) {
        this.$store.dispatch('getPosts', this.getPostId);
      }
    },

    getComments() {
      if(this.commentPostId){
        this.$store.dispatch('getComments', this.commentPostId);
      }
    },

    deletePost() {
      if (this.deleteId) {
        this.$store.dispatch('deletePost', this.deleteId);
      }
    },

    createPosts() {
      const data = this.newPost;
      this.$store.dispatch('createPost', data);
    },

    updateAPost() {
      const data = this.updatePost;
      console.log(data);
      this.$store.dispatch('updatePost', data);
    },

  }
}
</script>

<style scoped>
#registration {
  box-shadow: 1px 1px 2px 1px #ccc;
  margin: 20px;
  padding: 20px;
  display: inline-block;
  width: 300px;
  vertical-align: top;
}
</style>
