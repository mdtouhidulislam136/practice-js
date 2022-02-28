function hourToMinute(hour) {
var TotalHourToMinute = hour * 60;

return TotalHourToMinute;

}

var result = hourToMinute(70);
console.log("Converted time", result , "minutes");


function celsiusToFahrenheit (celsius) {
var fahrenheit =( celsius * 9/5) + 32;
return fahrenheit;
}

var ResultInFahrenheit = celsiusToFahrenheit(20);
console.log(ResultInFahrenheit, "Degree fahrenheit");

function fahrenheitTocelsius (fahrenheit) {
    var celsius = (fahrenheit-32)*5/9
    return celsius;
    }
    
    var ResultIncelsius = fahrenheitTocelsius(30);
    console.log(ResultIncelsius, "Degree celsius");