

function user(name, age, isAdmin, courses, wife) {
    this.name = name;
    this.age = age;
    this.isAdmin = isAdmin;
    this.courses = courses;
    this.wife = wife;
    this.introduction = function(){
        console.log(`My name is ${this.name}, I'm ${this.age} years old.`);
        
    }
}

let sarah = new user('sisi', 40, false, ['python'], 'sara');
console.log(sarah);
sarah.introduction();

function book(title, author, pages){
    if (!title || !author){
        console.error('Title and author are required');
        return;
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isread = false;

    this.markasread = function(){
        this.isread = true;
        console.log(`You have read ${this.title} by ${this.author}`);
    }
}

let book1 = new book('The Great Gatsby', 'F. Scott Fitzgerald', 180);
console.log(book1);
book1.markasread();

/// find the millage using car drive mile
function carconstructor(make, model, year, mile) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.mile = mile;
    this.millage= function(fuel){
        if(mile){
            let totalmile = mile /fuel;
            console.log(`The millage of the car is ${totalmile} miles per litres.`);
            
        }else{
            console.log('this car has no mile data');
        }
    }
}

let car1 = new carconstructor('Toyota', 'Camry', 2020, 400);
console.log(car1);
car1.millage(400);

let number = [1,2,3,4,5,6,7,8,9,10];
console.log(number);


let doubled = number.map(num=> num * 2);
console.log(doubled);



let products = [
    {name: 'Laptop', price: 1000,},
    {name: 'Phone', price: 500, },
    {name: 'Shirt', price: 50, },
    {name: 'Pants', price: 80, },
    {name: 'Book', price: 20, },
]

let catalog = products.map((product, index )=> ({
    id: `PROD-${(index + 1).toString().padStart(5, '0')}`,
    name: product.name.toUpperCase(),
    price: product.price,
    discountedPrice: product.price * 0.5,
    category: product.price > 100 ? 'expensive' : 'affordable',
}));
console.log(catalog);

/// document object model

let targetElement = document.querySelector('#content');

/// modifying textcontent

targetElement.textContent= 'New Text content';

targetElement.classList.add('highlight');


let text = document.getElementById('para');
text.classList.add('important');
text.classList.remove('important');

text.classList.toggle('border-state');


let form = document.getElementById('form');
let nome = document.getElementById('name');
let password = document.getElementById('password');
let button = document.getElementById('btn');

let isValidPassword = password.value.length >= 8 || password.value.length <= 20;

button.addEventListener('click', function(Event){
    Event.preventDefault();
    
        alert(`Welcome ${nome.value}, your password is ${isValidPassword ? 'valid' : 'invalid'} and it is ${password.value.padStart(22, '*')}`);
});


//Async js

function calculatesum(a, b, callback){
    let result = a + b;
    callback(result);
}

function orderfood(callback){
    setTimeout(()=>{
        console.log('food has been ordered');
        callback();
    }, 2000);
}

function preparefood(callback){
    setTimeout(()=>{
        console.log('food has been prepared');
        callback();
    }, 3000);
}
function deliverfood(){
    setTimeout(()=>{
        console.log('food has been delivered to customer');
        callback()
    }, 4000);
}
orderfood(()=>{
    preparefood(()=>{
        deliverfood(()=>{
            console.log('All done. Customer is satisfied.');
            
        })
    })
})
        /// promises
       /// pending , resolve , reject

       function makepizza(){
        return new Promise((resolve, reject)=>{
            let success = Math.random() > 0.5;
            setTimeout(()=>{
                if(success){
                    resolve('Pizza is ready!');
                }else{
                    reject('Failed to make pizza.');
                }
       }, 2000);
    });
   }
    makepizza()
    .then((message)=>{
        console.log(message);
    })
    .catch((error )=>{
        console.log(error);
        
    })


    function orderfoood(){
        return Promise.resolve('Food has been ordered');    
    }
    function preparefoood(){
        return Promise.resolve('Food has been prepared');
    }   
    function deliverfoood(){
        return Promise.resolve('Food has been delivered to customer');
    }
    orderfoood()
    .then((message)=>{
        console.log(message);
        return preparefoood();
    })
    .then((message)=>{
        console.log(message);
        return deliverfoood();
    })
    .then((message)=>{
        console.log(message);
        console.log('All done. Customer is satisfied.');
    })
    .catch((error)=>{
        console.log('something went wrong');
    });



    /// async await
    function delay(ms){
        return new Promise((resolve)=> setTimeout(resolve, ms));
    }
    async function makecoffee(){
        console.log('Starting to make coffee...');
        await delay(2000);
        console.log('Grinding coffee beans...');
        await delay(2000);
        console.log('Brewing coffee...');
        await delay(2000);
        console.log('Coffee is ready!');
    }
    async function servecoffee(){
        try{
            let coffee = await makecoffee()
            console.log('serving', coffee)
        }catch(error){
            console.log('error mkaing coffee:',error)
        }
    }
    