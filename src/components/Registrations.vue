<template>
    <div id="registrations">
        <div class="summary">
            <h3>Output</h3>
        </div>
        <hr>
        <div class="" v-if="showPost">
          <div class="row" v-for="post in posts" :key="post.id">
            <pre>{{post}}</pre>
          </div>
        </div>
        <div class="" v-else>
          <div class="row" v-for="comment in comments" :key="comment.id">
            <pre>{{comment}}</pre>
          </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        // methods: {
        //     unregister(registration) {
        //         this.$store.commit({
        //             type: 'unregister',
        //             userId: registration.userId
        //         });
        //     }
        // },
        computed: {
            ...mapGetters({
                posts: 'posts',
                comments: 'comments',
                showPost: 'showPost',
            })
        }
    }
</script>

<style scoped>

    #registrations {
        box-shadow: 1px 1px 2px 1px #ccc;
        margin: 20px;
        padding: 20px;
        display: inline-block;
        width: 300px;
        vertical-align: top;
        text-align: left;
    }

    /*.summary {
        text-align: center;
    }

    .row h4 {
        display: inline-block;
        width: 30%;
        margin: 0 0 10px 0;
        box-sizing: border-box;
    }

    .row span {
        width: 30%;
        color: red;
        cursor: pointer;
    }

    .row span:hover {
        color: darkred;
    }

    .date {
        display: inline-block;
        width: 38%;
        text-align: right;
        box-sizing: border-box;
    }*/
</style>
