export const state = () => ({
    
    counter: 0,

    //Example Account Data

    loggedIn: {loggedStatus: false, loggedID: ""},

    accounts: [
        {userID: 1, userName: "user1", password: "12345", userType: "user", img: "/userLogo/u1.jpg", following: [6, 7, 8, 11, 12, 13], followedBy: [], couponsOwned: [1, 4, 7, 16, 19, 22], couponsOffered: [], couponsUsed: []},
        {userID: 2, userName: "user2", password: "12345", userType: "user", img: "/userLogo/u2.jpg", following: [7, 8, 9, 12, 13, 14], followedBy: [], couponsOwned: [4, 7, 10, 19, 22, 25], couponsOffered: [], couponsUsed: []},
        {userID: 3, userName: "user3", password: "12345", userType: "user", img: "/userLogo/u3.jpg", following: [9, 10, 6, 11, 14, 15], followedBy: [], couponsOwned: [10, 13, 1, 16, 25, 28], couponsOffered: [], couponsUsed: []},
        {userID: 4, userName: "user4", password: "12345", userType: "user", img: "/userLogo/u4.jpg", following: [8, 10, 7, 12, 13, 15], followedBy: [], couponsOwned: [7, 13, 4, 19, 22, 28], couponsOffered: [], couponsUsed: []},
        {userID: 5, userName: "user5", password: "12345", userType: "user", img: "/userLogo/u5.jpg", following: [6, 9, 10, 11, 14, 15], followedBy: [], couponsOwned: [1, 10, 13, 16, 25, 28], couponsOffered: [], couponsUsed: []},

        {userID: 6, userName: "user6", password: "12345", userType: "vendor", img: "/userLogo/u6.jpg", following: [], followedBy: [1, 3, 5], couponsOwned: [], couponsOffered: [1, 2, 3], couponsUsed: []},
        {userID: 7, userName: "user7", password: "12345", userType: "vendor", img: "/userLogo/u7.jpg", following: [], followedBy: [1, 2, 4], couponsOwned: [], couponsOffered: [4, 5, 6], couponsUsed: []},
        {userID: 8, userName: "user8", password: "12345", userType: "vendor", img: "/userLogo/u8.jpg", following: [], followedBy: [1, 2, 4], couponsOwned: [], couponsOffered: [7, 8, 9], couponsUsed: []},
        {userID: 9, userName: "user9", password: "12345", userType: "vendor", img: "/userLogo/u9.jpg", following: [], followedBy: [2, 3, 5], couponsOwned: [], couponsOffered: [10, 11, 12], couponsUsed: []},
        {userID: 10, userName: "user10", password: "12345", userType: "vendor", img: "/userLogo/u10.jpg", following: [], followedBy: [3, 4, 5], couponsOwned: [], couponsOffered: [13, 14, 15], couponsUsed: []},

        {userID: 11, userName: "user11", password: "12345", userType: "vendor", img: "/userLogo/u11.jpg", following: [], followedBy: [1, 3, 5], couponsOwned: [], couponsOffered: [16, 17, 18], couponsUsed: []},
        {userID: 12, userName: "user12", password: "12345", userType: "vendor", img: "/userLogo/u12.jpg", following: [], followedBy: [1, 2, 4], couponsOwned: [], couponsOffered: [19, 20, 21], couponsUsed: []},
        {userID: 13, userName: "user13", password: "12345", userType: "vendor", img: "/userLogo/u13.jpg", following: [], followedBy: [1, 2, 4], couponsOwned: [], couponsOffered: [22, 23, 24], couponsUsed: []},
        {userID: 14, userName: "user14", password: "12345", userType: "vendor", img: "/userLogo/u14.jpg", following: [], followedBy: [2, 3, 5], couponsOwned: [], couponsOffered: [25, 26, 27], couponsUsed: []},
        {userID: 15, userName: "user15", password: "12345", userType: "vendor", img: "/userLogo/u15.jpg", following: [], followedBy: [3, 4, 5], couponsOwned: [], couponsOffered: [28, 29, 30], couponsUsed: []},
    ],

    coupons: [
        {couponID: 1, couponName: "Tacos Coupon Small", description: "This is a coupon for a SMALL price reduction on tacos.", img: "/stock/tacos.jpg", vendorID: 6, EXP: 100},
        {couponID: 2, couponName: "Tacos Coupon Medium", description: "This is a coupon for a MEDIUM price reduction on tacos.", img: "/stock/tacos.jpg", vendorID: 6, EXP: 250},
        {couponID: 3, couponName: "Tacos Coupon Large", description: "This is a coupon for a LARGE price reduction on tacos.", img: "/stock/tacos.jpg", vendorID: 6, EXP: 500},

        {couponID: 4, couponName: "Burgers Coupon Small", description: "This is a coupon for a SMALL price reduction on burgers.", img: "/stock/burger.jpg", vendorID: 7, EXP: 100},
        {couponID: 5, couponName: "Burgers Coupon Medium", description: "This is a coupon for a MEDIUM price reduction on burgers.", img: "/stock/burger.jpg", vendorID: 7, EXP: 250},
        {couponID: 6, couponName: "Burgers Coupon Large", description: "This is a coupon for a LARGE price reduction on burgers.", img: "/stock/burger.jpg", vendorID: 7, EXP: 500},

        {couponID: 7, couponName: "Ice Cream Coupon Small", description: "This is a coupon for a SMALL price reduction on ice cream.", img: "/stock/icecream.jpg", vendorID: 8, EXP: 100},
        {couponID: 8, couponName: "Ice Cream Coupon Medium", description: "This is a coupon for a MEDIUM price reduction on ice cream.", img: "/stock/icecream.jpg", vendorID: 8, EXP: 250},
        {couponID: 9, couponName: "Ice Cream Coupon Large", description: "This is a coupon for a LARGE price reduction on ice cream.", img: "/stock/icecream.jpg", vendorID: 8, EXP: 500},

        {couponID: 10, couponName: "Sushi Coupon Small", description: "This is a coupon for a SMALL price reduction on sushi.", img: "/stock/sushi.jpg", vendorID: 9, EXP: 100},
        {couponID: 11, couponName: "Sushi Coupon Medium", description: "This is a coupon for a MEDIUM price reduction on sushi.", img: "/stock/sushi.jpg", vendorID: 9, EXP: 250},
        {couponID: 12, couponName: "Sushi Coupon Large", description: "This is a coupon for a LARGE price reduction on sushi.", img: "/stock/sushi.jpg", vendorID: 9, EXP: 500},

        {couponID: 13, couponName: "Yoga Coupon Small", description: "This is a coupon for a SMALL price reduction on yoga lessons.", img: "/stock/yoga.jpg", vendorID: 10, EXP: 100},
        {couponID: 14, couponName: "Yoga Coupon Medium", description: "This is a coupon for a MEDIUM price reduction on yoga lessons.", img: "/stock/yoga.jpg", vendorID: 10, EXP: 250},
        {couponID: 15, couponName: "Yoga Coupon Large", description: "This is a coupon for a LARGE price reduction on yoga lessons.", img: "/stock/yoga.jpg", vendorID: 10, EXP: 500},
        
        {couponID: 16, couponName: "Boutique Coupon Small", description: "This is a coupon for a SMALL price reduction on boutique goods.", img: "/stock/boutique.jpg", vendorID: 11, EXP: 100},
        {couponID: 17, couponName: "Boutique Coupon Medium", description: "This is a coupon for a MEDIUM price reduction on boutique goods.", img: "/stock/boutique.jpg", vendorID: 11, EXP: 200},
        {couponID: 18, couponName: "Boutique Coupon Large", description: "This is a coupon for a LARGE price reduction on boutique goods.", img: "/stock/boutique.jpg", vendorID: 11, EXP: 300},
        
        {couponID: 19, couponName: "Martial Arts Coupon Small", description: "This is a coupon for a SMALL price reduction on martial arts lessons.", img: "/stock/martial.jpg", vendorID: 12, EXP: 100},
        {couponID: 20, couponName: "Martial Arts Coupon Medium", description: "This is a coupon for a MEDIUM price reduction on martial arts lessons.", img: "/stock/martial.jpg", vendorID: 12, EXP: 200},
        {couponID: 21, couponName: "Martial Arts Coupon Large", description: "This is a coupon for a LARGE price reduction on martial arts lessons.", img: "/stock/martial.jpg", vendorID: 12, EXP: 300},
        
        {couponID: 22, couponName: "Ramen Coupon Small", description: "This is a coupon for a SMALL price reduction on ramen.", img: "/stock/ramen.jpg", vendorID: 13, EXP: 100},
        {couponID: 23, couponName: "Ramen Coupon Medium", description: "This is a coupon for a MEDIUM price reduction on ramen.", img: "/stock/ramen.jpg", vendorID: 13, EXP: 200},
        {couponID: 24, couponName: "Ramen Coupon Large", description: "This is a coupon for a LARGE price reduction on ramen.", img: "/stock/ramen.jpg", vendorID: 13, EXP: 300},
        
        {couponID: 25, couponName: "Baseball Coupon Small", description: "This is a coupon for a SMALL price reduction on something at a baseball game.", img: "/stock/baseball.jpg", vendorID: 14, EXP: 100},
        {couponID: 26, couponName: "Baseball Coupon Medium", description: "This is a coupon for a MEDIUM price reduction on something at a baseball game.", img: "/stock/baseball.jpg", vendorID: 14, EXP: 200},
        {couponID: 27, couponName: "Baseball Coupon Large", description: "This is a coupon for a LARGE price reduction on something at a baseball game.", img: "/stock/baseball.jpg", vendorID: 14, EXP: 300},
        
        {couponID: 28, couponName: "Record Store Coupon Small", description: "This is a coupon for a SMALL price reduction on records.", img: "/stock/record.jpg", vendorID: 15, EXP: 100},
        {couponID: 29, couponName: "Record Store Coupon Medium", description: "This is a coupon for a MEDIUM price reduction on records.", img: "/stock/record.jpg", vendorID: 15, EXP: 200},
        {couponID: 30, couponName: "Record Store Coupon Large", description: "This is a coupon for a LARGE price reduction on records.", img: "/stock/record.jpg", vendorID: 15, EXP: 300},
    ]

});


export const mutations = {
    updateLogIn(state, payload) {
        if(payload){
            state.loggedIn.loggedStatus = true;
            state.loggedIn.loggedID = payload;
        }else{
            state.loggedIn.loggedStatus = false;
            state.loggedIn.loggedID = "";
        }
        console.log(state.loggedIn);
    },
    redeemCoupon(state, { userId, couponId }) {
        const user = state.accounts.find((user) => user.userID === userId);
        if (user) {
            const index = user.couponsOwned.indexOf(couponId);
            if (index !== -1) {
                const coupon = user.couponsOwned.splice(index, 1)[0];
                user.couponsUsed.push(coupon);
            }
        }
    }
}