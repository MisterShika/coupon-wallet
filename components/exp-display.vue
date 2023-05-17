<template>
    <div>
        <span class="font-bold">EXP: {{ tweenedExp.toFixed(0) }}</span>
    </div>
</template>
  
<script>
    // Nuxt recommended using gsap. I'm unsure if there's a better animation/tween to animate numbers increasing.
    import gsap from 'gsap'

    export default {
        name: 'exp-display',
        props: {
            passedUserID: {
                type: Number,
                required: false
            }
        },
        data() {
            return {
                number: 0,
                tweenedExp: 0
            }
        },
        watch: {
            expData(newExpData) {
                gsap.to(this, { duration: 0.5, tweenedExp: newExpData || 0 })
            }
        },
        computed: {
            expData() {
                const theAccount = this.$store.state.accounts.find(element => element.userID === this.passedUserID);
                let totalExp = 0;
                theAccount.couponsUsed.forEach(element => {
                    let grabbedCoupon = this.$store.state.coupons.find(coupon => coupon.couponID === element);
                    totalExp += grabbedCoupon.EXP;
                });
                return totalExp;
            }
        },
        mounted() {
            gsap.to(this, { duration: 0.5, tweenedExp: this.expData })
        }
    }
</script>