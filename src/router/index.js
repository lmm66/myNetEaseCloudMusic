import discovery from '../pages/discovery.vue';
import playLists from '../pages/playLists.vue';
import newSongs from '../pages/newSongs.vue';
import newMvs from '../pages/newMvs.vue';
import result from '../pages/result.vue'
import VueRouter from "vue-router";
export default new VueRouter({
    routes: [
        {
            path: '/',
            component: discovery
        },
        {
            path: '/discovery',
            component: discovery
        },
        {
            path: '/playLists',
            component: playLists
        },
        {
            path: '/newSongs',
            component: newSongs
        },
        {
            path: '/newMvs',
            component: newMvs
        },
        {
            path: '/result',
            component: result
        },
    ]
})