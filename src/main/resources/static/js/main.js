import Vue from 'vue'
import Vuetify from 'vuetify'
import 'api/resource'
import App from 'pages/App.vue'
import { connect } from './util/ws'
import 'vuetify/dist/vuetify.min.css'
import { mdiExitRun } from '@mdi/js'

if (frontendData.profile) {
    connect()
}

Vue.use(Vuetify, { iconfont: 'mdiSvg' })

new Vue({
    el: '#app',
    vuetify: new Vuetify({}),
    render: a => a(App)
})
