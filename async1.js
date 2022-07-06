console.log('person1: shows Ticket');
console.log('person2: shows Ticket');
const preMovie=async()=>{
    const promiseWifeBringingTicks1=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket'),3000});
    });
    const getPopcorn=new Promise((resolve,reject)=>resolve('popcorn'))
    const getButter=new Promise((resolve,reject)=>resolve('Butter'))
    const getColdDrinks=new Promise((resolve,reject)=>resolve('ColdDrink'))


    
    let ticket=await promiseWifeBringingTicks1;
    console.log(`wife:I have the ${ticket}`);
    console.log('husband:We should go inside');
    console.log('wife:no i am hungry');
    let popcorn=await getPopcorn;
    console.log(`husband:I have the ${popcorn}`)
    console.log('husband:We should go inside');
    console.log('wife:no I need butter on my popcorn');
    let Butter=await getButter;
    console.log(`husband:I got some ${Butter} on popcorn`);
    console.log('husband:anything else, darling?');
    console.log('wife: lets go we are getting late');
    let ColdDrink=await getColdDrinks;
    console.log(`husband:I have got ${ColdDrink}`);


    return ticket;
}
preMovie().then((m)=>console.log(`person 3: shows${m}`));
console.log('person4: shows Ticket');
console.log('person5: shows Ticket');
