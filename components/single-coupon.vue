

<template>
    <div>
        <div>{{ passedCoupon.couponName }}</div>
        <div v-if="passedCoupon.img"> <img class="max-w-full h-auto" :src="passedCoupon.img" alt="My Image" /></div>
        <div>{{ passedCoupon.description }}</div>
        <div>Experience: {{ passedCoupon.EXP }}</div>
        <div>
            <div @click="handleButtonClick($store.state.loggedIn.loggedID, passedCoupon.couponID)" class="cursor-pointer "><qr-code :text="`This coupon is: ${passedCoupon.couponID}`"></qr-code></div>
            <div>
                <span>Ideally a vendor should be able to read the QR code. However as this is only a protoype please just tap/click on the QR code.</span>
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