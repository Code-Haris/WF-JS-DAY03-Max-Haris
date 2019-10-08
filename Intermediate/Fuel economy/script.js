function fuelPrice(){
  var fuel100 = document.getElementById("fuelPerUnit").value;
  var fuelPrice = document.getElementById("fuelPrice").value;
  var distance = document.getElementById("KM").value;
 result=parseFloat(fuel100)/100*parseFloat(fuelPrice)*parseFloat(distance);
if(!isNaN(result))
   {
   document.getElementById("answer").innerHTML="You pay " + result.toFixed(2); 


}
}
function fuelConsumption(){
  let fuel100 = document.getElementById("fuelPerUnit").value;
  var fuelcalculator = document.getElementById("fuelcalculator").value;
  var fueltype = document.forms[0];  
  var txt = "";
    var i;
    for (i = 0; i < fueltype.length; i++) {
        if (fueltype[i].checked) {
            txt = txt + fueltype[i].value + " ";
        }
    }
  let distance = document.getElementById("KM").value;
  result=parseFloat(fuel100)/100*parseFloat(distance);
  if(!isNaN(result))
    {
      document.getElementById("answers").innerHTML=" And you spent "+ result.toFixed(2) +" units of "+ txt;
    }
}