// Parsing a JSON object
var obj = JSON.parse(data);
document.getElementById("demo").innerHTML = obj.name + ", " + obj.age + ", "+obj.city;

let users = [];
users.push(obj);

// Use of Modern Array Methods
let user = users.find(item => item.city == "Detroit");

// Arrow Function
const hello = () => {return (user.city);}
document.getElementById("prac").innerHTML = hello();

// Classes
class Student {
    constructor(student_name, grad_year) {
	    this.student_name = student_name;
	    this.grad_year = grad_year;
    }  
}

student_obj = new Student("Thomas", 2022);
document.getElementById("student").innerHTML = student_obj.student_name + " " + student_obj.grad_year;

// Clousres
function moviewFunc() {
    var movie = 'Leprechaun';
    function displayName() {
        document.getElementById("movie_id").innerHTML = movie;
    }
    return displayName;
}

var my_movie_fun = moviewFunc();
my_movie_fun();
