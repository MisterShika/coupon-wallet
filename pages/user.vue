<template>
    <div>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Roboto+Condensed&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
        


        <div v-if="this.$store.state.loggedIn.loggedStatus">
            <ul>
                <li v-for="(value, key) in getCouponsOwned" :key="key">
                    <single-coupon :passedCoupon="value" />
                </li>
            </ul>
        </div>
        <aside>
            <sidebar :passedUserID="this.$store.state.loggedIn.loggedID" v-if="this.$store.state.loggedIn.loggedID" />
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
            return this.$store.state.accounts.find(element => element.userID === this.$store.state.loggedIn.loggedID);
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