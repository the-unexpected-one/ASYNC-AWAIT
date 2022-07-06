

console.log('person1: shows Ticket');
console.log('person2: shows Ticket');
const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Ticket');
    },3000)
});promiseWifeBringingTicks.then((t)=>{
    console.log(`person 3: shows ${t}`);
});
const getPopcorn=promiseWifeBringingTicks.then((t)=>{
    console.log('wife:I have the tics');
    console.log('husband:We should go inside');
    console.log('wife:no i am hungry');
    return new Promise((resolve, reject)=>resolve(`${t} popcorn`));
});
const getButter=getPopcorn.then((t)=>{
    console.log('husband:I have the popcorn')
    console.log('husband:We should go inside');
    console.log('wife:no I need butter on my popcorn');
    return new Promise((resolve, reject)=>resolve(`${t} butter`));
})
getButter.then((t)=>console.log(t));
console.log('person4: shows Ticket');
console.log('person5: shows Ticket');

