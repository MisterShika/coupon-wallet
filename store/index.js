export const state = () => ({
    
    counter: 0,

    //Example Account Data

    loggedIn: {loggedStatus: false, loggedID: ""},

    accounts: [
        {userID: 1, userName: "user1", password: "12345", userType: "user", following: [6, 7, 8], followedBy: [], couponsOwned: [1, 4, 7], couponsOffered: [], couponsUsed: []},
        {userID: 2, userName: "user2", password: "12345", userType: "user", following: [7, 8, 9], followedBy: [], couponsOwned: [4, 7, 10], couponsOffered: [], couponsUsed: []},
        {userID: 3, userName: "user3", password: "12345", userType: "user", following: [9, 10, 6], followedBy: [], couponsOwned: [10, 13, 1], couponsOffered: [], couponsUsed: []},
        {userID: 4, userName: "user4", password: "12345", userType: "user", following: [8, 10, 7], followedBy: [], couponsOwned: [7, 13, 4], couponsOffered: [], couponsUsed: []},
        {userID: 5, userName: "user5", password: "12345", userType: "user", following: [6, 9, 10], followedBy: [], couponsOwned: [1, 10, 13], couponsOffered: [], couponsUsed: []},

        {userID: 6, userName: "user6", password: "12345", userType: "vendor", following: [], followedBy: [1, 3, 5], couponsOwned: [], couponsOffered: [1, 2, 3], couponsUsed: []},
        {userID: 7, userName: "user7", password: "12345", userType: "vendor", following: [], followedBy: [1, 2, 4], couponsOwned: [], couponsOffered: [4, 5, 6], couponsUsed: []},
        {userID: 8, userName: "user8", password: "12345", userType: "vendor", following: [], followedBy: [1, 2, 4], couponsOwned: [], couponsOffered: [7, 8, 9], couponsUsed: []},
        {userID: 9, userName: "user9", password: "12345", userType: "vendor", following: [], followedBy: [2, 3, 5], couponsOwned: [], couponsOffered: [10, 11, 12], couponsUsed: []},
        {userID: 10, userName: "user10", password: "12345", userType: "vendor", following: [], followedBy: [3, 4, 5], couponsOwned: [], couponsOffered: [13, 14, 15], couponsUsed: []},
    ],

    coupons: [
        {couponID: 1, couponName: "Tacos Coupon Small", description: "This is a coupon for a SMALL price reduction on tacos.", img: "", vendorID: 6, EXP: 100},
        {couponID: 2, couponName: "Tacos Coupon Medium", description: "This is a coupon for a MEDIUM price reduction on tacos.", img: "", vendorID: 6, EXP: 250},
        {couponID: 3, couponName: "Tacos Coupon Large", description: "This is a coupon for a LARGE price reduction on tacos.", img: "", vendorID: 6, EXP: 500},

        {couponID: 4, couponName: "Burgers Coupon Small", description: "This is a coupon for a SMALL price reduction on burgers.", img: "", vendorID: 7, EXP: 100},
        {couponID: 5, couponName: "Burgers Coupon Medium", description: "This is a coupon for a MEDIUM price reduction on burgers.", img: "", vendorID: 7, EXP: 250},
        {couponID: 6, couponName: "Burgers Coupon Large", description: "This is a coupon for a LARGE price reduction on burgers.", img: "", vendorID: 7, EXP: 500},

        {couponID: 7, couponName: "Ice Cream Coupon Small", description: "This is a coupon for a SMALL price reduction on ice cream.", img: "", vendorID: 8, EXP: 100},
        {couponID: 8, couponName: "Ice Cream Coupon Medium", description: "This is a coupon for a MEDIUM price reduction on ice cream.", img: "", vendorID: 8, EXP: 250},
        {couponID: 9, couponName: "Ice Cream Coupon Large", description: "This is a coupon for a LARGE price reduction on ice cream.", img: "", vendorID: 8, EXP: 500},

        {couponID: 10, couponName: "Sushi Coupon Small", description: "This is a coupon for a SMALL price reduction on sushi.", img: "", vendorID: 9, EXP: 100},
        {couponID: 11, couponName: "Sushi Coupon Medium", description: "This is a coupon for a MEDIUM price reduction on sushi.", img: "", vendorID: 9, EXP: 250},
        {couponID: 12, couponName: "Sushi Coupon Large", description: "This is a coupon for a LARGE price reduction on sushi.", img: "", vendorID: 9, EXP: 500},

        {couponID: 13, couponName: "Yoga Coupon Small", description: "This is a coupon for a SMALL price reduction on yoga.", img: "", vendorID: 10, EXP: 100},
        {couponID: 14, couponName: "Yoga Coupon Medium", description: "This is a coupon for a MEDIUM price reduction on yoga.", img: "", vendorID: 10, EXP: 250},
        {couponID: 15, couponName: "Yoga Coupon Large", description: "This is a coupon for a LARGE price reduction on yoga.", img: "", vendorID: 10, EXP: 500},
    ]

});


export const mutations = {
    updateLogIn(state, payload) {
        state.loggedIn.loggedStatus = true;
        state.loggedIn.loggedID = payload;
        console.log(state.loggedIn);
    }
}