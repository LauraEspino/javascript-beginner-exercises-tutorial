let guests = prompt('How many people are coming to your wedding?');

function getPrice(guests){
    let cost=0;
    // Your code here
    if (guests <=50){
        cost=(cost+4000);
    }
    else if(guests<=100){
        cost=(cost+10000);
    }
    else if(guests<=200){
        cost=(cost+15000);
    }
    else{
        cost=(cost+20000);
    }

    return cost;
}

let price = getPrice(guests);
console.log('Your wedding will cost '+price+' dollars');
