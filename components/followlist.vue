<template>
    <div>
        <div>
            <hr class="border-2 border-red-400 rounded-3xl my-2" />
            <!-- Text changes depending on user type. Is there a better way to do this? -->
            <span v-if="this.passedUserType === 'user'" class="text-lg following-text">Following:</span>
            <span v-if="this.passedUserType === 'vendor'" class="text-lg following-text">Followed By:</span>
            <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-3 h-72 overflow-scroll overflow-x-hidden md:h-auto border border-red-300 rounded-xl bg-yellow-50">
                <li v-for="follower in followList" :key="follower.id">
                    <img :src="follower.img" :alt="follower.userName" class="rounded-xl"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'followlist',
        props: {
            passedUserID: {
                type: Number,
                required: true
            },
            passedUserType: {
                type: String,
                required: true
            }
        },
        computed: {
            accountData() {
                 return this.$store.state.accounts.find(element => element.userID === this.passedUserID);
            },
            followList() {
                let followerArray = [];
                const theAccount = this.$store.state.accounts.find(element => element.userID === this.passedUserID);
                //Is there a more efficient way to do this?
                if(theAccount.userType === 'user'){
                    theAccount.following.forEach(following => {
                        let followerAccount = this.$store.state.accounts.find(element => element.userID === following);
                        followerArray.push(followerAccount);
                    });
                }else if(theAccount.userType === 'vendor'){
                    theAccount.followedBy.forEach(following => {
                        let followerAccount = this.$store.state.accounts.find(element => element.userID === following);
                        followerArray.push(followerAccount);
                    });
                }
                return followerArray;
            },
        },
        methods: {
            handleLogOut() {
                this.$store.commit('updateLogIn')
            }
        }
    }
</script>