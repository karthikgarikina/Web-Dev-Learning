function fun1(value) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(1);
        }, 1000);
    });
}

function fun2(value) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(value+1);
        }, 1000);
    });
}

function fun3(value) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(value+1);
        }, 1000);
    });
}
const fun4=(value)=>{
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(value+1);
        },1000);
    });
}


async function Execution(){
    try{
        const res1=await fun1()
        console.log(res1);
        const res2=await fun2(res1)
        console.log(res2);
        const res3=await fun3(res2)
        console.log(res3);
        const res4=await fun4(res3);
        console.log(res4);
        console.log("Done");
    }
    catch(error){
        console.log(error);
    }
}
console.log("Hello Shivaa");
Execution();