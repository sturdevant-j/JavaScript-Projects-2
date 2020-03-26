//switch
function food_function() {
    var food_output;
    var food = document.getElementById("food_input").value;
    var food_string = " is a tasty food!";
    switch(food) {
        case "salad":
            food_output = "salad" + food_string;
        break;
        case "pasta":
            food_output = "pasta" + food_string;
        break;
        case "soup":
            food_output = "soup" + food_string;
        break;
        case "cake":
            food_output = "cake" + food_string;
        break;
        case "fruit":
            food_output = "fruit" + food_string;
        break;
        default:
            food_output = "Please enter the food exactly as written on the above list.";  
    }
    document.getElementById("output").innerHTML = food_output;
}

// getElementsByClassName example
function hello_world_function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The sentence has changed!";    //A changed to 0, it will be displayed in the 1st element with the class click once the button is clicked
}
 //canvas
// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.beginPath();
// ctx.arc(95,50,40,0,2*Math.PI);
// ctx.stroke();
 