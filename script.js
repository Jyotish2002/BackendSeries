// alert();


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//foreach map filter find indexOf

// arr.forEach(function(val){
//     // console.log(val);
//     let a = val + " Hello";
//     console.log(a);
// });

// var ans = arr.map((val)=>{
//     return val*3;
// })

// console.log(ans);

// var newarr = arr.filter((val)=>{
//    if(val>3) {return true;}
//    else return false;
// });

// console.log(newarr);

// var newarr = arr.find((val)=>{
// if(val===2){ return val;}
// })
// console.log(newarr);

// var a = arr.indexOf(5);
// console.log(a+1);

const friends = ["Pratham", "Shubham", "Manish", "Sumit"];
let GoodFriend;
GoodFriend = friends.map((val) => {
    if (val === "Pratham") {
        return ("Chutiya Dost");

    }
    else if (val === "Shubham") { return ("Chuha dost"); }
    else if (val === "Manish") { return ("Chota Dost"); }
    else {
        return ("Mota");
    }
})

console.log(GoodFriend);


//Objects

var user = {
    name_is: "Jyotish",
    age: 22,
    login: true

}
Object.freeze(user) //---> if we freeze the age of user then age will be freeze and it will not change anymore
// user.age=21;

console.log(`User name is ${user.name_is} and his age is ${user.age} is login ${user.login}`)







// async js coding

// var blob = await fetch('https://randomuser.me/api/');
// console.log(blob)

async function ab() {
    console.log('I m first');
    var blog = await fetch('https://randomuser.me/api/');
    var ans = await blog.json();
    console.log(ans.results[0].name);
    console.log('I am third');
}

ab();


