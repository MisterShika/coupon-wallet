<template>
    <div>
        Coupon Item: {{ passedCoupon }}
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

    }
  }
</script>