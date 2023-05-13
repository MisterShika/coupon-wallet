<template>
    <div>
        <form @submit.prevent="submitForm">
        <div>
            <label>Username:</label>
            <input type="text" v-model="username">
        </div>
        <div>
            <label>Password:</label>
            <input type="password" v-model="password">
        </div>
        <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      async submitForm() {

        const account = await this.$store.state.accounts.find(element => element.userName === this.username);

        if(account){
          if(account.password === this.password){
            this.$store.commit('updateLogIn', account.userID)
            console.log("Success!");
            this.$nuxt.$router.push('/user');
          }else{
            console.log("Wrong password!");
          }
        }else{
          console.log("Account not found!");
        }

      }
    }
  }
</script>