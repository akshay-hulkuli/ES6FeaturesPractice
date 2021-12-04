const myPromise = (a) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(a%2 === 0) {
                resolve("successfully received even number")
            }
            else {
                reject("failed process, got odd number")
            }
        })
    })
}


const data = [10, 21];


data.forEach((key) => {
    myPromise(key).then((res)=>{
        console.log(res);
    }).catch((e)=>{
        console.log(e);
    });
})

