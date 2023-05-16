<template>
    <div>
        <form @submit.prevent="couponFormSubmit" class="pt-4 text-center">
            <div class="my-4">
                <label class="text-3xl">Coupon Name:</label><br />
                <input type="text" v-model="couponName" class="rounded-lg border border-red-300 text-center" placeholder="Name">
            </div>
            <div class="my-4">
                <label class="text-3xl">Coupon Description:</label><br />
                <textarea type="text" v-model="couponDescription" class="rounded-lg border border-red-300 text-center" placeholder="Please enter a description."></textarea>
            </div>
            <div class="my-4">
                <label class="text-3xl">Upload Image (disabled):</label><br />
                <input class="w-48 md:w-52" type="file">
            </div>
            <div class="my-4">
                <label class="text-3xl">Coupon EXP:</label><br />
                <input type="number" v-model="couponEXP" class="rounded-lg border border-red-300 text-center " placeholder="100">
            </div>

            <!-- 
            Removed code. Eventually I would like to use the same form to create a coupon by either user level or user ID
                
            <div>
                <label>Coupon Target:</label><br />
                <select v-model="couponSelect">
                    <option value="">-- Select --</option>
                    <option value="targetLevel">By user level</option>
                    <option value="targetUser">By user ID</option>
                </select>
                <div >
                    <label v-if="couponSelect === 'targetLevel'">User Level :</label>
                    <label v-if="couponSelect === 'targetUser'">User ID:</label><br />
                    <input v-if="couponSelect" type="number" v-model="targetData" class="rounded-lg border border-red-300 text-center">
                </div>
            </div> 
            -->

            <button type="submit" class="cursor-pointer rounded-3xl text-white bg-red-400 py-2.5 px-5 my-4 hover:bg-red-600 duration-500">Create Coupon</button>
        </form>

    </div>
</template>

<script>
    export default {
        name: 'coupon-create',
        data() {
            return {
                couponName: '',
                couponDescription: '',
                couponEXP: '',
                couponSelect: '',
                targetData: '',
            }
        },
        props: {
            passedVendorID: {
                type: Number,
                required: true
            }
        },
        methods: {
            couponFormSubmit() {
                //Clear form and pass data to proper function.
                //In the future, a second function will be available to add a coupon directly to a targeted user via their ID.
                this.createCouponByLevel();
                this.couponName = '';
                this.couponDescription = '';
                this.couponEXP = '';
                this.couponSelect = '';
                this.targetData = '';
            },
            createCouponByLevel(){
                const coupon = {
                    couponID: this.$store.state.coupons.length + 1,
                    couponName: this.couponName,
                    description: this.couponDescription,
                    img: "/stock/placeholder.gif",
                    vendorID: this.passedVendorID,
                    EXP: parseInt(this.couponEXP)
                };
                this.$store.commit('addCouponByLevel', coupon);
            },
        }
    }
</script>