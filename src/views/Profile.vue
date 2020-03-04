<template>
    <div>
        <ul>
            <li v-for="user in getUsers" :key="user.id">{{user.username}}</li>
        </ul>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    export default {
        name: "Profile",
        components: {},
        data: () => ({
        }),
        // created() {
        //     this.syncUsers()
        // },
        computed: {
            ...mapGetters(['getUsers'])
        },
        methods:{
            ...mapActions['syncUsers']
        }
    }
</script>

<style scoped>

</style>
