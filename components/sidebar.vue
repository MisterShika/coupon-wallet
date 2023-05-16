<template>
    <div>
        <div v-if="this.$store.state.loggedIn.loggedStatus">
            
            <img class="w-1/2 mx-auto rounded-xl md:w-auto" :src="accountData.img" :alt="accountData.userNam" />
            <h2 class="text-xl text-red-600">{{ accountData.userName }}</h2>
            <div><exp-display :passedUserID="accountData.userID" /></div>
            <followlist :passedUserID="accountData.userID" :passedUserType="accountData.userType" />
            <button class="cursor-pointer rounded-3xl text-white bg-red-400 py-2.5 px-5 my-4 hover:bg-red-600 duration-500"  @click="handleLogOut()">Logout</button>
        </div>
        <div v-else>
            <h3>It looks like you're not logged in!</h3>
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