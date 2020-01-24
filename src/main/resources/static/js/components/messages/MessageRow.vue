<template>
    <v-card class="my-2">
        <v-card-text primary-title>
            <i>({{ message.id }})</i>
            {{ message.text }}
        </v-card-text>
        <v-card-actions>
            <v-btn value="Edit" @click="edit" small text rounded>Edit</v-btn>
            <v-btn value="Delete" @click="del" small text rounded>Delete</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import { mapActions } from'vuex'
    import { mdiDelete } from '@mdi/js'

    export default {
        props: ['message', 'editMessage'],
        methods: {
            ...mapActions(['removeMessageAction']),
            edit() {
                this.editMessage(this.message)
            },
            del() {
                this.removeMessageAction(this.message)
            }
        }
    }
</script>

<style>

</style>
