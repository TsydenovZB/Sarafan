<template>
    <v-card class="my-2">
        <v-card-text primary-title>
            <div>
                <v-avatar
                        v-if="message.author && message.author.userpic"
                        size="48px"
                >
                    <img
                            src="message.author.userpic"
                            alt="message.author.name"
                    >
                </v-avatar>

                <v-avatar
                        v-else
                        size="36px"
                        color="teal"
                >
                    <v-icon dark>mdi-account-circle</v-icon>
                </v-avatar>
                <span class="pl-3">{{ authorName }}</span>
            </div>
            <div class="pt-3">
                {{ message.text }}
            </div>
        </v-card-text>
        <media v-if="message.link" :message="message"></media>
        <v-card-actions>
            <v-btn value="Edit" @click="edit" small text rounded>Edit</v-btn>
            <v-btn value="Delete" @click="del" small text rounded>Delete</v-btn>
        </v-card-actions>
        <comment-list
            :comments="message.comments"
            :message-id="message.id"
        ></comment-list>
    </v-card>
</template>

<script>
    import { mapActions } from'vuex'
    import { mdiDelete } from '@mdi/js'
    import Media from 'components/media/Media.vue'
    import CommentList from '../comment/CommentList.vue'

    export default {
        props: ['message', 'editMessage'],
        components: { CommentList, Media },
        computed: {
            authorName() {
                return this.message.author ? this.message.author.name : 'unknown'
            }
        },
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
