function HotelConstructor(name,availableNights){
    this.name = name;
    this.availableNights = availableNights;
    this.checkAvailable = function(input){
       return (input <= availableNights);
    }
}
window.onload = addHotels();
function addHotels(){
    hotels = [];
    for(let i=0; i<3; i++){
        let hotel = new HotelConstructor(`Hotel ${i+1}`, Math.floor(Math.random()*10));
        hotels.push(hotel);
    }
    for(let i=0; i<hotels.length; i++){
        let hotelDiv = document.createElement("div");
        hotelDiv.className = "hotelDiv";

        let name = document.createElement("h3");
        name.textContent = hotels[i].name;
        hotelDiv.appendChild(name);
        let input = document.createElement("input");
        input.type = "number";
        input.placeholder = "How many nights you want to stay?";
        input.id=`input${i}`
        hotelDiv.appendChild(input);
        let button = document.createElement("button");
        button.textContent = "Check Availability";
        let callFunction = function() {
            let newObject;
            if(hotels[i].checkAvailable(document.getElementById(`input${i}`).value)){
                newObject = document.createElement("button");
                newObject.textContent = "Reserve now";
            }else{
                newObject = document.createElement("p");
                newObject.textContent = "not that many nights available";
            }
            document.getElementsByClassName("hotelDiv")[i].appendChild(newObject);
        };
        button.addEventListener("click", callFunction , false);
        hotelDiv.appendChild(button);
        document.getElementById("hotels").appendChild(hotelDiv);
    }
}