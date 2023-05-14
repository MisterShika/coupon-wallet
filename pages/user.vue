<template>
    <div>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
        <div v-if="this.$store.state.loggedIn.loggedStatus">
            <h1>Hi! You're logged in!</h1>
            <ul>
                <!-- <li v-for="coupon in getCouponsOwned" :key="coupon.couponID">
                   <single-coupon :passedCoupon="coupon.couponID" />
                </li> -->

                <li v-for="(value, key) in getCouponsOwned" :key="key">
                    <single-coupon :passedCoupon="value" />
                </li>
            </ul>
            <aside>
                Sidebar
            </aside>
        </div>

        <div v-if="!this.$store.state.loggedIn.loggedStatus">
            <h1>Hi! You're NOT logged in!</h1>
            <login />
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'user',
    computed: {
        getAccount() {
            console.log(`Logged in ID: ${this.$store.state.loggedIn.loggedID}`);
            return this.$store.state.accounts.find(element => element.userID === this.$store.state.loggedIn.loggedID);
        },
        //Better to pass an object or an ID to the component?
        getCouponsOwned() {
            console.log('Coupons Owned:');
            console.log(this.getAccount.couponsOwned);
            let couponArray = []
            this.getAccount.couponsOwned.forEach(element => {
                let theCoupon = this.$store.state.coupons.find(coupon => coupon.couponID === element);
                couponArray.push(theCoupon);
            });
           // return couponArray;
            return this.getAccount.couponsOwned;
        }
    }
}
</script>