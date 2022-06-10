// Code your solutions in this file

// const gifts = ['Guadalupe', 'Ollie', 'Aki']

function writeCards(name, event){
    let cards = []   
    for (let i=0; i<name.length; i++){
        cards.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`)
    }
    return cards
};

function countDown(start){
    while (start > 0){
        console.log(start);
        start -=1;
    }
    console.log(start); 
};
