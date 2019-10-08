function age(birthYear){
    let day = new Date();
    let age = day.getFullYear() - birthYear;
    alert(`Your age is: ${age} or ${age-1}`);
}

function callAge(){
    year = prompt("Type your birthyear");
    age(year);
}