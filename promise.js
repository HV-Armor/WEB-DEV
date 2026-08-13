    const mypromise = new Promise((resolve, reject) => {
    let age =19;
    if(age>=18){
        resolve("You are eligible to vote.");
    } else {
        reject("You are not eligible to vote."); 
    }
})
const checkEligibilty = ()=>{
    const msg = myPromise;
    console.log(msg);
}



// console.log(myPromise);
// myPromise.then((msg)=>console.log(msg))
//          .catch((erroe)=>console.log(erroe));