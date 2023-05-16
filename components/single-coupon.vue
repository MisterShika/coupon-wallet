

<template>
    <div>
        <h2 class="text-center text-3xl font-bold">{{ passedCoupon.couponName }}</h2>
        <div class="text-center font-bold">EXP: {{ passedCoupon.EXP }}</div>
        <hr class="border-2 border-red-600 my-2" />
        <div v-if="passedCoupon.img"> <img class="max-w-full h-auto" :src="passedCoupon.img" alt="My Image" /></div>
        <div class="my-5 bg-white rounded-xl p-3 text-lg">{{ passedCoupon.description }}</div>
        <div @click="handleButtonClick($store.state.loggedIn.loggedID, passedCoupon.couponID)" class="cursor-pointer qr-box"><qr-code :text="`This coupon is: ${passedCoupon.couponID}`"></qr-code></div>
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