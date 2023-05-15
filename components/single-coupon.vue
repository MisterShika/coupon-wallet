

<template>
    <div class="max-w-sm">
        <div>{{ passedCoupon.couponName }}</div>
        <div v-if="passedCoupon.img"> <img class="max-w-full h-auto" :src="passedCoupon.img" alt="My Image" /></div>
        <div>{{ passedCoupon.description }}</div>
        <div>Experience: {{ passedCoupon.EXP }}</div>
        <div><button>Redeem me!</button></div>
        <div>
            <qr-code :text="`This coupon is: ${passedCoupon.couponID}`"></qr-code>
            <div>
                <span>Clicking this button redeems the coupon since a real backed doesn't exist and thus two 
                entities (user and vendor) won't be able to appropriately interact using only local state.</span><br />
                <button @click="handleButtonClick($store.state.loggedIn.loggedID, passedCoupon.couponID)">Redeem Coupon (Developer)</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'single-coupon',
        props: {
            passedCoupon: {
                type: Object,
                required: true
            }
        },
        methods: {
            handleButtonClick(theID, theCoupon) {
                console.log("Clicked");
                this.$store.commit('redeemCoupon', { userId: theID, couponId: theCoupon});
            }
        }
    }
</script>