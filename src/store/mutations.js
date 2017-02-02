export default {

  GET_POSTS(state, payload) {
    //console.log(resource[0]);
    //state.posts = [];

    if(payload.length){
      state.posts = payload

      // for(let i=0;i<resource.length;i++){
      //   state.posts.push(
      //     {
      //       id:resource[i]['id'],
      //       title: resource[i]['title'],
      //       body: resource[i]['body'],
      //       userId: resource[i]['userId'],
      //     }
      //   )
      // }
    }else{
      state.posts = [payload];
    }

    state.showPost = true;
  },

  DELETE_POST(state, postId) {

    // Find out the post which is going to be deleted
    const post = state.posts.find(post => {
      return post.id == postId;
    });

    // Delete the post
    state.posts.splice(state.posts.indexOf(post), 1);
  },

  CREATE_POST(state, payload) {
    const newPost = {
      id: payload.id,
      userId: payload.userId,
      title: payload.title,
      body: payload.body
    }
    state.posts.push(newPost);
  },


  UPDATE_POST(state, payload) {
    const updatePost = {
      id: payload.id,
      userId: payload.userId,
      title: payload.title,
      body: payload.body
    }

    let i = 0;
    for(i;i<state.posts.length;i++){
      if(state.posts[i]['id']==updatePost.id)
      {
        break
      }
    }
    // warning
    // very tricky!
    // https://vuejs.org/v2/guide/list.html#Caveats
    // state.posts[i]=updatePost can not update v-for
    state.posts.splice(i, 1, updatePost)
  },

  GET_COMMENTS(state, payload){
    console.log(payload);
        state.comments = payload.slice();
        state.showPost = false;
  },

  API_FAILURE(state,error){
    console.error(error);
  }

};
