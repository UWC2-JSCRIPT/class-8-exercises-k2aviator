

let myPromise = new Promise(function(resolve, reject) {
  //the function is executed automatical when the promise is constructed
                                                                                                                                                                                                                                                             //after a certain time period, send a signal
  setTimeout(function() {
    number = Math.random()
    if (number > 0.5){
      console.log("success: number is greater than 0.5")
      resolve(console.log(number)) //pratice with resolve
    } else{
      console.log("fail: number is less than 0.5")
      reject(console.log(number)) //pratice with resolve
    }
    console.log("complete")
    }
    , 1000);
});

myPromise.then(function(e){
   console.log("pass: some other function executes")
});
