'use strict'

//objects , arrays

let shoes = new Object();
    shoes['name'] = 'choos';
    shoes['type'] = 'heels';
    shoes['size'] = '6';
    console.log(shoes);
    console.log(shoes.type);

    shoes.colour ='black';
    console.log(shoes.colour);

    let bag = {
        "type" : 'shoulder',
        "colour" : 'green',
        "size" : 'small'
    }
        console.log(bag);

    let wardbrobe =[
        bag,
        { "type" : 'colour',
        "colour" : 'blue',
        "size" : 'big'
    }
    ]
    console.log(wardbrobe);

    let x = [1,2,3,4,5];
    for (let s = 0; s<x.length; s++) {
        console.log(x[s]);
    }

    for (let placeholder of x) {
        console.log(placeholder);
    }

    console.log(x.join('|'));


    //json
    let newJson = {
        "name" : "lisa",
        "age" : 36
    }
    let str = JSON.stringify(newJson);
    console.log(str);

    let my = JSON.parse(str);
    console.log(my);
    console.log(my.name);




    

    


    