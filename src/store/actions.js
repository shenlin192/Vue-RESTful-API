import api from '../api/api.js'

const root = 'https://jsonplaceholder.typicode.com/posts';

const actions = {

  getPosts(context, postId) {
    // if (typeof postId === 'undefined') {
    //   postId = ''
    // }
    return api.get(`${root}/${postId}`)
      .then((response) => context.commit('GET_POSTS', response))
      .catch((error) => context.commit('API_FAILURE', error));
  },

  getComments(context, postId) {
    return api.get(`${root}/${postId}/comments`)
      .then((response) => context.commit('GET_COMMENTS', response))
      .catch((error) => context.commit('API_FAILURE', error));
  },

  createPost(context, newPost) {
    return api.post(`${root}`, newPost)
      .then((response) => context.commit('CREATE_POST', response))
      .catch((error) => context.commit('API_FAILURE', error));
  },

  updatePost(context, data) {
    const postId = data.id;
    return api.patch(`${root}/${postId}`, data)
      .then((response) => context.commit('UPDATE_POST', response))
      .catch((error) => context.commit('API_FAILURE', error));
  },

  deletePost(context, postId) {
    return api.delete(`${root}/${postId}`)
      .then((response) => context.commit('DELETE_POST', postId))
      .catch((error) => context.commit('API_FAILURE', error));
  }

};

export default actions
