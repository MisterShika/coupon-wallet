<template>
    <div>
        <div>
            <span v-if="this.passedUserType === 'user'">Following:</span>
            <span v-if="this.passedUserType === 'vendor'">Followed By:</span>
            <ul>
                <li v-for="follower in followList" :key="follower.id">
                    <img :src="follower.img" :alt="follower.userName" />
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