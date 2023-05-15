<template>
    <div>
        <div v-if="this.$store.state.loggedIn.loggedStatus">
            <div>{{ accountData.userName }}</div>
            <followlist :passedUserID="accountData.userID" :passedUserType="accountData.userType" />
            <button class="cursor-pointer rounded-3xl text-white bg-red-400 py-2.5 px-5 my-4 hover:bg-red-600"  @click="handleLogOut()">Logout</button>
        </div>
        <div v-else>
            <h3>It looks like you're not logged in!</h3>
            <login />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'sidebar',

        props: {
            passedUserID: {
                type: Number,
                required: false
            }
        },
        computed: {
            accountData() {
                 return this.$store.state.accounts.find(element => element.userID === this.passedUserID);
            }
        },
        methods: {
            handleLogOut() {
                this.$store.commit('updateLogIn')
            }
        }
    }
</script>