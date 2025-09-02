

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