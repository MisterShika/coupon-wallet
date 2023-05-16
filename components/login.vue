<template>
    <div class="text-center">
        <form @submit.prevent="submitForm" class="pt-4 ">
          <div>
              <label>Username:</label><br />
              <input type="text" v-model="username" class="rounded-lg border border-red-300 ">
          </div>
          <div>
              <label>Password:</label><br />
              <input type="password" v-model="password" class="rounded-lg border border-red-300 ">
          </div>
          <button type="submit" class="cursor-pointer rounded-3xl text-white bg-red-400 py-2.5 px-5 my-4 hover:bg-red-600">Login</button>
        </form>
        <a href="#" class="text-blue-500 underline">Create an account (disabled)</a>
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