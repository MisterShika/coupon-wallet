<template>
    <div class="flex">

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Roboto+Condensed&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">

        <div class="w-5/6 lg:w-10/12 float-left p-6">
            <div v-if="this.$store.state.loggedIn.loggedStatus && getAccount">
                <TransitionGroup name="bounce" tag="div" v-if="getAccount.userType === 'user'" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                    <single-coupon :passedCoupon="value" v-for="value in getCouponsOwned" :key="value.couponID" class="bg-gray-300 p-4 single-coupon outline-dashed outline-gray-300 hover:bg-gray-400 hover:outline-gray-400 duration-200" />
                </TransitionGroup>
                <div v-if="getAccount.userType === 'vendor'">
                    <coupon-create :passedVendorID="this.$store.state.loggedIn.loggedID" />
                </div>
            </div>
            <div v-if="!this.$store.state.loggedIn.loggedStatus" class="text-center"> 
                <login />
            </div>
        </div>
       
        <aside class="w-4/12 lg:w-2/12 p-2 float-right text-center bg-yellow-100 min-h-screen">
            <div>
            <client-only><span class="fa-stack fa-2x">
                <font-awesome-icon icon="certificate" class="fa-solid fa-certificate fa-stack-2x text-yellow-300" />
                <font-awesome-icon icon="wallet" class="fa-solid fa-wallet fa-stack-1x text-red-600" />
            </span></client-only>
            <h1 class="text-3xl md:text-4xl">Coupon Wallet</h1>
            </div>
            <hr class="border-2 border-red-400 rounded-3xl my-2"/>
            <sidebar v-if="this.$store.state.loggedIn.loggedID" :passedUserID="this.$store.state.loggedIn.loggedID" />
            <sidebar v-else />
        </aside>


    </div>
</template>
  
<script>
export default {
    name: 'user',
    computed: {
        getAccount() {
            console.log(`Logged in ID: ${this.$store.state.loggedIn.loggedID}`);
            if(this.$store.state.loggedIn.loggedID){
                return this.$store.state.accounts.find(element => element.userID === this.$store.state.loggedIn.loggedID);
            }
            
        },
        getCouponsOwned() {
            console.log('Coupons Owned:');
            console.log(this.getAccount.couponsOwned);
            let couponArray = []
            this.getAccount.couponsOwned.forEach(element => {
                let theCoupon = this.$store.state.coupons.find(coupon => coupon.couponID === element);
                couponArray.push(theCoupon);
            });
           return couponArray;
        }
    }
}
</script>
