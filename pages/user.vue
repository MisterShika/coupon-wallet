<template>
    <div>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
        <div v-if="this.$store.state.loggedIn.loggedStatus">
            <h1>Hi! You're logged in!</h1>
        </div>

        <div v-if="!this.$store.state.loggedIn.loggedStatus">
            <h1>Hi! You're NOT logged in!</h1>
            <login />
        </div>
    </div>
</template>
  
  
<script>
    export default {
        name: 'user'
    }
</script>